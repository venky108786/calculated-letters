// Write your code here.
// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onchangeFun = event => {
    const {value} = event.target

    this.setState({searchInput: value})
  }

  clearAll = () => {
    this.setState({searchInput: ''})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="bg">
        <div className="left-container">
          <h1 className="heading">Calculate the letter you enter</h1>
          <label className="label" htmlFor="1">
            enter letters
          </label>
          <input
            id="1"
            className="input"
            type="text"
            placeholder="enter the passage"
            value={searchInput}
            onChange={this.onchangeFun}
          />
          <button className="button" type="button" onClick={this.clearAll}>
            No.of letters:{searchInput.length}
          </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="cal"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
