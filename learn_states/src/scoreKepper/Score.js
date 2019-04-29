import React, { Component } from 'react';

class Score extends Component{
    constructor(props){
        super(props);
        this.state= {score : 0};
       this.killMe = this.killMe.bind(this);
       this.tripleKill = this.tripleKill.bind(this);
    };
    
    killMe() {
        this.setState({score: this.state.score+1});
    }
    //bad method for changing states
    // tripleKill(){
    //     this.setState({score:this.state.score+1});
    //     this.setState({score: this.state.score+1});
    //     this.setState({score: this.state.score+4});
    // }

// another method
// tripleKill(){
//     this.setState(st=>{
//         return {score:st.score+1};
//     });
//     this.setState(st=>{
//         return {score:st.score+1};
//     });
//     this.setState(st=>{
//         return {score:st.score+1};
//     });
// }



    //callback method used inside tripleKill function
  incrementCounter(previous){
      return {score: previous.score+1};
    }

    tripleKill(){
        this.setState(this.incrementCounter);
        this.setState(this.incrementCounter);
        this.setState(this.incrementCounter);
    }

    render() {
        return (
             <div>
             <h3>Score is :{this.state.score}</h3>
             <button onClick={this.killMe}>Kill Me</button>
             <button onClick={this.tripleKill}>triple Kill</button>
             </div>
        );
    }
}

export default Score;