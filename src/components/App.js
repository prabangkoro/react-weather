import React, { Component } from 'react'

export default class App extends Component {
  state = {
    lat: null,
    errorMessage: null
  }

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    )
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Lattitude: {this.state.lat}</div>
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    return <div>Loading...</div>
  }
}
