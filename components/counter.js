import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, minus } from './../store/actions/homeActions'

class Counter extends Component {
  increment = () => {
    const { dispatch } = this.props
    dispatch(add())
  }

  decrement = () => {
    const { dispatch } = this.props
    dispatch(minus())
  }

  render () {
    const { count } = this.props
    return (
      <div>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { count: state.homeReducer.count }
}

export default connect(mapStateToProps)(Counter)
