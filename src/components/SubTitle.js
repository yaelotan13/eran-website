import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyle = makeStyles((theme) => ({
    title: {
        marginLeft: '8%',
        marginBottom: '4%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '12%',
            marginBottom: '8%',
            fontSize: '20px',
        }
    },
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
            <Typography className={classes.title} variant="h3" align="left">
                {title}
            </Typography>
        </ScrollAnimation>
    )
};

export default SubTitle;
