import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Home from './home'
import NoMatch from './nomatch'

injectTapEventPlugin();

class App extends Component {
    static propTypes = {
        children: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <MuiThemeProvider>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />

        </Route>
        <Route path='*' component={NoMatch} />
    </Router>,
    document.getElementById('root')
);
