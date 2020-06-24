import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from './Main'
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import DownloadIcon from '@material-ui/icons/ArrowDownward'
import Header from './Header';
import Footer from './Footer';
import Social from './Social'
// The Project information
import GaProject1 from './Posts/GaProject1';
import GaProject2 from './Posts/GaProject2';
import GaProject3 from './Posts/GaProject3';
import GaProject4 from './Posts/GaProject4';
import about from './Posts/About'
import contact from './Posts/Contact'

const useStyles = makeStyles((theme) => ({
    namePlate: {
        marginTop: theme.spacing(10)
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    root: {
        flexGrow: 1,
        textAlign: 'center',
        padding: theme.spacing(2)
    },
}));

// The Nav Bar links
const navigations = [
    { title: 'Top', url: '#Top'},
    { title: 'About', url: '#About'},
    { title: 'Projects', url: '#Projects' },
    { title: 'Contact', url: '#Contact'},
];

const projects = [GaProject1, GaProject2, GaProject3, GaProject4];

// This is the social media section. And resume. Yeah.
const socials = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/MisterDaviso'},
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/in/lars-nelson-392084150/'},
    //{ name: 'Resume', icon: DownloadIcon, url: '/resume'}
]

/**
 * The primary HTML to return
 */
export default function Blog() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header sections={navigations} id="Top"/>
                <main>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.namePlate}
                    >
                        Lars Nelson
                    </Typography>
                    <Grid container spacing={1} className={classes.mainGrid}>
                        <Grid item xs={2} />
                        <Main about={about} projects={projects} contact={contact} /> 
                        <Social content={socials} />
                    </Grid>
                </main>
            </Container>
            <Footer title="Lars Nelson" description="Thank you for your consideration!" />
        </React.Fragment>
    );
}