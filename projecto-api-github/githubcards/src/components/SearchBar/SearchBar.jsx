import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

const SearchBar = (props) => {
    const [user, setUser] = useState('')

    const handleChange = (event) => {
        setUser(event.target.value)
    }

    const handleClick = () => {
        axios.get(`https://api.github.com/users/${user}`)
            .then(res => {
              const finded = props.data.some( (element) => element.login.toLowerCase() === user.toLowerCase())
              console.log(finded)
              props.saveData((prev) => finded ? prev :[...prev, res.data])
            })
            .catch(err => console.log(err))
    }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleChange} id="outlined-basic" label="Ingrese usuario" variant="outlined" />
      <Button variant="contained" onClick={handleClick}>Buscar</Button>
    </Box>
  )
}

export default SearchBar

