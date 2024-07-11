import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'


const Container = styled.div`
    display: flex ;
    z-index: 1 ;
    flex-direction : column;
    justify-content : center ;
    position : relative ;
    margin-top: 50px ;
    align-items: center ;   
`;

const Wrapper = styled.div`
    position : relative ;
    display : flex; 
    align-items: center ; 
    justify-content : space-between ;
    gap: 12px ;
    width: 100% ;
    gap: 12px ;
    max-width : 1100px ;
    flex-direction: column ;
    @media (max-width : 960px){
        flex-direction: column ;}
`;

const Title = styled.div`
    font-size: 52px ;
    text-align : center; 
    font-weight : 600 ;
    margin-top: 20px ;
    @media (max-width : 760px){
        font-size: 32px ;
        margin-top: 10px ;}
    @media (max-width : 960px){
        font-size: 42px ;}
`;  

const Desc = styled.div`
    font-size: 18px ;
    text-align : center; 
    font-weight : 500 ;
    color: ${({theme}) => theme.text_secondary}
    @media (max-width : 768px){
        font-size: 16px ;}
 `;

const ContactForm = styled.div`
    width:95%;
    max-width: 600px ;
    display: flex ;
    flex-direction: column;
    padding: 32px ;
    background-color: rgba(17 , 25 ,40,0.83);
    border: 1px solid rgba(255 , 255 ,255 ,0.125) ;
    border-radius: 12px;
    margin-top: 28px ;
    gap: 12px;
    box-shadow: rgba(23 ,92, 230, 0.1) 0px 4px 24px;

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
const ContactButton = styled.input`
    width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  cursor:pointer;
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
            "service_id",
            "template_id",
            form.current,
            "token_id"
        )
        .then(
            (result)=>{
                alert("Message Sent");
                form.current.result();
            },
            (error) => {
                alert(error) ;
            }
        )
    }
  return (
    <Container id="Contact">
        <Wrapper>
            <Title>Contact</Title>
            <Desc style= {{marginBottom: "40px"}}>
                My work experience as a software engineer and work with many people but have internship till now
            </Desc>
            <ContactForm  onSubmit={handleSubmit}>
                <ContactTitle>Email Me</ContactTitle>
                <ContactInput placeholder="Your email" name="from_email"/>
                <ContactInput placeholder="Your Name" name="from_name"/>
                <ContactInput placeholder="Subject" name="subject"/>
                <ContactInputMassage placeholder="Massage" name="massage" rows={4}/>
                <ContactButton type="submit" value= "Send"/>
            </ContactForm>
        </Wrapper>
    </Container>
  )
}

export default Contact
