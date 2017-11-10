
import React , { Component }from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Stars from './Stars';
import Comments from './Comments';

class PosterDetail extends Component{
  state = {
    loading: false,
    star:false,
  }
  componentWillMount(){
    this.setState({loading: true, star:true});
  }
  toggleStatus(){
      this.setState({
        loading:!this.state.loading,
      });
      console.log('toggle button handler: '+ this.state.loading);
    }

  toggleStar(){
      this.setState({
      star:!this.state.star,
      });
      console.log('star: '+ this.state.star);
    }

  renderContent(){
    if(this.state.loading){
      return (
        <Comments
          whenPress={()=>this.toggleStatus()}
          loading = {this.state.loading}
        >Show Comments
        </Comments>
      );
    }
    return (
      <Comments
        whenPress={()=>this.toggleStatus()}
        loading = {this.state.loading}
      >Hide Comments</Comments>
    );
  }
  renderComments(){
    if(!this.state.loading){
      return(
        <CardSection>
          <View>
            <Text> {this.props.list.body} </Text>
          </View>
        </CardSection>
    );
  }
}
  renderStar(){
    if(this.state.star){
      return (
          <Stars
          whenPress={()=>this.toggleStar()}
          star = {this.state.star}
          >
          </Stars>
      );
    }
  }


render(){
    return (
      <Card>
        <CardSection>
            <Text> {this.props.list.name} </Text>
        </CardSection>
        <CardSection>
            <Text> {this.props.list.body} </Text>
        </CardSection>
        <CardSection>
          <View style={styles.headerContentStyle}>
            {this.renderStar()}
          </View>
        </CardSection>
        <CardSection>
          <View>
            {this.renderContent()}
          </View>
        </CardSection>
            {this.renderComments()}
      </Card>
    );
}
};

const styles = {
  headerContentStyle:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',

  },
   header:{
     backgroundColor: '#D3D3D3',
   },
   imageStyle:{
     height:15,
     width:15,
   },
}

export default PosterDetail;
