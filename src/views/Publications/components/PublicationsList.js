import React from 'react';
import { Box, Grid } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';

import DNA from '../../../assets/images/DNA.png';
import marceArticle from '../../../assets/images/marce-article.png';
import hermon from '../../../assets/images/hermon.png';
import marce2 from '../../../assets/images/marce2.png';
import marce3 from '../../../assets/images/marce3.png';
import dancer from '../../../assets/images/dancer.png';

import Publication from './Publication';

class PublicationData {
    constructor(id, logo, title, about, link) {
        this.id = id;
        this.logo = logo;
        this.title = title;
        this.about = about;
        this.link = link;
    }
};

const data = [
    new PublicationData(1, DNA, 'המדע של העשור', 'מיקרוביום, ביג דאטה, גלי כבידה, וממשק מוח-מכונה - אלה רק חלק מהתגליות והפיתוחים שעיצבו עשור של פריצות דרך', 'https://davidson.weizmann.ac.il/online/sciencepanorama/%D7%94%D7%9E%D7%93%D7%A2-%D7%A9%D7%9C-%D7%94%D7%A2%D7%A9%D7%95%D7%A8'),
    new PublicationData(2, marceArticle, 'האם אפשר להאריץ את מאדים', 'ידוע שבעבר זרמו מים נוזליים על פני מאדים, אולם כיום כוכב הלכת יבש. האם אפשר לעבות מחדש את האטמוספרה של', 'https://davidson.weizmann.ac.il/online/askexpert/%D7%94%D7%90%D7%9D-%D7%90%D7%A4%D7%A9%D7%A8-%D7%9C%D7%94%D7%90%D7%A8%D7%99%D7%A5-%D7%90%D7%AA-%D7%9E%D7%90%D7%93%D7%99%D7%9D'),
    new PublicationData(3, hermon, 'ביום טוב רואים מפה את החרמון', 'קימור כדור הארץ קובע מאיזה מרחק נוכל לצפות בעצמים רחוקים. אז מאיפה באמת אפשר לראות את הפסגה המושלגת', 'https://davidson.weizmann.ac.il/online/askexpert/%D7%91%D7%99%D7%95%D7%9D-%D7%98%D7%95%D7%91-%D7%A8%D7%95%D7%90%D7%99%D7%9D-%D7%9E%D7%9B%D7%90%D7%9F-%D7%90%D7%AA-%D7%94%D7%97%D7%A8%D7%9E%D7%95%D7%9F'),
    new PublicationData(4, marce2, 'השליחים שלנו על מאדים', 'האנושות לא שלחה עדיין נציגים חיים לשכננו האדום, אבל "מרגלים" מטעמנו כבר יצאו לשם', 'https://davidson.weizmann.ac.il/online/%D7%94%D7%A9%D7%9C%D7%99%D7%97%D7%99%D7%9D-%D7%A9%D7%9C%D7%A0%D7%95-%D7%A2%D7%9C-%D7%9E%D7%90%D7%93%D7%99%D7%9D'),
    new PublicationData(5, marce3, 'קרוב להפליא וגדול מתמיד', 'חוקרים מצאו ראיות לכוכב לכת ארצי גדול החג סביב כוכב ברנרד, אחת השמשות הקרובות אלינו ביותר', 'https://davidson.weizmann.ac.il/online/sciencenews/%D7%A7%D7%A8%D7%95%D7%91-%D7%9C%D7%94%D7%A4%D7%9C%D7%99%D7%90-%D7%95%D7%92%D7%93%D7%95%D7%9C-%D7%9E%D7%AA%D7%9E%D7%99%D7%93'),
    new PublicationData(6, dancer, 'המדע של סיבוב הרקדנית', 'איך רקדניות אומנותיות על הקרח מסתחררות בצורה כל כך אלגנטית סביב עצמן? התשובה טמונה בעיקרון פיזיקלי', 'https://davidson.weizmann.ac.il/online/askexpert/%D7%94%D7%9E%D7%93%D7%A2-%D7%A9%D7%9C-%D7%A1%D7%99%D7%91%D7%95%D7%91-%D7%94%D7%A8%D7%A7%D7%93%D7%A0%D7%99%D7%AA'),
];

const PublicationsList = (props) => {
    const INITIAL_DELAY = 400;

    return (
        <Box>
            <Grid container justify="space-around">
                {data.map((publication, index) => 
                    <ScrollAnimation 
                        animateIn='fadeInUp'
                        delay={INITIAL_DELAY + index * 400}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Publication 
                                key={publication.title.concat(index)} 
                                title={publication.title} 
                                link={publication.link}
                                logo={publication.logo}
                                about={publication.about}
                            />
                        </Grid>
                    </ScrollAnimation>
                )}
            </Grid>
        </Box>
    )
};

export default PublicationsList;
