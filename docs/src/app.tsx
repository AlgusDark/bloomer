import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import './app.css';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

const App = () => (
    <Router>
        <div>
            <NavBar />
            <div>
                {/*<Route exact path="/" component={Home} />*/}
                {/*<Route path="/documentation" title="Documentation" component={Documentation} />*/}
            </div>
            <Footer />
        </div>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));