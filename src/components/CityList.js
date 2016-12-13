import React, { Component } from 'react';

export default class CityList extends Component {

    createCityList = () => {
        return (
            this.props.items.map(item => {
                return (
                    <li key={item}>
                        <a href='#'>{item}</a>
                    </li>
                )
            })
        )
    }

    render(){
        return (
        <ul>
            {this.createCityList()}
        </ul>
        )
    }
}
