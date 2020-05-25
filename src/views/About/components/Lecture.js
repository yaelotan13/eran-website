import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import i18n from '../../../i18n';

const useStyle = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
        }
    },
    lecture: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        boxShadow: "1px 1px 3px #9E9E9E",
        backgroundColor: 'white',
        boxSizing: 'border-box',
        width: '30vw',
        height: '42vh',
        marginTop: '8%',
        [theme.breakpoints.down('md')]: {
            width: '30vw',
            height: '54vh',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80vw',
            height: '35vh',
            marginTop: '6%'
        },
        [theme.breakpoints.down('xs')]: {
            height: '48vh',
        }
    },
    title: {
        marginTop: '2vh',
        marginBottom: '2vh',
        fontWeight: 600,
        fontSize: 18,
    },
    description: {
        lineHeight: '24px',
        fontSize: 16,
        fontFamily: theme.typography.h3.fontFamily,
        textAlign: 'left'
    },
    rightToLeft: {
        textAlign: 'right'
    }
}));

const Lecture = (props) => {
    const classes = useStyle();
    const { logo, title, about } = props;

    return (
        <Box className={classes.container}>
            <Box className={classes.lecture}>
                <Typography variant="h5" className={classes.title}>{title}</Typography>
                <Typography className={i18n.language === 'Hebrew' ? [classes.description, classes.rightToLeft].join(' ') : classes.description}>{about}</Typography>
            </Box>
        </Box>
    )
};

export default Lecture;
