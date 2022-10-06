import React from 'react';
import { 
    ProjectsWrapper,
    CardProjects,
    Row,
    Line,
    CarouselWrapper,
    Carousel,
    Card,
    CardHeader,
    CardBody
} from './styles';

import enterpriseLogo from '/img/logo-mastic-removedBG.webp';

import projectsBG from '/img/automate-logo-cutted.webp';

export function ProjectsSection() {
    return (
    <ProjectsWrapper className='projects-wrapper' id="projects">
        <CardProjects className='card-projects'>
        <h1 className='card-projects-title'>Projetos</h1>
        <Row className='row'>
            <Line className='line'></Line>
            <img src={ enterpriseLogo } alt="logo-mastic" className="logo-mastic" />
            <Line className='line'></Line>
        </Row>
        </CardProjects>
        <CarouselWrapper className='carousel-wrapper'>
        <Carousel className='carousel'>
            <Card className='card'>
                <CardHeader className='card-header'>
                    <img src={ projectsBG } alt='logo do automate' />
                </CardHeader>
                <CardBody className='card-body'>
                    <h1>Automate</h1>
                    <p>Um projeto de agricultura urbana que visa oferecer oportunidades para pessoas de baixa renda.</p>
                    <a 
                        href="https://automate-website-deplovitey.vercel.app" 
                        className='btn-card'
                        target="_blank"
                    >
                        Saiba mais
                    </a>
                </CardBody>
            </Card>
        </Carousel>
        <button className='btn-primary'>Veja mais projetos</button>
        </CarouselWrapper>
    </ProjectsWrapper>
    );
}
