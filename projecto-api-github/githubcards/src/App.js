import './App.css';
import GithubCard from './components/GithubCard/GithubCard';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react'

function App() {
  const [data, setData] = useState([])

  const divStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    gap: '2rem'
  }

  return (
    <div className="App">
      <h1>Github Cards</h1>

      <SearchBar saveData={setData} data={data}/>
      <div style={divStyle}>
        {data.length > 0 ? (
          data.map((user) => {
            return <GithubCard data={user} key={user.avatar_url} setData={setData} information={data}/>
          })
        ) : (
          <h2>No hay elementos</h2>
        )}
      </div>
    </div>
  );
}

export default App;
