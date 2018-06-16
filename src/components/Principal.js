import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './TabBarMenu';
import Conversas from './Conversas';
import Conatatos from './Contatos';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class Principal extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Conversas' },
      { key: '2', title: 'Conatatos' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    '1': Conversas,
    '2': Conatatos
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

