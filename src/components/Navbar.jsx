import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        to="/"
        variant="h6"
        component={Link}
        sx={{ flexGrow: 1 }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Seuss Treasury
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Books
      </Button>
      <Button color="inherit" component={Link} to="/quotes">
        Quotes
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;