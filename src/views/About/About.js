import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { withNamespaces } from 'react-i18next';

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: '2%',
        padding: '6%',
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'pre-wrap',
        marginTop: '-4%',
        marginLeft: '8%',
        marginBottom: '4%',
    },
    contentContainer: {
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: '5%'
    },
    content: {
        lineHeight: theme.typography.caption.lineHeight,
        textAlign: 'left'
    }
}));

const Articles = ({ t }) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box>
                <Box className={classes.headerContainer}>
                    <Typography className={classes.description} variant="subtitle1">{t('about-me-title')}</Typography>
                </Box>
                <Box className={classes.contentContainer}>
                    <ScrollAnimation 
                        animateIn='fadeIn'
                        delay={500}
                        duration={2}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Typography variant="subtitle2" className={classes.content}>
                        Hi, my name is Eran Foss and I am a third year doctoral student of the planetary sciences at the Weizmann Institute.
                        I earned my bachelor's degree in physics and atmospheric science at Tel Aviv University. During my undergraduate degree, I published an article on internal structures of planets outside the solar system. I earned my master's degree at the Weizmann Institute of Planetary Sciences as I explored the climate and water cycle in Mars.
                        In Ph.D., I build a climate model that accurately predicts the Mars water cycle under climate change that Mars has experienced in the last 10 million years and gives predictions for the climate of Mars.
                        Among other things, I'm exploring other things like clouds on Earth and the chemistry of underground oceans in different moons in the solar system.
                        In my time I love to do sports and especially surf and wind. In addition, I volunteer at a nonprofit called "My Wave" that uses a surfboard learning tool for at-risk youth education.
                        In my past, after my release from the military, I was a software developer at several startups and a product manager at Verint. 
                        </Typography>
                    </ScrollAnimation>
                </Box>
            </Box>
        </Box>
    )
};

export default withNamespaces()(Articles);
