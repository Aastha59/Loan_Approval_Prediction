import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from xgboost import XGBClassifier
import pickle as pk

# Load Data
data = pd.read_csv('D:/PROJECTS/Loan_Approval_Prediction/loan_prediction_dataset1.csv')
data.drop(columns=['Id'], inplace=True)  

# Data Cleaning & Encoding with infer_objects() to fix FutureWarning
data['Married/Single'] = data['Married/Single'].replace(['Single', 'Married'], [1,0]).infer_objects()
data['House_Ownership'] = data['House_Ownership'].replace(['Rent', 'Own', 'Norent_noown'], [0,1,2]).infer_objects()
data['Car_Ownership'] = data['Car_Ownership'].str.strip().str.capitalize().replace(['Yes', 'No'], [1,0]).infer_objects()
data['Car_Ownership'] = data['Car_Ownership'].fillna(0)
data['education'] = data['education'].replace(
    ['Post-Graduate', 'Undergraduate', 'High School', 'Bachelor', 'Master', 'PhD', 'Postgraduate'],
    ['Graduate','Not Graduate', 'Not Graduate', 'Graduate', 'Graduate', 'Graduate', 'Graduate']
).infer_objects()
data['education'] = data['education'].str.strip().replace(['Not Graduate', 'Graduate'], [0,1]).infer_objects()
data['self_employed'] = data['self_employed'].str.strip().replace(['No', 'Yes'], [0,1]).infer_objects()
data['loan_status'] = data['loan_status'].str.strip().replace(['Rejected', 'Approved'], [0,1]).infer_objects()

# Prepare features and target
input_data = data.drop(columns=['loan_status'])
output_data = data['loan_status']

categorical_cols = input_data.select_dtypes(include=['object']).columns.tolist()
numeric_cols = input_data.select_dtypes(exclude=['object']).columns.tolist()

# OneHotEncoder with sparse_output=False for compatibility with newer sklearn
encoder = OneHotEncoder(drop='first', sparse_output=False, handle_unknown='ignore')
input_data_encoded = pd.DataFrame(encoder.fit_transform(input_data[categorical_cols]), columns=encoder.get_feature_names_out(categorical_cols))

input_data_final = pd.concat([input_data[numeric_cols].reset_index(drop=True), input_data_encoded.reset_index(drop=True)], axis=1)

# Train/test split
x_train, x_test, y_train, y_test = train_test_split(input_data_final, output_data, test_size=0.2, random_state=42)

# Scaling
scaler = StandardScaler()
x_train_scaled = scaler.fit_transform(x_train)
x_test_scaled = scaler.transform(x_test)

# Model training
model = XGBClassifier(
    n_estimators=200,
    learning_rate=0.05,
    max_depth=5,
    subsample=0.8,
    colsample_bytree=0.8,
    random_state=42
)
model.fit(x_train_scaled, y_train)
print("Test accuracy:", model.score(x_test_scaled, y_test))

# Save model, scaler, encoder
pk.dump(model, open('model2.pkl', 'wb'))
pk.dump(scaler, open('scaler2.pkl', 'wb'))
pk.dump(encoder, open('encoder.pkl', 'wb'))

# Sample prediction data input (make sure columns match input_data columns)
pred_data = pd.DataFrame([[21,1,1,0,0,'Engineer','Bangalore','Karnataka',1,1,0,0,1,1,350000,2200000,18,538,15300000,5800000,20400000,6400000]], columns=input_data.columns)

# OneHot encode prediction categorical data
pred_data_encoded = pd.DataFrame(encoder.transform(pred_data[categorical_cols]), columns=encoder.get_feature_names_out(categorical_cols))
pred_data_final = pd.concat([pred_data[numeric_cols].reset_index(drop=True), pred_data_encoded.reset_index(drop=True)], axis=1)

# Align columns with training data (fill missing with 0)
missing_cols = set(x_train.columns) - set(pred_data_final.columns)
for col in missing_cols:
    pred_data_final[col] = 0
pred_data_final = pred_data_final[x_train.columns]

# Scale and predict
pred_data_scaled = scaler.transform(pred_data_final)
prediction = model.predict(pred_data_scaled)
print("✅ Loan Approved" if prediction[0] == 1 else "❌ Loan Rejected")
