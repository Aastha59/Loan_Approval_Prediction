import streamlit as st

def show_faq():
    st.subheader("❓ Frequently Asked Questions")

    with st.expander("What data is needed for loan prediction?"):
        st.write("We use income, dependents, loan amount, CIBIL score, assets, and more.")

    with st.expander("Is my data safe?"):
        st.write("Yes, your data is processed locally and never stored.")

    with st.expander("How accurate is the model?"):
        st.write("The model achieves ~85-90% accuracy on test data.")
