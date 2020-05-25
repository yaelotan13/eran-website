import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export const getDrawerIcon = (index) => {
    switch (index) {
        case 0: {
            return <HomeIcon />
        }
        case 1: {
            return <FaceIcon />
        }
        case 2: {
            return <WhatshotIcon />
        }
        case 3: {
            return <MailOutlineIcon />
        }
        default: {
            return <HomeIcon />
        }
    }
};