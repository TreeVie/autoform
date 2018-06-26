import * as React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter } from "react-router-dom";
import {createStore} from 'redux'
import { Provider } from "react-redux";

import Index from "./components/index";
import "./assets/style/base.css";

const reducers = function(state,action){
    return state
};

const store = createStore(reducers);

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter basename="/">
                <Route path="/" component={Index} />
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
