

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'
import Plan from './Plan'

export default class App extends Component {
  constructor(props) {
    super(props)
    // Here we bind the this keyword to avoid collisoons between multiple this
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.AddData = this.AddData.bind(this)
    this.state = {
      items: [],
      text: '',
    }
  }
  // This is our inputfeild onChange event handler ...e.target.value
  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }
  AddData = (e) => {
    if (this.state.text !== '') {
      const items = [...this.state.items, this.state.text]
      this.setState({ items: items, text: '' })
      // console.log(e)
    }
  }

  //This function is going to delete the data in the list by refering to its unique id
  handleDelete = (id) => {
    // console.log('deleted data', id)
    const oldItems = [...this.state.items]
    // debugger
    // console.log('olditemsss', oldItems)

    const items = oldItems.filter((element, i) => {
      return i !== id
    })
    this.setState({ items: items })
  }
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto shadow-lg p-3">
            <h1 className="text-center">Today's Plan</h1>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write Your Task"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn  btn-warning px-5"
                  onClick={this.AddData}
                >
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {/* {
                    'declaring the Todo task in the given below component as a form array'
                  } */}
                  {this.state.items.map((value, i) => {
                    return (
                      <Plan
                        value={value}
                        key={i}
                        id={i}
                        handleDelete={this.handleDelete}
                      />
                    )
                  })}

                  {/* {console.log(this.state.items)} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}