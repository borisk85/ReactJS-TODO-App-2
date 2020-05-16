import React, { Component } from 'react'
import '../App.css'
import PropTypes from 'prop-types'

class AddTodo extends Component {
  state = {
    title: '',
  }

  // Submiting input data
  onSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  // Listening input data
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          style={{ flex: '10', padding: '5px' }}
          placeholder='Add Todo...'
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propType = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo
