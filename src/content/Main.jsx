import React from 'react';
import PortfolioSection from './Sections/PortfolioSection';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}));

export default function Main(props) {
    const { projects, contact, about } = props;
    const classes = useStyles();
    return (
        <Grid item xs={8} md={8}>
            <Paper className={classes.root} >
                <PortfolioSection title="About" content={[about]} />
                <PortfolioSection title="Projects" content={projects} />
                <PortfolioSection title="Contact" content={[contact]} />
            </Paper>
        </Grid>
    );
}
