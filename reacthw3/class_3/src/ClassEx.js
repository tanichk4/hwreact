import React, { Component } from "react";

import { ThemeContext } from "./contextt";

import "./Card.css";

export default class ClassEx extends Component {
    state = {
        name: 'Harry',
        surname: 'Potter',
        width: window.innerWidth,
    }

    componentDidMount() {
        document.title = this.state.name + ' ' + this.state.surname

        window.addEventListener('resize', this.handleResize)
    }

    componentDidUpdate() {
        document.title = this.state.name + ' ' + this.state.surname
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        this.setState({
            width: window.innerWidth,
        })
    }

    handleChangeName = e => {
        this.setState({
            name: e.target.value,
        });
    }

    handleChangeSurname = e => {
        this.setState({
            surname: e.target.value,
        });
    }

    render() {
        return (
            <ThemeContext.Consumer>
            {({theme}) => {
            return <>
            <h1>Class Component</h1>
            <form className="card" style={{background: theme.color}}>
            <input placeholder="Name" value={this.state.name} onChange={this.handleChangeName}/>
            <input placeholder="Surname" value={this.state.surname} onChange={this.handleChangeSurname}/>
            <div style={{color: '#fff'}}>{this.state.width}</div>
            </form>
            </>
            }}
            </ThemeContext.Consumer>
        )
    }
}