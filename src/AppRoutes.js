import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import OurTeam from './components/OurTeam/OurTeam';


const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/countries" component={Countries} />
        <Route path="/contact" component={Contact} />
        <Route path="/our-team" component={OurTeam} />
        <Route component={NotFound}></Route>
    </Switch>
)

export default AppRoutes;