import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { withNamespaces } from 'react-i18next';

import i18n from '../../../i18n';
import Infinity from '../../../assets/images/infinity.png';
import sheCodes from '../../../assets/images/she-codes.png';
import IDC from '../../../assets/images/idc.png';

import Education from './Lecture';

const useStyle = makeStyles((theme) => ({
    intro: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 600,
        fontFamily: theme.typography.h3.fontFamily,
        paddingLeft: '10vw',
        marginBottom: '5vh'
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
        new LectureData(1, IDC, t('lacture-1-title'), t('lacture-1-description')),
        new LectureData(2, sheCodes, t('lacture-2-title'), t('lacture-2-description')),
        new LectureData(3, Infinity, t('lacture-3-title'), t('lacture-3-description')),
    ];

    return (
        <Box>
            <Typography className={i18n.language === 'Hebrew' ? [classes.intro, classes.rightToLeft].join(' ') : classes.intro}>
                {t('lectures-intro')}
            </Typography>
            <Grid container justify="space-around">
                {data.map((education, index) => 
                    <ScrollAnimation 
                        animateIn='fadeInUp'
                        delay={INITIAL_DELAY + index * 130}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Education 
                                key={education.title.concat(index)} 
                                title={education.title} 
                                years={education.years}
                                logo={education.logo}
                                about={education.about}
                            />
                        </Grid>
                    </ScrollAnimation>
                )}
            </Grid>
        </Box>
    )
};

export default withNamespaces()(Lectures);
