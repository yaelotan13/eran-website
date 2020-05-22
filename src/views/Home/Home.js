import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

import { Element } from 'react-scroll';

import Publications from '../Publications';
import About from '../About';
import { Navigation, HomeScreen } from './components';

import mars from '../../assets/images/mars-orange.jpg';
import spaceBlue from '../../assets/images/space-blue.jpg';
import spacePurple from '../../assets/images/space-purple.jpg';

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
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down('xs')]: {
            height: '80vh',
        }
    },
    thirdScreen: {
        height: '140vh',
        width: '100vw',
        backgroundColor: theme.palette.white,
        [theme.breakpoints.down('xs')]: {
            height: '340vh',
        }
    },
    firthScreen: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.white
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
                        goodbey now
                    </Box>
                </ScrollAnimation>
            </Element>              
        </Box>
    )
};

export default Home;
