import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Container, Stack, TextField, Button} from '@mui/material'
function Home(){    
    let navigate = useNavigate()
    const [query, setQuery] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        navigate(`/GetMovie/${query}`)
    }
    return(
        <Container className='SearchPage' maxWidth='md' sx={{textAlign: 'center'}}>
            <h1>Home Page </h1>
            <p>Enter the title of a movie of which you'd like to find similar movies.</p>       
            <p>Note. It doesn't have to be exact. You'll get a chance to confirm your choice</p>
            
            <form onSubmit={handleSubmit}>
                <Stack
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    spacing={0}
                >
                    <TextField
                        label='Enter a movie title'
                        size='small'
                        type='text'
                        value={query}
                        onChange={event => setQuery(event.target.value)}
                    />
                    <Button
                        variant='contained'
                        size='large'
                        onClick={handleSubmit}
                    >
                        Search
                    </Button>
                </Stack>
            </form>
        <Outlet/>
        </Container>
    )
}
export default Home