import React from 'react';

import { Icon } from '../components';

import home from '../assets/images/home-nav.png';
import about from '../assets/images/about-nav.png';
import rocket from '../assets/images/rocket-nav.png';
import contact from '../assets/images/email-nav.png';

export const getDrawerIcon = (index) => {
    switch (index) {
        case 0: {
            return <Icon icon={home} />
        }
        case 1: {
            return <Icon icon={about} />
        }
        case 2: {
            return <Icon icon={rocket} />
        }
        case 3: {
            return <Icon icon={contact} />
        }
        default: {
            return <Icon icon={home} />
        }
    }
};