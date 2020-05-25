import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

import i18n from '../i18n';

const useStyle = makeStyles((theme) => ({
    title: {
        textAlign: 'left',
        marginLeft: '8%',
        marginBottom: '4%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '12%',
            marginBottom: '8%',
            fontSize: '20px',
        }
    },
    rightToLeft: {
        textAlign: 'right',
        marginRight: '8%',
    }
}));

const SubTitle = (props) => {
    const classes = useStyle();
    const { delay, title } = props;
    
    return (
        <ScrollAnimation 
            animateIn='fadeIn'
            delay={delay}
            initiallyVisible={false}
            animateOnce={true}
        >
            <Typography className={i18n.language === 'Hebrew' ? [classes.title, classes.rightToLeft].join(' ') : classes.title} variant="h3">
                {title}
            </Typography>
        </ScrollAnimation>
    )
};

export default SubTitle;
