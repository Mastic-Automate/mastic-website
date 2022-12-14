import React from 'react';

import enterpriseLogo from '/img/logo-mastic-removedBG.webp';
import { 
    ProblematicWrapper,
    Card,
    CardContainer,
    CardHeader,
    Logo,
    TitleWrapper,
    CardTitle
} from './styles';

export function Problematic() {
    return (
    <ProblematicWrapper className='problematic-wrapper'>
            <Card className='card'>
                <CardContainer className='card-container'>
                    <CardHeader className='card-header'>
                        <Logo src={ enterpriseLogo } alt="logo-mastic" className="logo-mastic" />
                        <div className='header-title'>Nossas prioridades</div>
                    </CardHeader>
                    <div className='card-text'>
                        Trabalhamos em soluções que buscam atingir a população da periferia, e influenciar o Brasil de forma positiva
                    </div>
                    <a href="#about-us" className="card-button">
                        Saiba mais
                    </a>
                </CardContainer>
            </Card>

            <Card className='card' id='meioAmbiente'>
                <TitleWrapper className='title-wrapper'>
                    <CardTitle className='card-title bg-gray'>
                    
                        <h2 className='title'>Meio Ambiente</h2>
                        <span className='card-data'>Um artigo publicado pelo UOL Notícias em 2015 comprova, através de dados obtidos pelo IBGE, que entre os anos de 2000 e 2010, a agricultura foi o maior causador do desmatamento. A fonte indica que o total de área desmatada foi quase o equivalente à área total do estado de São Paulo, isso vale um total de 65% de todo o desmatamento ocorrido no período observado. </span>
                    </CardTitle>
                </TitleWrapper>  
            </Card>
            
            <Card className='card' id='periferias'>
                <TitleWrapper className='title-wrapper'>
                    <CardTitle className='card-title bg-green'>
                        <h2 className='title'>Periferias</h2>
                        <span className='card-data'>é visível que a economia nacional sofreu um grande baque. Por conta disso, a população mais necessitada (que recebe até 1,5 salário-mínimo per capita) teve seu acesso a produtos básicos, como os alimentos, restrito. Dessa forma, mais uma vez a sociedade brasileira entrou no mapa da fome. </span>
                    </CardTitle>
                </TitleWrapper>
            </Card>
    </ProblematicWrapper>
    )
    
}
