import { Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";

const StyledHero = styled("div")(() => ({
  backgroundColor: "#000",
  padding: "40px 0", // adicionei um padding básico para evitar que o conteúdo grude nas bordas
}));

const StyledImg = styled("img")(() => ({
  width: "30%",
  borderRadius: "50%",
}));

const App = () => {
  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid size={4}>
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>
            <Grid size={8}>
              <Typography color="primary" variant="h1">
                Washington Medeiros
              </Typography>
              <Typography color="primary" variant="h2">
                I'm a Computer Scientist
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default App;
