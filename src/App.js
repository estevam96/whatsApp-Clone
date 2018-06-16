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
            apiKey: 'AIzaSyDTEFKOIOeRFV4gEIZR3H7JZFl8mpgDUJQ',
            authDomain: 'whatsapp-clone-579b4.firebaseapp.com',
            databaseURL: 'https://whatsapp-clone-579b4.firebaseio.com',
            projectId: 'whatsapp-clone-579b4',
            storageBucket: 'whatsapp-clone-579b4.appspot.com',
            messagingSenderId: '602317284479'
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
