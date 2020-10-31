import React, { useEffect, useState, Fragment} from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Example from './_components/Example/Example';
import Home from './_components/Home/Home'
const App = () => {

    return (
        <Fragment>
            <Router>
                <div>
                    <Switch>
                        <Route path="/example" component={Example} />
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </Router>
        </Fragment>
    );
};

export default App;