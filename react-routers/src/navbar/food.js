import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Food extends Component {
    render() {
        var foodName = this.props.match.params.foodName;
       // console.log(foodName);
        const foodUrl =`https://source.unsplash.com/400x300/?${foodName}`;
      return (
        <div>
            <h2>this is a food </h2>
            <img  src={foodUrl} alt={foodName}/>
            <Link to='/search'>Go Back</Link>
        </div>
      )
    }
}

export default Food;