import React, { useState } from 'react'
import styled from 'styled-components' ;
import {Link as LinkR,  } from 'react-router-dom';
import { MenuRounded} from '@mui/icons-material' ;
import { Bio } from '../data/constants';
// import logo  from '../image/logo.png' ;
import logoVideo from '../image/logo.mp4'


const Nav = styled.div`
    background-color: ${({theme}) => theme.bg};
    height:80px;
    display: flex; 
    align-items : center; 
    justify-content: center; 
    position: sticky ;
    top:0 ;
    z-index:10;
    color:red ;
`;


const NavbarContainer = styled.div`
    width : 100% ;
    max-width : 1200px;
    display: flex; 
    padding: 0 24px ;
    align-items : center; 
    justify-content: space-between; 
    font-size: 1rem ;
`;

const NavLogo = styled(LinkR)`
    width : 80% ;
    padding: 0 6px ;
    color:inherit;
`;

const LogoVideo = styled.video`
    height: 60px;
    border-radius: 10px;
    margin-top: 12px;
    padding: 0 6px ;
    @media only screen and (max-width: 768px) {
        height: 50px;
    }
`;

const NavItems = styled.ul`
    display: flex; 
    align-items : center; 
    justify-content: center;
    width: 100% ;
    gap : 32px ;
    padding : 0 6px ;
    list-style: none ;
    @media screen and (max-width: 760px){
    display: none ;
    }
`;

const NavLink = styled.a`
  color : ${({theme}) => theme.text_primary } ;
  font-weight : 500 ;
  cursor: pointer ;
  transition: all 0.2s ease-in-out ;
  text-decoration: none; 
  &:hover{
      // color:${({theme}) => theme.primary};
      color: red ;
  }
`;

const ButtonContainer = styled.div`
    display: flex; 
    align-items : center; 
    justify-content: center;
    padding : 0 6px ;
    width: 80% ;
    height: 100%;
    @media screen and (max-width: 760px){
    display: none ;
    }
`;

const Linkdin  = styled.a`
    border: 2px solid white ;
    justify-content: center ;
    display: flex ;
    align-items:center ;
    border-radius : 17px ;
    cursor : pointer; 
    padding : 10px 20px ; 
    font-size : 16px ;
    text-decoration: none;
    color: red ;
    font-weight : 500 ;
    border-width : 2px ;
    transition: all 0.2s ease-in-out ;
     &:hover{
       color:white;
       border: 2px solid red ;  }
`;    


const MobileIcon = styled.div`
    height: 100% ;
    color : white ;
    display: flex ;
    align-items: center; 
    display : none  ;
    @media screen and (max-width : 760px){
        display: block;
    }
    cursor: pointer; 
`;

const MobileMenu = styled.ul`
    display: flex; 
    align-items : start; 
    flex-direction: column ;
    width: 100% ;
    gap : 16px ;
    padding : 0 6px ;
    list-style: none ;
    width: 100%;
    padding: 12px 40px 24px 40px ;
    background : ${({theme}) => theme.card_light + 99};
    display : none;
    @media screen and (max-width : 760px){
            display: inherit;
        }
    position : absolute ;
    top:80px ;
    right : 0 ;

    transition: all 0.6s ease-in-out ;
    transform : ${({isOpen}) => 
        isOpen ? "translateY(0)" : "translateY(-100%)"} ;
        border-radius: 0 0 20px 20px ;
        box-shadow: 0 0 10px 0 rgba(0 , 0 , 0 , 0.2); 
        opacity:${({isOpen}) => (isOpen ? "100%" : "0")};
        z-index: ${({isOpen}) => (isOpen ? "1000" : "-1000")};
`;






const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false) ;

  return (
    <Nav>
    <NavbarContainer>
        <NavLogo to="/"> 
            <LogoVideo src={logoVideo} autoPlay loop muted />
        </NavLogo>
        <MobileIcon  onClick={() => setIsOpen(!isOpen)}>
            <MenuRounded style={{color: 'inherit'}}/>
        </MobileIcon>

        <NavItems>
            <NavLink href = "#About">About</NavLink>
            <NavLink href = "#Skills">Skills</NavLink>
            <NavLink href = "#Experience">Experience</NavLink>
            <NavLink href = "#Projects">Projects</NavLink>
            <NavLink href = "#Education">Education</NavLink>
        </NavItems>


        {
            isOpen &&   <MobileMenu isOpen= {isOpen}>
                                <NavLink href = "#About">About</NavLink>
                                <NavLink href = "#Skills">Skills</NavLink>
                                <NavLink href = "#Experience">Experience</NavLink>
                                <NavLink href = "#Projects">Projects</NavLink>
                                <NavLink href = "#Education">Education</NavLink>
                        </MobileMenu>          
        }

        <ButtonContainer>
            <Linkdin href={Bio.github} target= "_Blank">Git hub</Linkdin>
        </ButtonContainer>
    </NavbarContainer>
    </Nav>
  )
}

export default Navbar
