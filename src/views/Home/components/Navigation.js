import React, { useState } from 'react';
import { AppBar, } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withNamespaces } from 'react-i18next';

import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import spaceBlue from '../../../assets/images/space-blue.jpg';

const useStyle = makeStyles((theme) => ({
    navBarContainer: {
        marginLeft: '1%',
        display: 'flex',
        backgroundImage: `url(${spaceBlue})`,
    },
}));

const Navigation = ({ t }) => {
    const classes = useStyle();
    const [currnetScreen, setCurrentScreen] = useState('screen1');
    const screens = [t('home'), t('about'), t('publication'), t('contact')];


    return (
        <AppBar className={classes.navBarContainer}>
            <DesktopNavigation screens={screens} setCurrentScreen={setCurrentScreen} currnetScreen={currnetScreen} />
            <MobileNavigation screens={screens} setCurrentScreen={setCurrentScreen} currnetScreen={currnetScreen} />
        </AppBar>
    )
};

export default withNamespaces()(Navigation);
