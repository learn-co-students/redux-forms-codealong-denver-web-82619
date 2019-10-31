import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    todo: ""
  }

  handleChange = (event) => {
    this.setState({ todo: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ todo: "" })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input onChange={this.handleChange} value={this.state.todo} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => { return { addTodo: (todo) => dispatch({ type: "ADD_TODO", ...todo }) } }
)(CreateTodo);
