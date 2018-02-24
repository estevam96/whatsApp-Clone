import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        //Configuração firebase
        firebase.initializeApp({
             apiKey :  ' apiKey ' ,
             authDomain :  ' authDomain ' ,
             databaseURL :  ' URL ' ,
             projectId :  ' ID ' ,
             storageBucket :  ' storageBucket ' ,
             messagingSenderId :  ' messagingSenderId '
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
