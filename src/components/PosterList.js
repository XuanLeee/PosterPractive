
import React, { Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import PosterDetail from './PosterDetail';


class PosterList extends Component {
  state = {
    lists:[],
  };
  componentWillMount(){
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
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
      <ScrollView>
        { this.renderList() }
      </ScrollView>
    );
  }
}
export default PosterList;
