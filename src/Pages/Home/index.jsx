import { useState, useEffect } from "react";
import { Container, Content, UsersInfo, Profile } from './styles'
import { FiPlus,FiSearch } from 'react-icons/fi'
import { RiShutDownLine } from 'react-icons/ri'

// import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'


import { Link } from 'react-router-dom';
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


export function Home(){
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    // const [search, setSeach] = useState([])
    const [movies, setMovies] = useState([]);

    function handleDetails(id){
        navigate(`/details/${id}`);
      }

    useEffect(() => {
        async function fetchMovieNotes() {
            const response = await api.get(`/notes?title=${search}&tags`);
            setMovies(response.data);
          }
      
          fetchMovieNotes();
        }, [search]);


    return(
        <Container>
            <header>
            <h2>RocketMovies</h2>

            <Input 
            placeholder = "Pesquisar pelo título" 
            type = "text" 
            icon = {FiSearch} 
            onChange={(e) => setSearch(e.target.value)}
            />

            <Profile>  
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={signOut}> Sair <RiShutDownLine /> </button>
                </div>  
            </Profile>
                
            <UsersInfo to="/profile">
                <img 
                    src={avatarUrl} 
                    alt="Foto do usuário" 
                />
            </UsersInfo>


            </header>

            <Content>
                <div>
                    <Section title="Meus Filmes"/>
                    <Link to="/new"><Button title="Adicionar nota" icon={FiPlus}></Button></Link>
                </div>

                {
                movies.map((movie) => (
                    <Note
                    key={String(movie.id)}
                    data={movie}
                    onClick={() => handleDetails(movie.id)}
                />
                ))}

                
            </Content>
        </Container>
    )
}