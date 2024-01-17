import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {

  const navigate = useNavigate();
  
  return (
    <>
      <Container className='text-center mt-5'>
        <h1>Oops!</h1>
        <p><span className='text-danger'>Errore 404.</span> Pagina non trovata!</p>
        <Button onClick={() => navigate('/')} variant='warning text-light'>Torna alla homepage</Button>
      </Container>
    </>
  )
}
