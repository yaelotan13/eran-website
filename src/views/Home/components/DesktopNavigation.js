import React from 'react';
import { Hidden, Toolbar, Button, Box } from '@material-ui/core';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';

import Languages from './Langauges';

const useStyle = makeStyles((theme) => ({
    navBar: {
        justifyContent: 'space-between',
        backgroundColor: theme.palette.background.dark,
        opacity: 0.9
    },
    navigationItemsContainer: {
        display: 'flex'
    },
    navBarItem: {
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: '1vw',
        fontFamily: theme.typography.h6.fontFamily,
        fontWeight: theme.typography.h5.fontWeight,
    },
    highlightNavBar: {
        backgroundColor: 'white',
        opacity: 0.8,
        color: theme.palette.primary.dark,
    },
}));

const DesktopNavigation = (props) => {
    const classes = useStyle();
    const { screens, setCurrentScreen, currnetScreen } = props;

    return (
        <Hidden smDown>
            <Toolbar className={classes.navBar}>
                <Box className={classes.navigationItemsContainer}>   
                    {screens.map((screen, index) => 
                        <Link 
                            key={screen.concat(index)} 
                            activeClass="active" 
                            className={`screen${index + 1}`} 
                            to={`screen${index + 1}`} 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            onSetActive={() => {setCurrentScreen(`screen${index + 1}`)}}
                        >
                        <Button 
                            color="inherit" 
                            className={currnetScreen === `screen${index + 1}` ? [classes.navBarItem, classes.highlightNavBar].join(' ') : classes.navBarItem}
                        >
                            {screen}
                        </Button>
                    </Link>
                    )}
                </Box>
                <Languages />
            </Toolbar>
        </Hidden>
    );
};

export default DesktopNavigation;