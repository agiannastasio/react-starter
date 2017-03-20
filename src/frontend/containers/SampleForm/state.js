import React from 'react'

import Form from './index.js'

const presets = {}

presets.init = {
  error: null,
  text: '',
  isChecked: false,
  isSubmitting: false
}

presets.error = {
  ...presets.init,
  error: new Error('something bad happened')
}

presets.isSubmitting = {
  ...presets.init,
  isSubmitting: true
}

presets.hasValues = {
  ...presets.init,
  isChecked: true,
  text: 'something in the way'
}

presets.checkOnly = {
  ...presets.hasValues,
  text: ''
}

presets.textOnly = {
  ...presets.hasValues,
  isChecked: false
}


// stateful container
module.exports = React.createClass({
  displayName: 'State',

  getInitialState: function () {
    return presets.init
  },

  render: function () {
    return <Form {...this.state} />
  }
})
