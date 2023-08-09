import { Grid } from "@mui/material";

const Layout = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <div>xs=8</div>
      </Grid>
      <Grid item xs={8}>
        <div>xs=8</div>
      </Grid>
    </Grid>
  );
};

export default Layout;
