import { styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";

const StyledHero = styled("div")(() => ({
  backgroundColor: "#000", 
  
}));

const StyledImg = styled("img")(() => ({
  backgroundColor: "#f0f0f0",
  padding: "20px",
  borderRadius: "50%",
  width: "39%"
}));

const App = () => {
  return (
    <>
      <StyledHero>
        Olá
        <StyledImg src={Avatar} alt="Avatar" />
      </StyledHero>
    </>
  );
};

export default App;
