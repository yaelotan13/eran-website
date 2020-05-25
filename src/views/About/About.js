import React from 'react';
import { Box, Typography, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { withNamespaces } from 'react-i18next';

import i18n from '../../i18n';
import eran from '../../assets/images/me.jpg';
import { Lectures } from './components';

const useStyle = makeStyles((theme) => ({
    container: {
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        whiteSpace: 'pre-wrap',
        paddingTop: '8vh',
    },
    eranImage: {
        width: 140,
        height: 140,
        [theme.breakpoints.down('md')]: {
            width: 120,
            height: 120,
        }
    },
    description: {
        marginTop: '1vh'
    },
    contentContainer: {
        marginTop: '6vh',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: '8vh',
        },
    },
    content: {
        lineHeight: theme.typography.h3.lineHeight,
        fontFamily: theme.typography.h3.fontFamily,
        fontSize: 18,
        textAlign: 'left',
        wordWrap: 'break-word',
        width: '80vw',
    },
    rightToLeft: {
        textAlign: 'right',
    },
    lecturesContainer: {
        marginTop: '12vh'
    },
}));

const Articles = ({ t }) => {
    const classes = useStyle();
    console.log(i18n.language)
    return (
        <Box className={classes.container}>
            <Box>
                <Box className={classes.headerContainer}>
                    <Avatar className={classes.eranImage} src={eran} />
                    <Typography className={classes.description} variant="h3">
                        {t('about-me-title')}
                    </Typography>
                </Box>
                <Box className={classes.contentContainer}>
                    <ScrollAnimation 
                        animateIn='fadeIn'
                        delay={500}
                        duration={2}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Typography 
                            variant="subtitle2" 
                            className={i18n.language === "Hebrew" ? [classes.content, classes.rightToLeft].join(' ') : classes.content}
                        >
                                {t('about-me-content')}
                            </Typography>
                    </ScrollAnimation>
                </Box>
            </Box>
            <Box className={classes.lecturesContainer}>
                <Lectures />
            </Box>
        </Box>
    )
};

export default withNamespaces()(Articles);
