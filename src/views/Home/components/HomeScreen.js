import React from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-scroll';
import { withNamespaces } from 'react-i18next';

import eran from '../../../assets/images/eran.jpg';

const useStyle = makeStyles((theme) => ({
    content: {
        marginTop: '20vh',
    },
    avatarContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        height: 180,
        width: 180,
        marginBottom: '2vh',
        [theme.breakpoints.down('xs')]: {
            height: 110,
            width: 110,
        }
    },
    mainHeader: {
        color: theme.palette.white,
        fontFamily: theme.typography.h6.fontFamily,
        [theme.breakpoints.between('sm', 'xl')]: {
            fontSize: '78px',
            fontWeight: theme.typography.h1.fontWeight
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px',
        }
    },
    whoAmIContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '8%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '5%',
            marginRight: '5%'
        }
    },
    whoAmI: {
        whiteSpace: 'pre-wrap',
        color: theme.palette.white,
        fontWeight: theme.typography.subtitle2.fontWeight,
        fontFamily: theme.typography.h6.fontFamily,
        [theme.breakpoints.between('sm', 'xl')]: {
            fontSize: '22px',
            
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        }
    },
    icon: {
        marginTop: '25vh',
        height: 60,
        width: 60,
        cursor: 'pointer',
        color: theme.palette.white,
        [theme.breakpoints.down('xs')]: {
            marginTop: '20vh',
        }
    },
}));

const HomeScreen = ({ t }) => {
    const classes = useStyle();

    return (
        <Box>
            <ScrollAnimation 
                animateIn='fadeIn'
                delay={1000}
                duration={2}
                initiallyVisible={false}
                animateOnce={true}
            >
                <Box className={classes.content}>
                    <Box className={classes.avatarContainer}>
                        <Avatar className={classes.avatar} src={eran} />
                        <Typography className={classes.mainHeader} variant="h1">{t('name')}</Typography>
                    </Box>
                    <Box className={classes.whoAmIContainer}>
                        <ScrollAnimation
                            animateIn='fadeInDown'
                            delay={1500}
                            initiallyVisible={false}
                            animateOnce={true}
                        >
                            <Typography className={classes.whoAmI} variant="h5">{t('home-description')}</Typography>
                        </ScrollAnimation>
                    </Box>          
                </Box>
                <ScrollAnimation
                    animateIn='fadeInDown'
                    delay={2500}
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <Link activeClass="active" className="screen2" to="screen2" spy={true} smooth={true} duration={500}>
                        <ExpandMoreIcon className={classes.icon} />
                    </Link>
                </ScrollAnimation>
            </ScrollAnimation>
        </Box>
    );
};

export default withNamespaces()(HomeScreen);
