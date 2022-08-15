import { Container, Content } from './styles'
import { FiPlus } from 'react-icons/fi'


import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'


export function Home(){
    return(
        <Container>
            <Header />

            <Content>
                <div>
                    <Section title="Meus Filmes"/>
                    <Button title="Adicionar nota" icon={FiPlus}></Button>
                </div>

                <Note data={{
                    title: 'Interstellar',
                    text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme d ilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram',
                    tags: [
                        { id: '1', name: 'Ficção Científica'},
                        { id: '2', name: 'Drama'},
                        { id: '3', name: 'Família'},
                    ]
                }}/>

                <Note data={{
                    title: 'The Batman',
                    text: 'Batman (The Batman, no original) segue o segundo ano de Bruce Wayne (Robert Pattinson) como o herói de Gotham, causando medo nos corações dos criminosos da sombria cidade. Com apenas alguns aliados de confiança - Alfred Pennyworth (Andy Serkis) e o tenente James Gordon (Jeffrey Wright) - entre a rede corrupta de funcionários e figuras importantes do distrito, o vigilante solitário se estabeleceu como a única personificação da vingança entre seus concidadãos. Durante uma de suas investigações, Bruce acaba envolvendo a si mesmo e Gordon em um jogo de gato e rato, ao investigar uma série de maquinações sádicas em uma trilha de pistas enigmáticas estabelecida pelo vilão Charada. Quando o trabalho acaba o levando a descobrir uma onda de corrupção que envolve o nome de sua família, pondo em risco a própria integridade e as memórias que tinha sobre seu pai, Thomas Wayne, as evidências começam a chegar mais perto de casa, precisando, Batman, forjar novos relacionamentos, para assim desmascarar o culpado e fazer justiça ao abuso de poder e à corrupção que há muito tempo assola Gotham City.',
                    tags: [
                        { id: '4', name: 'Ação'},
                        { id: '5', name: 'Policial'},
                        { id: '6', name: 'Suspense'},
                    ]
                }}/>

                <Note data={{
                    title: 'FORREST GUMP - O CONTADOR DE HISTÓRIAS',
                    text: 'Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções. Por obra do acaso, ele consegue participar de momentos cruciais, como a Guerra do Vietnã e Watergate, mas continua pensando no seu amor de infância, Jenny Curran.',
                    tags: [
                        { id: '7', name: 'Romance'},
                        { id: '8', name: 'Drama'},
                        { id: '9', name: 'Comédia'},
                    ]
                }}/>

                <Note data={{
                    title: 'Vingadores: Ultimato',
                    text: 'Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.',
                    tags: [
                        { id: '10', name: 'Ação'},
                        { id: '11', name: 'Fantasia'},
                        { id: '12', name: 'Aventura'},
                    ]
                }}/>

                <Note data={{
                    title: 'Star Wars - O império contra-ataca',
                    text: 'Em Star Wars: Episódio V, as forças imperais comandadas por Darth Vader (David Prowse/James Earl Jones) lançam um ataque contra os membros da resistência, que são obrigados a fugir. Enquanto isso, Luke Skywalker (Mark Hamill) tenta encontrar o Mestre Yoda, que poderá ensiná-lo a dominar a "Força" e torná-lo um cavaleiro Jedi. No entanto, Darth Vader planeja levá-lo para o Lado Negro da "Força".',
                    tags: [
                        { id: '13', name: 'Ficção científica'},
                        { id: '14', name: 'Aventura'},
                    ]
                }}/>
            </Content>
        </Container>
    )
}