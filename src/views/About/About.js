import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: '2%',
        padding: '6%',
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'pre-wrap',
        marginTop: '-4%',
        marginLeft: '8%',
        marginBottom: '4%',
    },
    contentContainer: {
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: '5%'
    },
    content: {
        lineHeight: theme.typography.caption.lineHeight,
        textAlign: 'left'
    }
}));

const Articles = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box>
                <Box className={classes.headerContainer}>
                    <Typography className={classes.description} variant="subtitle1">About Me</Typography>
                </Box>
                <Box className={classes.contentContainer}>
                    <ScrollAnimation 
                        animateIn='fadeIn'
                        delay={500}
                        duration={2}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Typography variant="subtitle2" className={classes.content}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
                            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                            discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                            This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
                        </Typography>
                    </ScrollAnimation>
                </Box>
            </Box>
        </Box>
    )
};

export default Articles;
