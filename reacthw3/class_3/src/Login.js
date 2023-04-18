import React from 'react';

export default class Login extends React.Component {
    state = {
        login: '', 
        password: '',
    };

    loginRef = React.createRef();
    passwordRef = React.createRef();

    componentDidMount(){
        console.log(this.loginRef.current)
        this.loginRef.current.focus()
    }

    changeLoginValue = (e) => {
        this.setState({login: e.target.value})
    }

    changePasswordValue = (e) => {
        this.setState({password: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()

        const { login, password } = this.state;

        if(login.length === 0){
            this.loginRef.current.focus();
            return
        }else {
            this.loginRef.current.blur();
        }

        if(password.length === 0){
            this.passwordRef.current.focus();
        }else{
            this.passwordRef.current.blur();
        }
    }

    render() {
        return <div>
            <form onSubmit={this.onSubmit}>
                <input
                 placeholder='Your login'
                 value={this.state.login}
                 onChange={this.changeLoginValue}
                 ref={this.loginRef}
                />
                <input 
                 type='password'
                 placeholder='Your password'
                 value={this.state.password}
                 onChange={this.changePasswordValue}
                 ref={this.passRef}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    }
}