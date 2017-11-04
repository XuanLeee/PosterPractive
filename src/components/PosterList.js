
import React, { Component} from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PosterDetail from './PosterDetail';

class PosterList extends Component {
  state = {
    lists:[]
  };
  componentWillMount(){
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => this.setState({lists: response.data}));
  }
  renderList(){
    return this.state.lists.map(list =>
      <PosterDetail key = {list.id} list = {list} />
    );
  }
  render(){
    console.log(this.state);
    return(
      <View>
        {this.renderList()}
      </View>
    );
  }
}
export default PosterList;
