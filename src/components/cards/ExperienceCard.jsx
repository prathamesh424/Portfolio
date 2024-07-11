import React from 'react'
import {VerticalTimelineElement} from 'react-vertical-timeline-component'; 
import "react-vertical-timeline-component/style.min.css" ;
import styled from 'styled-components';
 
const Top = styled.div`
    width: 100%;
    display: flex ;
    max-width: 100% ;
    gap: 12px ;
    `;
const Image = styled.div`
    height: 50px ;
    border-radius: 10px; 
    margin-top: 4px ;
    @media only screen and (max-width : 768px){
    height: 40px;}
`;
const Body = styled.div`
    width: 100% ;
    display: flex ;
    flex-direction: column ;
`;
const Role = styled.div`
    font-size: 18px ;
    font-weight : 600 ;
    @media only screen and (max-width : 768px){
    font-size: 14px ;}
    `;

const Company = styled.div`
    font-size: 14px ;
    font-weight : 500 ;
    color: grey;
    @media only screen and (max-width : 768px){
    font-size: 12px ;}`;

const Date = styled.div`
    font-size: 12px ;
    font-weight : 500 ;
    color: grey;
    @media only screen and (max-width : 768px){
    font-size: 10px ;}`;

const Discription = styled.div`
    width: 100% ;
    font-size: 15px ;
    margin-bottom: 10px;
    font-weight : 400 ;
    @media only screen and (max-width : 768px){
    font-size: 12px ;}` ;
         
const Span = styled.div`
    max-width : 100% ;
    display: -webkit-box ;
`;

const Skills = styled.div`
    width: 100% ;
    display: flex ;
    gap: 12px ;
    margin-top: -10px ;
`;
const Skill = styled.div`
    font-size: 15px ;
     font-weight : 400 ;
     @media only screen and (max-width : 768px){
    font-size: 12px ; }
`;
const ItemWeapper = styled.div`
    gap:8px ;
    display:flex ;
    flex-wrap: wrap ;
`;



const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement 
        icon={<img width='100%' height='100%'
        alt={experience?.company}
        style={{borderRadius : "50%" , objectFit: 'cover'}}
        src={experience.img}
    />}
    contentStyle={{
        display: 'flex',
        flexDirection:'column',
        gap:'12px' ,
        background : '#1d1836',
        color:'fff' ,
        boxShadow: 'rgba(23 , 92 ,230 ,0.15) 0px 4px 24px',
        backgroundColor: 'rgba(17 , 25 ,40  , 0.125)' ,
        borderRadius: '6px'}}

        contentArrowStyle={{
            borderRight: '7px solid rgba(255,255 , 255 ,0.3)'
        }}
        date={experience.date}>   
    <Top>
        <Image src={experience.img}/>
        <Body>
            <Role>{experience.role}</Role>
            <Company>{experience.company}</Company>
            <Date>{experience.date}</Date>
        </Body>
    </Top>  
        <Discription>
            {experience?.desc && <Span>{experience.desc}</Span>}
            {experience?.skils && (
                <>
                    <br/>
                    <Skills>
                        <b>Skills</b>
                        <ItemWeapper>
                        {experience?.skills?.map((skill , index)=> (
                            <Skill>{skill}</Skill>
                        ))}
                        </ItemWeapper>
                    </Skills>
                </>
            )}
        </Discription>
   
    </VerticalTimelineElement>
  )
}

export default ExperienceCard
