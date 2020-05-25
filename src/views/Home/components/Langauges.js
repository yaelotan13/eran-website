import React from 'react';
import { Box, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import i18n from '../../../i18n';

import usa from '../../../assets/images/usa.png';
import israel from '../../../assets/images/israel.jpg';

const useStyle = makeStyles(theme => ({
    flagsContainer: {
        display: 'flex',
    },
    hebrewFlag: {
        marginLeft: '-2vw'
    },
    flag: {
        width: 25,
        height: 25,
        cursor: "pointer"
    }
}));

const Languages = (props) => {
    const classes = useStyle();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <Box className={classes.flagsContainer}>
            <Button onClick={() => changeLanguage('English')}>
                <Avatar className={classes.flag} src={usa} />
            </Button>
            <Button onClick={() => changeLanguage('Hebrew')}>
                <Avatar className={[classes.flag, classes.hebrewFlag].join(' ')} src={israel} />
            </Button>
        </Box>
    )
};

export default Languages;
