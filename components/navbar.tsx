import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import HeaderDrawer from ".//HeaderDrawer"


import React, {useState } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linkBtn: {
      textTransform: 'none',
    },
  })
);

const drawerItem = [
  { label: 'Home', path: '/' },
  { label: 'About JP', path: '/about' },
  { label: 'About EN', path: 'abouts/h37pyymxj' },
  { label: 'News', path: '/blogs' },
];

const Header = () => {
 


  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
        <AppBar position='static'>
          <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
            <Typography variant='h6'>
            </Typography>
          </Toolbar>
        </AppBar>

      <HeaderDrawer
        open={open}
        handleDrawerToggle={handleDrawerToggle}
        drawerItem={drawerItem}
      />
    </>
  );
};
export default Header;
