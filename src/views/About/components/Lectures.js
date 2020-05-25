import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { withNamespaces } from 'react-i18next';

import i18n from '../../../i18n';
import Lecture from './Lecture';

const useStyle = makeStyles((theme) => ({
    intro: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 600,
        fontFamily: theme.typography.h3.fontFamily,
        paddingLeft: '10vw',
        marginBottom: '5vh',
        wordWrap: 'break-word',
        width: '80vw',
    },
    rightToLeft: {
        textAlign: 'right',
        marginRight: '10vw'
    }
}));

class LectureData {
    constructor(id, image, title, about) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.about = about;
    }
};

const Lectures = ({ t }) => {
    const classes = useStyle();
    const INITIAL_DELAY = 300;

    const data = [
        new LectureData(1, null, t('lacture-1-title'), t('lacture-1-description')),
        new LectureData(2, null, t('lacture-2-title'), t('lacture-2-description')),
        new LectureData(3, null, t('lacture-3-title'), t('lacture-3-description')),
    ];

    return (
        <Box>
            <Typography className={i18n.language === 'Hebrew' ? [classes.intro, classes.rightToLeft].join(' ') : classes.intro}>
                {t('lectures-intro')}
            </Typography>
            <Grid container justify="space-around">
                {data.map((lecture, index) => 
                    <ScrollAnimation 
                        animateIn='fadeInUp'
                        delay={INITIAL_DELAY + index * 130}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Lecture 
                                key={lecture.title.concat(index)} 
                                title={lecture.title} 
                                about={lecture.about}
                            />
                        </Grid>
                    </ScrollAnimation>
                )}
            </Grid>
        </Box>
    )
};

export default withNamespaces()(Lectures);
