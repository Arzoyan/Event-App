import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: null,
            password: null,
        }
    }

    handlerChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    submit() {

        console.log('your data sned DB', this.props)
        return this.props.history.push('/homePage');
    }

    render() {
        console.log('sjhgfkjgfl qwglifglwv', this.state)
        return (
            <div>
                <form>
                    <input id='login' type='text' onChange={(e) => { this.handlerChange(e) }} />
                    <input id='password' type='password' onChange={(e) => { this.handlerChange(e) }} />

                </form>
                <div>
                    <button type='button' onClick={() => { this.submit() }} > Submit</button>
                    <Link to='/registration'> Registration </Link>
                </div>
            </div>
        )
    }
}
export default Login;