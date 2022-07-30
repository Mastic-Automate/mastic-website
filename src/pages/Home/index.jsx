import './style.css'
import React from "react";
import {StickyHeader} from '../../components/StickHeader'
import {Hero} from '../../components/Hero'
import {Problematic} from '../../components/Problematic'
import {EnterpriseFooter} from '../../components/EnterpriseFooter'
import {ProjectsSection} from '../../components/ProjectsSection'
import {AboutUs} from '../../components/AboutUs'
import {Preloader} from '../../components/Preloader'

export function Home() {
    return (
        <div id="enterprise-container">
            <Preloader />
            <StickyHeader logo={<h1>MASTIC</h1>} links={[{link: '#hero', linkName:'HOME'}, {link: '#projects', linkName:'PRODUTOS'}, {link: '#about-us', linkName:'SOBRE NÓS'}]} />

            <Hero 
                title={
                    <div className='hero-text' style={{resizeMode: 'cover' }}>
                    <div className='letter m'>M</div>
                    <div className='letter a'>A</div>
                    <div className='letter s'>S</div>
                    <img src='/img/tree.png' alt='Árvore similar a aroeira' />
                    <div className='letter t'>T</div>
                    <div className='letter i'>I</div>
                    <div className='letter c'>C</div>
                </div>
                }
            />

            <Problematic />
            <ProjectsSection />
            <AboutUs />
            <EnterpriseFooter />

        </div>
    )
}