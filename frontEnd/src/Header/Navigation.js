import AccountBoxIcon from '@material-ui/icons/AccountBox'
import DashBoard from '@material-ui/icons/Dashboard'
import '../CSS/Nav.css'
import { Navbar, Nav, } from 'react-bootstrap'
import cardContent from '@material-ui/core/CardContent'
//
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        // ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

}));

const styles = {
    paper: {
        backgroundColor: 'backgroundColor:"#2e353d'
    }
}


function Navigation(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <withStyle>
            <div className={classes.root}>
                {/* <CssBaseline /> */}
                <AppBar style={{ backgroundColor: "#2e353d" }} position="fixed" className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                >
                    <Toolbar>
                        <IconButton color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>

                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" className={clsx(classes.drawer, { [classes.drawerOpen]: open, [classes.drawerClose]: !open, })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar} >
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {/* {['Home', 'Profile', 'Test', 'Test'].map((text, index) => (
                            <ListItem button key={text}>
                                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                                {/* <ListItemText primary={text} />
                            </ListItem> */}
                        {/* ))} */}
                        {['Home', 'Profile', 'Test', 'Test'].map((text, index) => (
                        <ListItem button key = {text}> 
                        <ListItemIcon>
                            <HomeIcon {index == 1}/>
                        </ListItemIcon>
                            
                        </ListItem>
                        )}
                        {/* <Nav variant="pills" activeKey={props.tab} className='flex-column'>
                        <Nav.Item>
                              <Nav.Link aria-current href='/Portal' eventKey="1" className="tab"><DashBoard fontSize='large' />   Home</Nav.Link>
                         </Nav.Item>
                        </Nav> */}
                        
                    </List>
                </Drawer>
            </div>
        </withStyle>
        //!bootstrap Navbar
        // <div className='wrapper'>
        //     <Navbar bg="default" variant='dark' expand='lg' className="sideNav">
        //         <Navbar.Toggle bg="dark" aria-controls='responsive-navbar-nav' className="optionBox" />
        //         <Navbar.Collapse id="basic-navbar-nav" className="optionBox" id='Submenu'>
        //             <div className="navbar-style">
        //                 <Nav variant="pills" activeKey={props.tab} className='flex-column'>
        //                     <Nav.Item>
        //                         <Nav.Link aria-current href='/Portal' eventKey="1" className="tab"><DashBoard fontSize='large' />   Home</Nav.Link>
        //                     </Nav.Item>
        //                     <Nav.Item>
        //                         <Nav.Link aria-current href='/UserProfile' eventKey="2" className='tab'> <AccountBoxIcon fontSize='large' /> User Profile</Nav.Link>
        //                     </Nav.Item>
        //                     <Nav.Item>
        //                         <Nav.Link aria-current href='#' eventKey="3" className='tab'>Testing</Nav.Link>
        //                     </Nav.Item>
        //                     <Nav.Item>
        //                         <Nav.Link aria-current href='#' eventKey="4" className='tab'>Testing</Nav.Link>
        //                     </Nav.Item>

        //                 </Nav>
        //             </div>
        //         </Navbar.Collapse>
        //     </Navbar>
        // </div>
    );
}

export default Navigation