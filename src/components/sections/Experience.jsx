import React from 'react'
import styled from 'styled-components'
import { experiences } from '../../data/constants';
import ExperienceCard from '../cards/ExperienceCard';
import {VerticalTimeline} from 'react-vertical-timeline-component';

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

 
const Experience = () => {
  return (
    <Container id="Experience">
        <Wrapper>
            <Title>Experience</Title>
            <Desc style= {{marginBottom: "40px"}}>
            My work experience as a software engineer includes developing responsive web applications using
             React and Node.js, and creating full-featured platforms with React, Redux, and Firebase.
              Proficient in the MERN stack for building scalable web applications.      
              </Desc>
            <VerticalTimeline>
                {experiences.map((experience , index ) => (
                    <ExperienceCard experience = {experience}/>
                ))}
            </VerticalTimeline>
        </Wrapper>
    </Container>
  )
}

export default Experience
