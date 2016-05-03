import React from 'react'

const _defaultBtnCount = 4
const _inlineBlock = {
  display: 'inline-block'
}

class QtyPicker extends React.Component {
  render () {
    var btnCount = !isNaN(this.props.btnCount) ? this.props.btnCount : _defaultBtnCount,
        buttons = new Array(Math.min(btnCount, _defaultBtnCount))

    for (let i = 0; i < buttons.length; i++) {
      buttons[i] = i + 1
    }

    buttons = buttons.map((b, i) => {
      return <button
        className = { `btn btn-secondary${ b === this.props.value ? ' btn-selected' : '' }` }
        key = { b }
        type = 'button'
        onClick = { () => this.props.onChange(Number(b)) }>
        { b }
      </button>
    })

    return <div className = 'qty-picker'>
      <div style = { _inlineBlock } className = 'btn-group qty-picker-buttons' role = 'group'>
        { buttons }
      </div>
      
    <input
      disabled = { !btnCount }
      type = 'text'
      className = 'form-control qty-picker-input'
      style = { _inlineBlock }
      onChange = { event => {
        if (!isNaN(event.target.value)) {
          this.props.onChange(Number(event.target.value))
        }
      } }
      value = { this.props.value } />
    </div>
  }
}

QtyPicker.propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default QtyPicker

