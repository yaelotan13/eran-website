import React from 'react';
import { Box, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
        }
    },
    education: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 10,
        padding: 20,
        boxShadow: "1px 1px 3px #9E9E9E",
        backgroundColor: 'white',
        [theme.breakpoints.between('md', 'xl')]: {
            boxSizing: 'border-box',
            width: '35vw',
            height: '40vh',
            marginTop: '12%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '80vw',
            marginTop: '6%'
        }
    },
    title: {
        fontWeight: 700,
        fontSize: 16,
        fontFamily: theme.typography.h3.fontFamily,
        marginTop: '5%',
    },
    publisher: {
        fontFamily: theme.typography.h3.fontFamily,
        fontSize: 12,
        marginBottom: '5%'
    }
}));

const Publication = (props) => {
    const classes = useStyle();
    const { logo, title, about, link, publisher } = props;

    return (
        <Box className={classes.container}>
            <Link href={link} underline="none" title="to article">
                <Box className={classes.education}>
                    <Box style={{
                        backgroundImage: `url(${logo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: 150,
                    }}/>
                    <Typography variant="h5" className={classes.title}>{title}</Typography>
                    <Typography className={classes.publisher}>{publisher}</Typography>
                    <Typography>{about}</Typography>
                </Box>
            </Link>
        </Box>
    )
};

export default Publication;
