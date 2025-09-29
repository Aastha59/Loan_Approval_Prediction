import streamlit as st

def show_about():
    st.subheader("ℹ️ About the Project")
    st.write("""
        This AI-powered loan prediction tool uses **machine learning**  
        to assess loan eligibility based on applicant financial details.  

        ✅ Predicts loan approval in seconds  
        ✅ Considers income, dependents, credit history, assets  
        ✅ User-friendly design with modern UI  
    """)
