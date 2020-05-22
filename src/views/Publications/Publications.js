import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { PublicationsList } from './components';
import { SubTitle } from '../../components';

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: '2%',
        padding: '6%',
    },
    educationContainer: {
        height: '50vh',
        [theme.breakpoints.down('xs')]: {
            height: '100vh',
        }
    },
}));

const Publications = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.educationContainer}>
                <SubTitle delay={200} title="Publications" />
                <PublicationsList />
            </Box>
        </Box>
    )
};

export default Publications;
