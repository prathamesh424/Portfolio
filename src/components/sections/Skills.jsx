import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants';
import { Tilt } from 'react-tilt';



const Container = styled.div`
    display: flex ;
    z-index: 1 ;
    flex-direction : column;
    justify-content : center ;
    position : relative ;
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

const SkillsContainer= styled.div`
    width : 100% ;
    display: flex ;
    flex-wrap: wrap ;
    gap : 15px  ;
    margin-top: 20px  ;
    justify-content: center ;
`;
const Skill= styled.div`
    width : 100% ;
    max-width: 500px ;
    background-color: rgba(17 , 25 , 40, 0.83);
    border: 1px solid rgba(255 ,255,255 , 0.125);
    box-shadow:rgba(23, 92, 230, 0.15) 0px 4px 24px ;
    border-radius: 16px ;
    padding: 18px 36px ;  
    @media (max-width : 768px){
        max-width: 400px ;}
    @media (max-width : 500px){
         max-width: 320px ;
         padding : 10px  36px ;}
`;
const SkillTitle= styled.div`
    font-size: 28px ;
    font-weight: 600px ;
    margin-bottom: 20px ;
    text-align: center; 
 `;
const SkillList= styled.div`
    display: flex ;
    justify-content: center ; 
    margin-bottom: 20px ;
    gap: 12px ;
    flex-wrap: wrap;
`;


const SkillItem = styled.div`
    font-size: 16px ;
    font-weight :400 ;
    color: ${({theme}) => theme.text_primary + 80};
    border: 1px solid ${({theme}) => theme.text_primary + 80};
    border-radius: 12px ;
    gap:8px ;
    padding: 16px; 
    align-item: center; 
    display: flex;
    justify-content: center;  
    @media (max-width : 768px){
         font-size: 14px ;
         padding : 8px  12px ;}

    @media (max-width : 500px){
         font-size: 14px ;
         padding : 6px  12px ;}
`;

const SkillImage = styled.img`
    width : 24px ;
    height : 24px ;
`;
const Skills = () => {
  return (
    <Container id="Skills">
        <Wrapper>
            <Title>Skills</Title>
            <Desc style={{marginBottom: "40px"}}>
                    As an engineering student, I possess a diverse set of technical skills and practical knowledge essential for 
                    problem-solving and innovation in various fields. Proficient in areas such as: 
            </Desc>
            <SkillsContainer>
                {skills.map((skill , index) =>
                    <Tilt>
                    <Skill key={`skill.${index}`}> 
                        <SkillTitle>{skill.title}</SkillTitle>
                        <SkillList>{skill.skills.map((item , index1) =>(
                            <SkillItem key={`skill1.${index1}`}>
                                <SkillImage  src={item.image}/>
                                {item.name}
                            </SkillItem>
                            )    
                        )}</SkillList>
                    </Skill>
                    </Tilt>
                 )}
            </SkillsContainer>
        </Wrapper>
    </Container>
      
   )
}

export default Skills
