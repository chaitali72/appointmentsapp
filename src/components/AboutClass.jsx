import React, { Component } from 'react'

export default class AboutClass extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0 , 
        brand: "bmw",
    color:"black"
};
    
    this.addCount = this.addCount.bind(this);
    this.prevCount = this.prevCount.bind(this);
    this.prevColor = this.prevColor.bind(this);
    }
    changeColor (){
        this.setState(prevColor => {
return {
    color: "red"
}
        })
    }
    addCount(){
        this.setState((nextCount) => {
            return { 
                count: nextCount.count+1 }
           
        })
        console.log(this.state.count)
    }
    prevCount(){
        this.setState((prevCount) => {

            return{
count : prevCount.count-1
            }
        })
        console.log(this.state.count)
    }
  render() {
    return (
      <div>AboutClass
        <h2>class cpmponents demo</h2>
        <p>number of counts click {this.state.count}</p>
        <button onClick={this.addCount}>addCount : </button>
        <button onclick = {() => this.changeColor()} >Change color</button>
        <div>

        </div>
        <button onClick={this.prevCount}>prevCount : </button>
      </div>
    )
  }
}
