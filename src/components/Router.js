import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CalcExtended from "./CalcExtended";
import WelcomePage from "./WelcomePage";
import NotFound from "./NotFound";


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/calc/:calcId" component={CalcExtended} />
            <Route component={NotFound} />
        </Switch>
    
    </BrowserRouter>
);

export default Router;