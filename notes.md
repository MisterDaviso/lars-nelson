# Lars Portfolio Website v2
This is the second iteration of my portfolio website, this time made with react!

## Content

### Projects
* Underground Combat
    * A turn-based combat rpg built using the Phaser 3 API. Features multiple win conditions, varied gameplay, and modular encounters. The game is styled after the game "Undertale" by Toby Fox. 
    * The first three days were just spent learning Phaser 3. This allowed actual production to be fast-tracked and in fact allowed for more time to debug and add features than might otherwise have been possible building the project out piece by piece.
* Personalized Twitter
    * An application that allows users to sort tweets of a particular hashtag according to their relevance to the user. Features OAuth2 authorization and Partitioned SQL tables.
    * This was the most technically challenging project during my time at GA. Postgres does not support partitioned tables, so a significant portion of database calls were written in raw SQL. OAuth was not part of our course material, and support for Twitter Oauth2 calls specifically is lacking. These two factors meant I was required to make up a significant portion of this data manipulation from scratch, which detracted from other areas such as styling, but in the end I was able to create a functional application.
* Plan Ahead
    * An online school website that allows users to sign up as either students or teachers. Teachers have the ability to create classes and assignemnts for those classes, while students have the ability to sign up for those classes and view the assignments, all built in TypeScript.
    * This was a group project, and my contribution was the entirety of the server-side code. I built the models with input from my teammates and updated them as new information became necessary to store. I created numerous routes to perform several niche server calls, all at the request of my teammates to make their work as seamless as possible.
* Teach Machines to Check
    * 

### Links
* Github
* LinkedIn
* Downloadable Resume


## Design

### Color Scheme
* Blue, Green and Grey
    * Metalic/Electric/International Klein: #002fa7
    * Forest Green #228b22
* Blue, Orange, Grey
    * Orange; nav bar: ff6700
    * Light Grey; blog body: ebebeb
    * Med Grey; site background: c0c0c0
    * Faded Blue; cards and blocks: 3a6ea5
    * A Blue; headings and titles: 004e98

### Fonts
* 

### Layout
* Link/Nav bar across the top with Github, LinkedIn and Resume
* My name in Blue on the Dark gray background
* Below the name, the light gray blog body begins
* Projects
* Skills
* Contact information
