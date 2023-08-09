import { Grid } from "@mui/material";
import "./App.css";
import SideBar from "./components/SideBar";
import Producer from "./components/Producer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
        <Grid item xs={8}>
          <Producer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
