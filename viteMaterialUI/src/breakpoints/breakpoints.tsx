import { Container, Box } from '@mui/material'

const BreakPoints = () => {
  return (
    <Container sx={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Box sx={{
        width: { xs: 1, md: 200 },
        height: 200,
        bgcolor: "tomato"
      }}></Box>
    </Container>
  )
}

export default BreakPoints