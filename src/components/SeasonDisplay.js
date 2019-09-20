import React, { Component } from 'react'

const seasonConfig = {
  summer: {
    iconName: 'sun',
    text: 'Lets hit the beach!'
  },
  winter: {
    iconName: 'snowflake',
    text: 'Bruh, it is chilly!'
  }
}

export default class SeasonDisplay extends Component {
  getSeason (lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter'
    }
    return lat > 0 ? 'winter' : 'summer'
  }

  render() {
    const season = this.getSeason(this.props.lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]
    return (
      <div>
        <i className={`icon ${iconName}`}></i>
        <h1>
          {text}
        </h1>
        <i className={`icon ${iconName}`}></i>
      </div>
    )
  }
}
