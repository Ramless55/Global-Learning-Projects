import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Pokemon from './pages/Pokemon/Pokemon'
import PokemonCard from './pages/Pokemon/PokemonCard'
import NewPokemonForm from './pages/Pokemon/NewPokemonForm'
import PokemonList from './pages/Pokemon/PokemonList'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Header from './components/Header/Header'
import './styles/main.css'
import axios from 'axios'

function App() {

    return (
        <div className='App'>
            <Header />

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='pokemon' element={<Pokemon />}>
                    <Route path=':pokemonId' element={<PokemonCard />}/>
                    <Route path='new' element={<NewPokemonForm />}/>
                    <Route index element={<PokemonList />}/>
                </Route>
                {/* Se aplica a todas las rutas que no lleven a ninguna parte, basicamente el error 404 */}
                <Route
                    path='*'
                    element={<ErrorPage/>}
                />
            </Routes>
        </div>
    )
}

export default App
