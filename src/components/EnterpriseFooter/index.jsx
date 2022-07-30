import React from 'react'
import { 
    FooterWrapper,
    Container,
    OurPriorities, 
    BGGreen, 
    Title, 
    Projects, 
    LinksWrapper,
    Project, 
    FastLinks, 
} from './styles';

export function EnterpriseFooter() {
    return (
        <FooterWrapper className='enterprise-footer'>
            <BGGreen></BGGreen>
            <Container>
                <OurPriorities className='our-priorities'>
                        <Title className='title'>
                            <img src="/img/logo-mastic-removedBG.png" alt='Logo da Mastic' />
                            <h2>Nossas Prioridades</h2>
                        </Title>
                        <p>
                            Trabalhamos em soluções que buscam atingir a população da periferia, e influenciar o Brasil de forma positiva
                        </p>
                </OurPriorities>
                <LinksWrapper>
                    <Projects className='projects'>
                        <h2>Projetos</h2>
                        <Project className='project' href="https://automate-website-deploy.vercel.app">
                            <div className='img'></div>
                            <h3>AUTOMATE</h3>
                        </Project>                
                    </Projects>
                    <FastLinks className='fast-links'>
                        <h2>Links Rápidos</h2>
                        <ul>
                            <li>
                                <a href="#projects">
                                    Produtos
                                </a>
                            </li>
                            <li>
                                <a href="#about-us">
                                    Sobre nós
                                </a>
                            </li>
                        </ul>
                    </FastLinks>
                </LinksWrapper>
                
            </Container>
            
        </FooterWrapper>
    )
}