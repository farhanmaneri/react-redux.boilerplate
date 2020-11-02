import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import {set_data} from './store/action'



class App extends React.Component{
  constructor(){
    super()
    this.state = {
      count : 0, 
    }
  }
 render(){
  console.log('props===>',this.props)
   return(
    <div className="App">
    <h1>Hello world!</h1>
    {this.state.count}
    <button onClick={()=>this.props.set_data()}>Set Data</button>
  </div>
   )
 }
}

 
const mapStateToProps = (state)=>({
 user: state.user
})
const mapDispatchToProps = (dispatch)=> ({
  set_data: ()=> dispatch(set_data())
  
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
