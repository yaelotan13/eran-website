import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

import { Element } from 'react-scroll';

import Publications from '../Publications';
import About from '../About';
import Contact from '../Contact';
import { Navigation, HomeScreen } from './components';

import spaceBlue from '../../assets/images/space-blue.jpg';

const useStyles = makeStyles((theme) => ({
    firstScreen: {
        backgroundImage: `url(${spaceBlue})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    secondScreen: {
        height: '130vh',
        width: '100vw',
        backgroundColor: theme.palette.white,
        [theme.breakpoints.down('md')]: {
            height: '170vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '240vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '410vh',
        },
    },
    thirdScreen: {
        height: '170vh',
        width: '100vw',
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down('sm')]: {
            height: '350vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '340vh',
        }
    },
    firthScreen: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.white,
    },
}));       
 
const Home = (props) => {
    const classes = useStyles();

    return (
        <Box>
            <Navigation />
            <Element name="screen1" className="element" >
                <Box className={classes.firstScreen}>
                 <HomeScreen />
                </Box>
            </Element>
            <Element name="screen2" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.secondScreen}>
                        <About />
                    </Box>
                </ScrollAnimation>
            </Element>
            <Element name="screen3" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.thirdScreen}>
                        <Publications  />
                    </Box>
                </ScrollAnimation>
            </Element>  
            <Element name="screen4" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.firthScreen}>
                        <Contact />
                    </Box>
                </ScrollAnimation>
            </Element>              
        </Box>
    )
};

export default Home;
