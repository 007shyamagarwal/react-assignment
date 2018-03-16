import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {App} from "./App";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import StateList from "./statelist/containers/StateList";
import StateEdit from "./statelist/containers/StateEdit";
import Stateview from "./statelist/containers/StateView";


export default function Routes(props) {
    return (
        <Router>
            <App color='white'>
               <Switch>
                    <Route exact path="/"  exact   component={Home} />
                    <Route exact path="/statelist"   component={StateList} />
                    <Route exact path="/statelist/view/:id"   component={Stateview} />
                    <Route exact path="/statelist/edit/:id"   component={StateEdit} />
                    <Route exact path="/statelist/create/"   component={StateEdit} />
                    <Route exact path="/about"   component={About} />
                    <Route exact path="/contact"   component={Contact} />
                    <Route  path="*"   component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}
