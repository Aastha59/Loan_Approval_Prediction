# import streamlit as st
# import pandas as pd
# import pickle as pk
# from streamlit_option_menu import option_menu
# from pages.faq import show_faq
# from pages.faq import show_faq

# # Load model & scaler
# model = pk.load(open('model1.pkl', 'rb'))
# scaler = pk.load(open('scaler1.pkl', 'rb'))
# encoder = pk.load(open('encoder.pkl', 'rb'))

# # Load CSS
# with open("styles.css") as f:
#     st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

# # Title
# st.markdown("<div class='title'>💳 Loan Prediction AI</div>", unsafe_allow_html=True)

# # Sidebar Navigation
# with st.sidebar:
#     selected = option_menu(
#         menu_title="📌 Main Menu",
#         options=["Loan Prediction", "About", "FAQ", "Contact"],
#         icons=["bank", "info-circle", "question-circle", "envelope"],
#         menu_icon="grid-3x3-gap-fill",
#         default_index=0,
#     )

# if selected == "Loan Prediction":
#     st.subheader("🔍 Enter Applicant Details")

#     # 'Age','Experience','Married/Single','House_Ownership','Car_Ownership','Profession','CITY','STATE','CURRENT_JOB_YRS','CURRENT_HOUSE_YRS','Risk_Flag','no_of_dependents','education','self_employed','income_annum','loan_amount','loan_term(months)','cibil_score','residential_assets_value','commercial_assets_value','luxury_assets_value','bank_asset_value'
    
#     age = st.selectbox('Age', options=list(range(18, 71)), index=0)
#     Experience = st.selectbox('Years of Experience', options=list(range(0,51)), index=0)
#     married = st.selectbox('Martial Status', ['Single', 'Married'])
#     house_own = st.selectbox('House Ownership', ['Rent', 'Own', 'Norent_noown'])
#     car_own = st.selectbox('Car Ownership', ['Yes', 'No'])
#     profession = st.text_input('Profession', 'Engineer')
#     city = st.text_input('City', 'Bangalore')
#     state =  st.text_input('State', 'Karnataka')
#     current_job_yrs = st.selectbox("Current job years", options=list(range(0,41)), index=0)
#     current_house_years = st.selectbox("Current house years", options=list(range(0,101)), index=0)
#     risk_flag = st.selectbox("Risk Flag (Any pending loans)", ['Yes', 'No'])
#     no_of_dep = st.slider('Number of Dependents', 0, 10, 0)
#     grad = st.selectbox('Education', ['Graduated', 'Not Graduated'])
#     self_emp = st.selectbox('Self Employed?', ['Yes', 'No'])
#     Annual_Income = st.number_input('Annual Income', 0, 10000000, step=10000)
#     Loan_Amount = st.number_input('Loan Amount', 0, 10000000, step=10000)
#     Loan_Dur = st.slider('Loan Duration (Years)', 0, 10, 0)
#     Cibil = st.selectbox('Cibil Score', options=list(range(0, 1001)), index=0)
#     residential_assets_value = st.text_input('Residential assets value', 1000000)
#     commercial_assets_value = st.text_input('Commercial assets value', 1000000)
#     luxury_assets_value = st.text_input('Luxury assets value', 1000000)
#     bank_asset_value = st.text_input('Bank assets value', 1000000)
#     # Assets = st.number_input('Assets Value', 0, 10000000, step=10000)

#     # Encode categorical values
#     grad_s = 1 if grad == 'Graduated' else 0
#     emp_s = 1 if self_emp == 'Yes' else 0
#     married_s = 1 if married == 'Single' else 0
#     car_s = 1 if car_own == 'Yes' else 0
#     house_s = 1 if house_own == 'Yes' else 0
#     risk_flag_s = 0 if risk_flag == 'Yes' else 1

#     # if st.button("Predict"):
#     #     pred_data = pd.DataFrame(
#     #         [['Age','Experience','Married/Single','House_Ownership','Car_Ownership','Profession','CITY','STATE','CURRENT_JOB_YRS','CURRENT_HOUSE_YRS','Risk_Flag','no_of_dependents','education','self_employed','income_annum','loan_amount','loan_term(months)','cibil_score','residential_assets_value','commercial_assets_value','luxury_assets_value','bank_asset_value']],
#     #         columns=['Age','Experience','Married/Single','House_Ownership','Car_Ownership','Profession','CITY','STATE','CURRENT_JOB_YRS','CURRENT_HOUSE_YRS','Risk_Flag','no_of_dependents','education','self_employed','income_annum','loan_amount','loan_term(months)','cibil_score','residential_assets_value','commercial_assets_value','luxury_assets_value','bank_asset_value']
#     #     )
#     #     pred_data = scaler.transform(pred_data)
#     #     predict = model.predict(pred_data)

#     #     if predict[0] == 1:
#     #         st.markdown("<div class='result approved'>✅ Loan is Approved</div>", unsafe_allow_html=True)
#     #     else:
#     #         st.markdown("<div class='result rejected'>❌ Loan is Rejected</div>", unsafe_allow_html=True)

#     if st.button("Predict"):
#         st.write("🔎 Raw Data Before Encoding", pred_data)
#         st.write("🔎 Encoded Data", pred_encoded)
#         st.write("🔎 Final Aligned Data", pred_data_final)

#         # Step 1: Build dataframe from user inputs
#         pred_data = pd.DataFrame([{
#             "Age": age,
#             "Experience": Experience,
#             "Married/Single": 1 if married == "Single" else 0,  # match training
#             "House_Ownership": 0 if house_own == "Rent" else (1 if house_own == "Own" else 2),
#             "Car_Ownership": 1 if car_own == "Yes" else 0,
#             "Profession": profession,
#             "CITY": city,
#             "STATE": state,
#             "CURRENT_JOB_YRS": current_job_yrs,
#             "CURRENT_HOUSE_YRS": current_house_years,
#             "Risk_Flag": 0 if risk_flag == "Yes" else 1,
#             "no_of_dependents": no_of_dep,
#             "education": 1 if grad == "Graduated" else 0,
#             "self_employed": 1 if self_emp == "Yes" else 0,
#             "income_annum": Annual_Income,
#             "loan_amount": Loan_Amount,
#             "loan_term(months)": Loan_Dur * 12,  # Convert years → months
#             "cibil_score": Cibil,
#             "residential_assets_value": residential_assets_value,
#             "commercial_assets_value": commercial_assets_value,
#             "luxury_assets_value": luxury_assets_value,
#             "bank_asset_value": bank_asset_value
#         }])

#         # Apply OneHotEncoder with same columns
#         pred_encoded = pd.DataFrame(encoder.transform(pred_data[encoder.feature_names_in_]),
#                                 columns=encoder.get_feature_names_out())
    
#         # Combine numeric + encoded columns
#         numeric_cols = pred_data.drop(columns=encoder.feature_names_in_)
#         pred_data_final = pd.concat([numeric_cols.reset_index(drop=True), pred_encoded.reset_index(drop=True)], axis=1)

#         # Align column order to training data
#         pred_data_final = pred_data_final.reindex(columns=scaler.feature_names_in_, fill_value=0)

#         # Scale & predict
#         pred_data_scaled = scaler.transform(pred_data_final)
#         predict = model.predict(pred_data_scaled)

#         if predict[0] == 1:
#             st.markdown("<div class='result approved'>✅ Loan is Approved</div>", unsafe_allow_html=True)
#         else:
#             st.markdown("<div class='result rejected'>❌ Loan is Rejected</div>", unsafe_allow_html=True)
    
#         # # Step 2: One-hot encode categorical columns
#         # pred_data = pd.get_dummies(pred_data)
    
#         # # Step 3: Align columns with training feature set
#         # expected_features = scaler.feature_names_in_  # the columns used during training
#         # pred_data = pred_data.reindex(columns=expected_features, fill_value=0)
    
#         # # Step 4: Scale and predict
#         # pred_data_scaled = scaler.transform(pred_data)
#         # predict = model.predict(pred_data_scaled)
    
#         # if predict[0] == 1:
#         #     st.markdown("<div class='result approved'>✅ Loan is Approved</div>", unsafe_allow_html=True)
#         # else:
#         #     st.markdown("<div class='result rejected'>❌ Loan is Rejected</div>", unsafe_allow_html=True)


# elif selected == "About":
#     from pages.about import show_about
#     show_about()

# elif selected == "FAQ":
#     from pages.faq import show_faq
#     show_faq()

# elif selected == "Contact":
#     from pages.contact import show_contact
#     show_contact()

# # Footer
# # st.markdown("<div class='footer'>✨ Built with ❤️ using Streamlit | <a href='https://github.com/'>GitHub</a></div>", unsafe_allow_html=True)









import streamlit as st
import pandas as pd
import pickle as pk
from streamlit_option_menu import option_menu
from pages.faq import show_faq
import plotly.graph_objects as go




# Load model, scaler, and encoder
model = pk.load(open('model2.pkl', 'rb'))
scaler = pk.load(open('scaler2.pkl', 'rb'))
encoder = pk.load(open('encoder.pkl', 'rb'))

# ✅ Load saved accuracy
accuracy = pk.load(open('accuracy.pkl', 'rb'))

# Load CSS
with open("styles.css") as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

# Theme Switcher
theme_choice = st.sidebar.radio("🌗 Theme Mode", ["Light", "Dark"], index=0)

# Dynamically inject theme change
theme_js = f"""
<script>
    document.body.setAttribute('data-theme', '{'dark' if theme_choice=="Dark" else 'light'}');
</script>
"""
st.markdown(theme_js, unsafe_allow_html=True)

# Title
st.markdown("<div class='title'> 💳 Loan Prediction AI</div>", unsafe_allow_html=True)


# ✅ Show model accuracy on top (Dashboard feel)
st.metric("📊 Model Accuracy", f"{accuracy * 100:.2f}%")

# Sidebar Navigation
with st.sidebar:
    selected = option_menu(
        menu_title="📌 Main Menu",
        options=["Loan Prediction", "About", "FAQ", "Contact"],
        icons=["bank", "info-circle", "question-circle", "envelope"],
        menu_icon="grid-3x3-gap-fill",
        default_index=0,
    )

if selected == "Loan Prediction":
    tab1, tab2, tab3 = st.tabs(["📊 Prediction Form", "📈 Model Performance", "📝 Insights"])

    with tab1:
        st.subheader("🔍 Enter Applicant Details")

        # Input fields
        age = st.selectbox('Age', options=list(range(18, 71)), index=0, key="age_select")
        Experience = st.selectbox('Years of Experience', options=list(range(0, 51)), index=0, key="exp_select")
        married = st.selectbox('Marital Status', ['Single', 'Married'], key="married_select")
        house_own = st.selectbox('House Ownership', ['Rent', 'Own', 'Norent_noown'], key="house_own_select")
        car_own = st.selectbox('Car Ownership', ['Yes', 'No'], key="car_own_select")
        profession = st.text_input('Profession', 'Engineer', key="profession_input")
        city = st.text_input('City', 'Bangalore', key="city_input")
        state = st.text_input('State', 'Karnataka', key="state_input")
        current_job_yrs = st.selectbox("Current job years", options=list(range(0, 41)), index=0, key="job_yrs_select")
        current_house_years = st.selectbox("Current house years", options=list(range(0, 101)), index=0, key="house_yrs_select")
        risk_flag = st.selectbox("Risk Flag (Any pending loans)", ['Yes', 'No'], key="risk_flag_select")
        no_of_dep = st.slider('Number of Dependents', 0, 10, 0, key="dep_slider")
        grad = st.selectbox('Education', ['Graduated', 'Not Graduated'], key="grad_select")
        self_emp = st.selectbox('Self Employed?', ['Yes', 'No'], key="self_emp_select")
        Annual_Income = st.number_input('Annual Income', 0, 10000000, step=10000, key="income_input")
        Loan_Amount = st.number_input('Loan Amount', 0, 10000000, step=10000, key="loan_amt_input")
        Loan_Dur = st.slider('Loan Duration (Years)', 0, 10, 0, key="loan_dur_slider")
        Cibil = st.selectbox('Cibil Score', options=list(range(0, 1001)), index=600, key="cibil_select")
        residential_assets_value = st.number_input('Residential assets value', 0, 10000000, step=10000, key="res_assets_input")
        commercial_assets_value = st.number_input('Commercial assets value', 0, 10000000, step=10000, key="com_assets_input")
        luxury_assets_value = st.number_input('Luxury assets value', 0, 10000000, step=10000, key="lux_assets_input")
        bank_asset_value = st.number_input('Bank assets value', 0, 10000000, step=10000, key="bank_assets_input")


    with tab2:
        # ✅ Load precomputed accuracy
        import pickle as pk
        accuracy = pk.load(open('accuracy.pkl', 'rb'))
    
        st.metric("Model Accuracy", f"{accuracy * 100:.2f}%")
        st.progress(accuracy)  # progress bar expects value between 0 and 1
        st.caption("✅ Accuracy measured on test set")
    
        # ✅ Declare a default chart for approval distribution
        import plotly.express as px
        chart_data = pd.DataFrame({
            "Status": ["Approved", "Rejected"],
            "Count": [60, 40]  # <-- replace with your real stats if available
        })
        fig = px.pie(chart_data, names="Status", values="Count", title="Approval Distribution")
        
        # st.subheader("📊 Approval Distribution")
        # st.plotly_chart(fig, use_container_width=True, key="approval_pie_chart")
    
    with tab3:
        st.markdown("""
        - **Key Insight 1:** Higher income and lower requested loan amounts boost approval odds.
        - **Key Insight 2:** Bad CIBIL score (<700) sharply increases rejection rate.
        - **Key Insight 3:** Long job tenure (5+ years) signals job stability and helps approvals.
        - **Key Insight 4:** Owning a home or substantial assets increases financial credibility.
        - **Key Insight 5:** Applicants with fewer dependents and no risk flags are favored.
        - **Key Insight 6:** Graduate/postgraduate education improves approval chances.
        - **Key Insight 7:** Metro or Tier-1 city applicants have slightly easier access due to economic factors.
        - **Key Insight 8:** Professions in technology, healthcare, and government have higher trust levels.
        - **Key Insight 9:** High bank asset value and liquid balances safeguard loan repayment.
        - **Key Insight 10:** Self-employed applicants: approvals rise substantially with proven stable income.
        """)
    

    # st.subheader("🔍 Enter Applicant Details")

    # Input fields
    # age = st.selectbox('Age', options=list(range(18, 71)), index=0)
    # age = st.selectbox('Age', options=list(range(18, 71)), index=0, key="age_select")

    # Experience = st.selectbox('Years of Experience', options=list(range(0, 51)), index=0)
    # married = st.selectbox('Martial Status', ['Single', 'Married'])
    # house_own = st.selectbox('House Ownership', ['Rent', 'Own', 'Norent_noown'])
    # car_own = st.selectbox('Car Ownership', ['Yes', 'No'])
    # profession = st.text_input('Profession', 'Engineer')
    # city = st.text_input('City', 'Bangalore')
    # state = st.text_input('State', 'Karnataka')
    # current_job_yrs = st.selectbox("Current job years", options=list(range(0, 41)), index=0)
    # current_house_years = st.selectbox("Current house years", options=list(range(0, 101)), index=0)
    # risk_flag = st.selectbox("Risk Flag (Any pending loans)", ['Yes', 'No'])
    # no_of_dep = st.slider('Number of Dependents', 0, 10, 0)
    # grad = st.selectbox('Education', ['Graduated', 'Not Graduated'])
    # self_emp = st.selectbox('Self Employed?', ['Yes', 'No'])
    # Annual_Income = st.number_input('Annual Income', 0, 10000000, step=10000)
    # Loan_Amount = st.number_input('Loan Amount', 0, 10000000, step=10000)
    # Loan_Dur = st.slider('Loan Duration (Years)', 0, 10, 0)
    # Cibil = st.selectbox('Cibil Score', options=list(range(0, 1001)), index=600)
    # residential_assets_value = st.number_input('Residential assets value', 0, 10000000, step=10000)
    # commercial_assets_value = st.number_input('Commercial assets value', 0, 10000000, step=10000)
    # luxury_assets_value = st.number_input('Luxury assets value', 0, 10000000, step=10000)
    # bank_asset_value = st.number_input('Bank assets value', 0, 10000000, step=10000)



    if st.button("Predict"):
        # Step 1: Build raw dataframe
        pred_data = pd.DataFrame([{
            "Age": age,
            "Experience": Experience,
            "Married/Single": 1 if married == "Single" else 0,
            "House_Ownership": 0 if house_own == "Rent" else (1 if house_own == "Own" else 2),
            "Car_Ownership": 1 if car_own == "Yes" else 0,
            "Profession": profession,
            "CITY": city,
            "STATE": state,
            "CURRENT_JOB_YRS": current_job_yrs,
            "CURRENT_HOUSE_YRS": current_house_years,
            "Risk_Flag": 1 if risk_flag == "No" else 0,
            "no_of_dependents": no_of_dep,
            "education": 1 if grad == "Graduated" else 0,
            "self_employed": 1 if self_emp == "Yes" else 0,
            "income_annum": Annual_Income,
            "loan_amount": Loan_Amount,
            "loan_term(months)": Loan_Dur * 12,
            "cibil_score": Cibil,
            "residential_assets_value": residential_assets_value,
            "commercial_assets_value": commercial_assets_value,
            "luxury_assets_value": luxury_assets_value,
            "bank_asset_value": bank_asset_value
        }])

        # st.write("🔎 Raw Data Before Encoding", pred_data)

        # Step 2: Apply OneHotEncoder
        # Step 2: Apply OneHotEncoder (Fix)
        categorical_data = pred_data[encoder.feature_names_in_].astype(str)

        pred_encoded = pd.DataFrame(
            encoder.transform(categorical_data),
            columns=encoder.get_feature_names_out()
        )
        # st.write("🔎 Encoded Data", pred_encoded)

        # Step 3: Combine numeric + encoded columns
        numeric_cols = pred_data.drop(columns=encoder.feature_names_in_)
        pred_data_final = pd.concat(
            [numeric_cols.reset_index(drop=True), pred_encoded.reset_index(drop=True)], axis=1
        )
        # st.write("🔎 Final Data Before Alignment", pred_data_final)

        # Step 4: Align columns to training data
        pred_data_final = pred_data_final.reindex(columns=scaler.feature_names_in_, fill_value=0)
        # st.write("🔎 Final Aligned Data (Same Columns as Training)", pred_data_final)

        # Step 5: Scale & Predict
        pred_data_scaled = scaler.transform(pred_data_final)
        predict = model.predict(pred_data_scaled)

        # st.write("✅ Prediction Output (Raw)", predict)

        if predict[0] == 1:
            st.markdown("<div class='result approved'>✅ Loan is Approved</div>", unsafe_allow_html=True)
        else:
            st.markdown("<div class='result rejected'>❌ Loan is Rejected</div>", unsafe_allow_html=True)
        
        gauge_value = float(model.predict_proba(pred_data_scaled)[0][1]) * 100
        fig = go.Figure(go.Indicator(
            mode="gauge+number",
            value=gauge_value,
            title={'text': "Approval Probability"},
            gauge={'axis': {'range': [0, 100]},
               'bar': {'color': "#4caf50" if gauge_value > 50 else "#f44336"}}
    ))
    # st.plotly_chart(fig, use_container_width=True)
    st.plotly_chart(fig, use_container_width=True, key="approval_gauge_chart")


elif selected == "About":
    from pages.about import show_about
    show_about()

elif selected == "FAQ":
    from pages.faq import show_faq
    show_faq()

elif selected == "Contact":
    from pages.contact import show_contact
    show_contact()
