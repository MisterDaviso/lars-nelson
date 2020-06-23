import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));

export default function PortfolioSection(props) {
    const classes = useStyles();
    const { content, title } = props;

    return (
        <Grid item xs={12} md={12}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
            {content.map((post) => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                    {post}
                </Markdown>
            ))}
        </Grid>
    );
}

PortfolioSection.propTypes = {
    content: PropTypes.array,
    title: PropTypes.string,
};
