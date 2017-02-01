/* @flow */

import React, { Component } from 'react';
import { Link } from 'react-router';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Toolbar from './Toolbar';

class Layout extends Component {

    render() {
        const theme = getMuiTheme(lightBaseTheme);
        return (
            <MuiThemeProvider muiTheme={theme}>
                <div className='app-container'>
                    <header>
                        <Toolbar />
                    </header>
                    <div className='app-content'>{this.props.children}</div>
                </div>
            </MuiThemeProvider>
        );

    }

}

export default Layout;
