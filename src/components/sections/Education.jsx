import React from 'react'
import styled from 'styled-components'
import { education,} from '../../data/constants';
 import {VerticalTimeline} from 'react-vertical-timeline-component';
import EducationCard from '../cards/EducationCard';
import EarthCanvas from '../animimation/Earth';

const Container = styled.div`
    display: flex ;
    z-index: 1 ;
    flex-direction : column;
    justify-content : center ;
    position : relative ;
    margin-top: 30px ;
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

 
const Education = () => {
  return (
    <Container id="Education">
        <Wrapper>
            <Title>Education</Title>
            <Desc style= {{marginBottom: "40px"}}>
                My work experience as a software engineer and work with many people but have internship till now
            </Desc>

            <VerticalTimeline>
                {education.map((item , index ) => (
                    <EducationCard education = {item}/>
                ))}
            </VerticalTimeline>
            <EarthCanvas/>
        </Wrapper>
    </Container>
  )
}

export default Education
