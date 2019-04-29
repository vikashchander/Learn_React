import React, { Component } from 'react';
import Ball from './ball';
import './lottery.css';

class Lottery extends Component{
    static defaultProps={
        title:"Lottery",
        maxBall: 6,
        maxNum :40,
   }
   constructor(props){
       super(props);
   this.state = {num: Array.from({length: this.props.maxBall})};
   this.handleClick = this.handleClick.bind(this);          //   ??????

   }
   
   randomNum(prev){
      return  {num : prev.num.map(
          n => Math.floor(Math.random()* this.props.maxNum)+1

        )};
     
   }

     generate() {
         this.setState(this.randomNum);
    //    this.setState(curState=>({
    //       num: curState.num.map( 
    //         n=>Math.floor(Math.random()* this.props.maxNum)+1 )
    //  })); 
    }

handleClick(){
        this.generate();
    }

    render() {
        return (
             <section className="lottery">
             <h2>{this.props.title}</h2>
             <div>
               {this.state.num.map(n=>(
                 <Ball num={n} />
              ))};
             </div>
             <button className="lottery-button" onClick={this.handleClick}>Generate</button>
            </section>
        );
    }
}

export default Lottery;