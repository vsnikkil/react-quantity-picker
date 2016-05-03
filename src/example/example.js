import React from 'react'
import ReactDOM from 'react-dom'
import QuantityPicker from '../QtyPicker'

const mountPoint = document.getElementsByClassName('react-wrapper')[0]

class TestForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pickerValue: 1
    }

    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.render = this.render.bind(this)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(this.state)
  }

  render () {
    const pickerProps = {
      value: this.state.pickerValue,
      onChange: v => this.setState({ pickerValue: v })
    }

    console.log(...pickerProps)

    return <form>
      <QuantityPicker { ...pickerProps } />
    </form>
  }
}

ReactDOM.render(<TestForm />, mountPoint)

