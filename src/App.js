// import logo from './logo.svg';
import './App.css';
import React from "react";
import Counter from './components/counter';
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }  
  }
   handleMinusClick = () =>{
     if (this.state.count > 0){
    this.setState({count:this.state.count -1})}
  }
  handlePlusClick =() =>{
    this.setState({count:this.state.count +1})
  }  
 
  render(){
    // console.log("App : ", this)
    return(
      <div>
        <Counter 
          count={this.state.count} 
          increment ={this.handlePlusClick}
          substract={this.handleMinusClick}
        />
      </div>
    )
  }
}

export default App;
