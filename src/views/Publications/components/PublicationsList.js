import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import { withNamespaces } from 'react-i18next';

import DNA from '../../../assets/images/DNA.png';
import marceArticle from '../../../assets/images/marce-article.png';
import hermon from '../../../assets/images/hermon.png';
import marce2 from '../../../assets/images/marce2.png';
import marce3 from '../../../assets/images/marce3.png';
import dancer from '../../../assets/images/dancer.png';

import Publication from './Publication';

const useStyle = makeStyles((theme) => ({
    container: {
        width: '80vw',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '5vw'
    }
}));

class PublicationData {
    constructor(id, logo, publisher, title, about, link) {
        this.id = id;
        this.logo = logo;
        this.title = title;
        this.about = about;
        this.link = link;
        this.publisher = publisher;
    }
};

const PublicationsList = ({ t }) => {
    const classes = useStyle();
    const INITIAL_DELAY = 400;

    const data = [
        new PublicationData(1, DNA, t('davidson'), t('publication-1-title'), t('publication-1-description'), 'https://davidson.weizmann.ac.il/online/sciencepanorama/%D7%94%D7%9E%D7%93%D7%A2-%D7%A9%D7%9C-%D7%94%D7%A2%D7%A9%D7%95%D7%A8'),
        new PublicationData(2, marceArticle, t('davidson'), t('publication-2-title'), t('publication-2-description'), 'https://davidson.weizmann.ac.il/online/askexpert/%D7%94%D7%90%D7%9D-%D7%90%D7%A4%D7%A9%D7%A8-%D7%9C%D7%94%D7%90%D7%A8%D7%99%D7%A5-%D7%90%D7%AA-%D7%9E%D7%90%D7%93%D7%99%D7%9D'),
        new PublicationData(3, hermon, t('davidson'), t('publication-3-title'), t('publication-3-description'), 'https://davidson.weizmann.ac.il/online/askexpert/%D7%91%D7%99%D7%95%D7%9D-%D7%98%D7%95%D7%91-%D7%A8%D7%95%D7%90%D7%99%D7%9D-%D7%9E%D7%9B%D7%90%D7%9F-%D7%90%D7%AA-%D7%94%D7%97%D7%A8%D7%9E%D7%95%D7%9F'),
        new PublicationData(4, marce2, t('ynet'), t('publication-4-title'), t('publication-4-description'), 'https://www.ynet.co.il/articles/0,7340,L-5334452,00.html'),
        new PublicationData(5, marce3, t('ynet'), t('publication-5-title'), t('publication-5-description'), 'https://www.ynet.co.il/articles/0,7340,L-5270527,00.html'),
        new PublicationData(6, dancer, t('davidson'), t('publication-6-title'), t('publication-6-description'), 'https://davidson.weizmann.ac.il/online/askexpert/%D7%94%D7%9E%D7%93%D7%A2-%D7%A9%D7%9C-%D7%A1%D7%99%D7%91%D7%95%D7%91-%D7%94%D7%A8%D7%A7%D7%93%D7%A0%D7%99%D7%AA'),
    ];

    return (
        <Box className={classes.container}>
            <Grid container justify="space-around">
                {data.map((publication, index) => 
                    <ScrollAnimation 
                        animateIn='fadeInUp'
                        delay={INITIAL_DELAY + index * 200}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Publication 
                                key={publication.title.concat(index)} 
                                title={publication.title} 
                                link={publication.link}
                                logo={publication.logo}
                                about={publication.about}
                                publisher={publication.publisher}
                            />
                        </Grid>
                    </ScrollAnimation>
                )}
            </Grid>
        </Box>
    )
};

export default withNamespaces()(PublicationsList);
