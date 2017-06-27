import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import Home from './Scenes/Home/Home';
import Documentation from './Scenes/Documentation/Documentation';

const App = () => (
    <Router>
        <div>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/documentation" component={Documentation} />
                    <Route component={Home}/>
                </Switch>
            </div>
            <Footer />
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));