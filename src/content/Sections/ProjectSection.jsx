import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from '../Markdown';

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));

export default function ProjectSection(props) {
    const classes = useStyles();
    const { content, title } = props;

    return (
        <Grid item xs={12} md={12} id={title}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <Divider />
            <div>
                <h1> 
                    <a href="https://github.com/MisterDaviso/project-one-underground-combat">
                        Underground Combat
                    </a> 
                </h1>
                <p>
                    A turn-based combat rpg built using the Phaser 3 API. Features multiple win conditions, varied gameplay, and modular encounters. The game is styled after the game "Undertale" by Toby Fox. 
                    The first three days were just spent learning Phaser 3. This allowed actual production to be fast-tracked and in fact allowed for more time to debug and add features than might otherwise have been possible building the project out piece by piece.
                </p>
            </div>
            <div>
                <h1>
                    <a href="https://github.com/MisterDaviso/personalied-tweets">
                        Personalized Twitter
                    </a>
                </h1>
                <p>
                    An application that allows users to sort tweets of a particular hashtag according to their relevance to the user. Features OAuth2 authorization and Partitioned SQL tables.
                    This was the most technically challenging project during my time at GA. Postgres does not support partitioned tables, so a significant portion of database calls were written in raw SQL. OAuth was not part of our course material, and support for Twitter Oauth2 calls specifically is lacking. These two factors meant I was required to make up a significant portion of this data manipulation from scratch, which detracted from other areas such as styling, but in the end I was able to create a functional application.
                </p>
            </div>
            <div>
                <h1>
                    <a href="https://github.com/MisterDaviso/pugetsound-schools-server">
                        Plan Ahead
                    </a>
                </h1>
                <p>
                    An online school website that allows teachers to create classes and assignments and for students to sign up for those classes and view those assignments. Features complex database manipulation and user freedom.
                    This was a group project, and my contribution was the entirety of the server-side code. I built the models with input from my teammates and updated them as new information became necessary to store. Multiple complex routes became necessary as more complex operations were required to ensure smoother user experiences on the front end.
                    <a href="https://github.com/MisterDaviso/pugetsound-schools-server"> Server Code </a>
                    <a href="https://github.com/ObtuseSpruce/pugetsound-client"> Client Code</a>
                </p>
            </div>
            <div>
                <h1>
                    <a href="https://github.com/MisterDaviso/teach-machines-to-check">
                        Teach Machines to Check
                    </a>
                </h1>
                <p>
                    A simple neural network designed to find an algorithm that can play checkers built entirely in python. The code determines every possible move on a given turn and then condenses that information into a readable format for the algorithm which then chooses the most optimal move among them.
                    This was my final project as General Assembly. It required an understanding of calculus, linear algebra, and data manipulation. The former two allowed me to create an algorithm without the use of TensorFlow and the later I learned as I went through three iterations of structuring the board data for the algorithm to use.
                </p>
            </div>
        </Grid>
    );
}

ProjectSection.propTypes = {
    content: PropTypes.array,
    title: PropTypes.string,
};
