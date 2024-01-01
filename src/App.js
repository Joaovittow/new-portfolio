import React from "react";

import Logo from "./assets/logo.png"
import Me from "./assets/me.jpg"

import {
  Body,
  Interface,
  H2Titulo,
  Span,
  Header,
  InterfaceHeader,
  SectionTop,
  TopFlex,
  SectionSkills,
  FlexSkills,
  SectionAbout,
  AboutFlex,
  AboutText,
  ButtonSocial,
} from "./styles";

const App = () => {

  return (
  <Body>
    <Header>
      <InterfaceHeader>
            <div className="logo">
                <a>
                    <img id="img-logo" src={Logo} alt="image-logo"/>
                </a>
            </div>
            <nav className="menu-desktop">
                <ul>
                    <li><a>Início</a></li>
                    <li><a>Especialidades</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Projetos</a></li>
                </ul>
            </nav>
                <a>
                    <button>Contato</button>
                </a>
        </InterfaceHeader>
    </Header>

    <main>
        <SectionTop>
            <Interface>
                <TopFlex>
                    <div className="text-topo-site">
                        <h1>Desenvolvedor<Span> Front-End.</Span></h1>
                        <p>🌐Sou um Desenvolvedor Web.<br />
                        💡Com interesse em desenvolvimento Front-End e Back-End.<br />
                        💻Estou em transição de carreira, em busca de uma oportunidade na área da tecnologia.</p>
                            <a>
                                <button>Entre em Contato</button>
                            </a>
                    </div>

                    <div className="img-topo-site">
                        <img id="img-my-face" src={Me} alt=""/>
                    </div>
                </TopFlex>
            </Interface>
        </SectionTop>

        <SectionSkills>
            <Interface>
                <H2Titulo>MINHAS <Span>ESPECIALIDADES.</Span></H2Titulo>
                <FlexSkills>
                        <i className="devicon-html5-plain colored"></i>

                        <i className="devicon-css3-plain colored"></i>

                        <i className="devicon-git-plain colored"></i>

                        <i id="icon-github" className="devicon-github-original-wordmark"></i>

                        <i className="devicon-javascript-plain colored"></i>

                        <i className="devicon-nodejs-plain colored"></i>

                        <i className="devicon-react-original colored"></i>
                </FlexSkills>
            </Interface>
        </SectionSkills>

        <SectionAbout>
            <Interface>
                <AboutFlex>
                        <img src={Me} alt=""/>

                    <AboutText>
                        <H2Titulo>MUITO PRAZER, <Span>SOU JOÃO VITOR.</Span></H2Titulo>
                        <p>Sou um Desenvolvedor Web, em junho de 2023 me apixonei por programção, desde então, venho estudando e me dedicando a cada dia em busca de evoluir meus conhecimentos.</p>
                        <p>Estou em transição de carreira, atualmente trabalho como Auxiliar de Expedição. E estou em busca de uma oportunidade tanto como Desenvolvedor Front-End, quanto Back-End.</p>
                        <p>
                            Tenho conhecimentos sólidos em HTML, CSS, JavaScript, Node.js e React.js
                        </p>
                    <ButtonSocial>
                        <a><button><i className="bi bi-linkedin"></i></button></a>
                        <a><button><i className="bi bi-envelope"></i></button></a>
                    </ButtonSocial>
                </AboutText>
                </AboutFlex>
            </Interface>
        </SectionAbout>

    </main>

  </Body>
  );
}

export default App