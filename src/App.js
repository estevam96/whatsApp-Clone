import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './Routes';
import reducers from './reducers';
import Config from './components/Config';

class App extends Component {
    componentWillMount() {
        //Configuração firebase
        <Config />
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
