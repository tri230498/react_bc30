import React, { Component } from 'react'
import ExModal from './ExModal'
import ExProductList from './ExProductList'

export default class ExerciseCarStore extends Component {
  render() {
    return (
      <div className='container'>
        <h3>ExerciseCarStore</h3>
        <ExModal />
        <ExProductList />
      </div>
    )
  }
}
