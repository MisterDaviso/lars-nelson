import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import PortfolioSection from './PortfolioSection'
// The Project information
import project1 from './Projects/underground_combat.md';
import project2 from './Projects/personalized_twitter.md';
import project3 from './Projects/plan_ahead.md';
import project4 from './Projects/teach_machines_to_check.md';
//import post2 from './blog-post.2.md';
//import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));

// The Nav Bar links
const navigations = [
    { title: 'Top', url: '#'},
    { title: 'Projects', url: '#' },
    { title: 'Contact', url: '#'},
    { title: 'Resume', url: '#'}
];

// The posts that were put into cards
// const featuredPosts = [
//     {
//         title: 'Featured post',
//         date: 'Nov 12',
//         description:
//             'This is a wider card with supporting text below as a natural lead-in to additional content.',
//         image: 'https://source.unsplash.com/random',
//         imageText: 'Image Text',
//     },
// ];
// The three .md files that were saved in the repository
const projects = [project1, project2, project3, project4];

// This is...the sidebar. Yeah.
const sidebar = {
    social: [
        { name: 'GitHub', icon: GitHubIcon, url: '#'},
        { name: 'LinkedIn', icon: null, url: '#'},
    ],
};

/**
 * TODO: Adapt 'Main' into 'Projects'
 * 
 */
export default function Blog() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Lars Nelson" sections={navigations} />
                <main>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <div>
                            <PortfolioSection title="About" content={[about]} />
                            <PortfolioSection title="Projects" content={projects} />
                            <PortfolioSection title="Contact" content={[contact]} />
                        </div>
                        <Sidebar social={sidebar.social} />
                    </Grid>
                </main>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </React.Fragment>
    );
}

/**
 * The Main Featured is huge with a picture as a background
 * The Minor Featured are cards with content
 *      It is done using a map function to iterate over the list of these posts
 * The actual 'blog' is contained within the Main tag
 * The SideBar is techincally in the same line as Main, grid-wise
 */
// export default function Blog() {
//     const classes = useStyles();
//     return (
//         <React.Fragment>
//             <CssBaseline />
//             <Container maxWidth="lg">
//                 <Header title="Blog" sections={sections} />
//                 <main>
//                     <MainFeaturedPost post={mainFeaturedPost} />
//                     <Grid container spacing={4}>
//                         {featuredPosts.map((post) => (
//                             <FeaturedPost key={post.title} post={post} />
//                         ))}
//                     </Grid>
//                     <Grid container spacing={5} className={classes.mainGrid}>
//                         <Main title="From the firehose" posts={posts} />
//                         <Sidebar
//                             title={sidebar.title}
//                             description={sidebar.description}
//                             archives={sidebar.archives}
//                             social={sidebar.social}
//                         />
//                     </Grid>
//                 </main>
//             </Container>
//             <Footer title="Footer" description="Something here to give the footer a purpose!" />
//         </React.Fragment>
//     );
// }
