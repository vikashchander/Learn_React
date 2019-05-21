import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class searchFood extends Component {
constructor(props){
super(props);
this.state ={query : ""};
this.handleChange= this.handleChange.bind(this);
}
handleChange(evt){
    this.setState({query: evt.target.value});

}
render() {
  return (
    <div>
      <h2>this is searchFood Page </h2>
      <input type='text' 
       value={this.state.query} 
      onChange={this.handleChange}  
      placeholder='seach food  here'  />
      <Link to={`/food/${this.state.query}`}>GO</Link>
    </div>
  )
}     
}

export default searchFood;