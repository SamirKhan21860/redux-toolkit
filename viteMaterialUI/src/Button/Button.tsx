// import React from 'react'
import { Container, Typography } from '@mui/material'


const Button = () => {
  return (
    <Container sx={{ height: "100vh", dispaly: "flex", alignItems: "center", justifyContent: "center", }}>
      <Typography sx={{ width: "fit-content", py: 2, px: 6, bgcolor: "darkgray", color: "white", borderRadius: "8px", fontSize: "2rem", ':hover': { bgcolor: "darkblue" } }}>PkTeam</Typography>
    </Container>
  )
}

export default Button