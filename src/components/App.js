import React from 'react';
import {Provider} from "react-redux";
import store from "../configureStore";
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from '../containers/Root'

export default function App() {
    return (
        <Provider store={store}>
            <Root/>
        </Provider>
    );
}