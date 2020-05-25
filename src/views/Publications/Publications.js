import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withNamespaces } from 'react-i18next';

import i18n from '../../i18n';
import { PublicationsList } from './components';
import { SubTitle } from '../../components';

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: '2%',
        padding: '6%',
    },
    headerContainer: {
        marginBottom: '-5vh',
        [theme.breakpoints.down('lg')]: {
            marginLeft: '3vw',
        },
    }
}));

const Publications = ({ t }) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.headerContainer}>
                <SubTitle delay={200} title={t('publication')} />
            </Box>
            <PublicationsList />
        </Box>
    )
};

export default withNamespaces()(Publications);
