import React, { Component } from 'react'
import AppC from "./app.module.css"
import { connect } from "react-redux"
import {numAdd,numDel} from "./store/actionCreator"

function Add(props){
  return <div onClick={props.numAdd}>+</div>
}

function Del(props){
  return <div onClick={props.numDel}>
    -
  </div>
}

class App extends Component {
  state = {
    text:"chushizhi",
  }
  render() {
    return (
      <div className={AppC.ipt}>
        {this.props.num}
        <Add {...this.props}></Add>
        <Del {...this.props}></Del>
      </div>
    )
  }

  
}

let mapStateToProps = (state)=>{
  return {
    num:state.payLoad.num
  }
}

let mapDispatchToProps = (dispatch)=>{
  return{
    numAdd:()=>{
      dispatch(numAdd())
    },
    numDel:()=>{
      dispatch(numDel())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)