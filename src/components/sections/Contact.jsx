import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    max-width: 1100px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    @media (max-width: 760px) {
        font-size: 32px;
        margin-top: 10px;
    }
    @media (max-width: 960px) {
        font-size: 42px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const ContactForm = styled.form` /* Changed from div to form for proper form submission */
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    padding: 32px;
    background-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 12px;
    margin-top: 28px;
    gap: 12px;
    box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
`;

const ContactTitle = styled.div`
    font-size: 28px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 50};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactInputMassage = styled.textarea`
    flex: 1;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary + 50};
    outline: none;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
    }
`;

const ContactButton = styled.button`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: hsla(271, 100%, 50%, 1);
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
`;

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_gfsu92o',
            'template_k9m3hyc',
            form.current,
            {publicKey: 'gA9jFRhj1agrfIV2d'}
        )
        .then(
            (result) => {
                alert("Thank you , I will contact you soon....");
                form.current.reset(); 
            },
            (error) => {
                alert(error);
            }
        );
    };

    return (
        <Container id="Contact">
            <Wrapper>
                <Title>Contact</Title>
                <Desc>
                Feel free to reach out to me using the form below. I'm eager to connect and discuss opportunities,
                 collaborations, or any inquiries you may have. Looking forward to hearing from you!
                </Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Email Me</ContactTitle>
                    <ContactInput type="email" placeholder="Your email" name="from_email" required />
                    <ContactInput type="text" placeholder="Your Name" name="from_name" required />
                    <ContactInput type="text" placeholder="Subject" name="subject" required />
                    <ContactInputMassage placeholder="Message" name="message" rows={4} required />
                    <ContactButton type="submit">Send</ContactButton>
                </ContactForm>
            </Wrapper>
        </Container>
    );
};

export default Contact;
