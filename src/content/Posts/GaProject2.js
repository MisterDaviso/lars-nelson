export default `
## [Personalized Twitter](https://github.com/MisterDaviso/personalied-tweets)
An application that allows users to sort tweets of a particular hashtag according to their relevance to the user. Features OAuth2 authorization and Partitioned SQL tables.

This was the most technically challenging project during my time at GA. Postgres does not support partitioned tables, so a significant portion of database calls were written in raw SQL. OAuth was not part of our course material, and support for Twitter Oauth2 calls specifically is lacking. These two factors meant I was required to make up a significant portion of this data manipulation from scratch, which detracted from other areas such as styling, but in the end I was able to create a functional application.
`
