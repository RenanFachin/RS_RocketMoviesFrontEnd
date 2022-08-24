import { Container, Content } from './styles'
import { BiTime } from 'react-icons/bi'
import { FiArrowLeft } from 'react-icons/fi'

import { Ratings } from "../../components/Ratings";
import { ButtonText } from "../../components/ButtonText";
import { Header } from '../../components/Header' // importando o componente de Header
import { Section } from '../../components/Section' // importando o componente de section
import { Tag } from '../../components/Tag' // importando o componente de Tag

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

 
export function Details (){
    const { user } = useAuth();
    const [data, setData] = useState(null);

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const params = useParams();
    const navigate = useNavigate();
  
    function handleBack(){
      navigate(-1);
    }

    // Função de deletar nota
    async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      handleBack()
        }
    }

    useEffect(() => {
        async function fetchNote(){
          const response = await api.get(`/notes/${params.id}`)
          setData(response.data);
        }
    
        // executando a função
        fetchNote()
      },[]);

    return(
        <Container>
            <Header />
        { 
        data && (
            <main>
                <Content>

                <div className='returnButton'>

                    <button 
                        type="button" 
                        onClick={handleBack}>
                            <FiArrowLeft />
                            Voltar
                    </button>

                    <ButtonText 
                        title="Excluir filme" 
                        onClick={handleRemove} 
                        isActive 
                    />

                </div>

                <div>
                <h1>
                    {data.title}
                    <Ratings rating={data.rating} />
                </h1>
                </div>

                <div className='publicationStats'>
                    <img src={avatarUrl} alt={user.name} />
                    <span>Criado por {user.name}</span>
                    
                    <div className='publicationDateAndHour'>
                    <BiTime/>
                    <span>{data.created_at}</span>
                    </div>

                </div>

                <Section>
                { data.tags &&
                data.tags.map(tag => (
                  <Tag 
                  key={String(tag.id)}
                  title={tag.name} 
                  />
                ))
            }
                </Section>

                <p>{data.description}</p>
            
            </Content>
            </main>
            )
        }

        </Container>
    )
}