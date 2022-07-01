import Link from "next/link";
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
  })
);

const HeaderDrawer = (props) => {
  const { open, handleDrawerToggle, drawerItem } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant='temporary'
      anchor='left'
      open={open}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerToggle}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {drawerItem.map((item: any, index: any) => (
          <div className="alllinks" key={index}>
       <li ><Link href={item.path}
       passHref>{item.label}</Link></li>
       </div>
        ))}
      </List>
    </Drawer>
  );
};
export default HeaderDrawer;