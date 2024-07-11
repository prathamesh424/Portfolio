 import React, { useState } from 'react'
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from '../cards/ProjectCard';


const Container = styled.div`
    display: flex ;
    z-index: 1 ;
    flex-direction : column;
    justify-content : center ;
    position : relative ;
    padding : 0 16px;
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

const ToggleButtonGroup  = styled.div`
    display: flex ;
    border: 1.5px solid white ;
    color: white ;
    font-size : 16px ;
    border-radius : 12px ;
    font-weight : 500; 
    margin: 22px 0 ;
    @media (max-width : 768px){
        font-size: 12px ;}
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
    width : 1.5px ;
    background: white; 
`;

const CardContainer = styled.div`
    display: flex ;
    justify-content: center; 
    align-items:center;
    gap: 28px ;
    flex-wrap: wrap;
`;

const Projects = () => {
    const [toggle , setToggle] = useState("all");
  return (
    <Container id="Projects">
        <Wrapper>
            <Title>Projects</Title>
            <Desc style= {{marginBottom: "40px"}}>
            Engineered responsive and dynamic web applications utilizing React, Node.js, and Firebase,
             with a strong emphasis on user experience and scalability. Demonstrated expertise in full-stack development 
             using the MERN stack to deliver robust and efficient solutions.
            </Desc>
            
            <ToggleButtonGroup>
                <ToggleButton 
                    active={toggle === "all"}
                    onClick={() => {setToggle("all")}}
                    >All</ToggleButton>
                <Divider/>
                <ToggleButton 
                    active={toggle === "web app"}
                    onClick={() => {setToggle("web app")}}
                    >Web App</ToggleButton>
                <Divider/>
                <ToggleButton 
                    active={toggle === "java"}
                    onClick={() => {setToggle("java")}}
                    >Java</ToggleButton>
                <Divider/>
                <ToggleButton 
                    active={toggle === "website"}
                    onClick={() => {setToggle("website")}}
                    >Website</ToggleButton>
            </ToggleButtonGroup>
        
            <CardContainer>
                {toggle === "all" && projects.map((project) => <ProjectCard project={project}/>)}
                {projects
                .filter((item) => item.category === toggle)
                .map((project) => (
                    <ProjectCard project={project} />
                ))}
            </CardContainer>

        </Wrapper>
    </Container>
  )
}

export default Projects
