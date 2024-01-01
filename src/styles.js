 import styled from "styled-components";

//  ESTILOS GERAIS
export const Body = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #000;
`;

export const Interface = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const H2Titulo = styled.h2`
  color: #fff;
  font-size: 38px;
  text-align: center;
`;

export const Span = styled.span`
  color: #0e6db6;
`;

// ESTILO DO CABEÇALHO
export const Header = styled.div`
  padding: 80px 4%;
  background-color: #000;
`;

export const InterfaceHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #img-logo {
    width: 70px;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
  a {
    color: #5c5c5c;
    text-decoration: none;
    display: inline-block;
    transition: 0.2s;
    font-size: 25px;
  }

  a:hover {
    color: #fff;
    transform: scale(1.05);
  }

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    padding: 0 40px;
  }

  button {
    padding: 10px 40px;
    font-size: 18px;
    font-weight: 600;
    background-color: #0e6db6;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.2s;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  button:hover {
    transform: scale(1.05);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    box-shadow: 0 0 5px #0e6db6, 0 0 15px #0e6db6, 0 0 25px #0e6db6,
      0 0 100px #0e6db6;
  }
`;

// ESTILO TOPO DO SITE

export const SectionTop = styled.div`
  padding: 100px 4%;
  background-color: #000;

  h1 {
    color: #fff;
    font-size: 42px;
    line-height: 40px;
    margin-top: 80px;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  p {
    color: #fff;
    margin: 90px 30px 40px 10px;
    text-align: justify;
  }

  button {
    padding: 10px 40px;
    font-size: 18px;
    font-weight: 600;
    background-color: #0e6db6;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.2s;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  button:hover {
    box-shadow: 0 0 8px #0e6db6;
    transform: scale(1.05);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
    box-shadow: 0 0 5px #0e6db6, 0 0 15px #0e6db6, 0 0 25px #0e6db6,
      0 0 100px #0e6db6;
  }

  img {
    position: relative;
    animation: flutuar 2s ease-in-out infinite alternate;
  }

  #img-my-face {
    width: 100%;
    max-width: 400px;
    clip-path: circle(50%);
    object-fit: cover;
  }

  @keyframes flutuar {
    0% {
      top: 0;
    }
    100% {
      top: 30px;
    }
  }
`;

export const TopFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
`;

// ESTILO DAS ESPECIALIDADES

export const SectionSkills = styled.div`
  padding: 100px 4%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexSkills = styled.div`
  gap: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 90px;
    margin-top: 50px;
    color: #fff;
    transition: 0.2s;
    cursor: pointer;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  i:hover {
    transform: scale(1.05);
  }
`;

// ESTILO DO SOBRE
export const SectionAbout = styled.div`
  padding: 80px;
`;

export const AboutFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  img{
    border: none;
    border-radius: 20px;
    width: 500px;
    height: 500px;
  }
`;

export const AboutText = styled.div`
   color: #fff;

   p {
    margin: 20px 0;
    text-align: justify;
   }
`;

export const ButtonSocial = styled.div`
  button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background-color: #0e6db6;
    margin: 0 10px;
    cursor: pointer;
    transition: .2s;
  }

  button:hover {
    transform: scale(1.05);
  }

  i {
    font-size: 28px;
  }


`;