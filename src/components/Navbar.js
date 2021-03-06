import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar className="nav-container">
                        <Button color="inherit" component={Link} to='/home'>Home</Button>
                    </Toolbar>
                </AppBar>
                
                
            </div>
        )
    }
}

export default Navbar
