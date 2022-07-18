import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import {Beranda} from "../pages/Beranda";
import {JualMobil} from "../pages/JualMobil";

export const WebRoutes = () => {
    return (
        <Router >
            <Switch>
                <Route exact path="/">
                    <Beranda />
                </Route>
                <Route exact path="/jual-mobil">
                    <JualMobil />
                </Route>
            </Switch>
        </Router>
    )
}