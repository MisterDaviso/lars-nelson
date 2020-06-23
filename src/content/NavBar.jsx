import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <span>
                        <Button href="#Projects"> Projects </Button>
                        <Button href="#Contact"> Contact </Button>
                    </span>
                    <span>
                        <Button href="https://github.com/MisterDaviso">
                            Github
                        </Button>
                        <Button href="https://www.linkedin.com/in/lars-nelson-392084150/">
                            LinkedIn
                        </Button>
                        <Button>
                            <Link to="/resume"> Resume </Link>
                        </Button>
                    </span>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar