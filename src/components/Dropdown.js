import React, { Component } from 'react';

export default class Dropdown extends Component {
    constructor(){
        super()
        this.state = {
            val: `Region`
        }
    }

    handleChange = (e) => {
        this.setState({
            val: e.target.value
        })
        this.props.onChange(e.target.value)
    }

    createDropDown = () => {
        return (
            this.props.items.map(item => {
                return <option key={item} value={item}>{item}</option>
            })
        )
    }

    render(){
        return (
        <div>
            <select
              value={this.state.val}
              onChange={this.handleChange}
              >
              {this.createDropDown()}
            </select>
        </div>
        )
    }
}
