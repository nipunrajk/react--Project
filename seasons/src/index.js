import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SeasonDispaly from './SeasonDisplay'
import Spinner from './Spinner'
import Error from './Error'

class App extends Component {
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDispaly lat={this.state.lat} />
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <Error message={this.state.errorMessage} />
    }

    return <Spinner message='Please accept location request.' />
  }
  render() {
    return <> {this.renderContent()}</>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
