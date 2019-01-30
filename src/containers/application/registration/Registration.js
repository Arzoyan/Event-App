import React, { Component } from 'react';

class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: null,
            lastName: null,
            email: '',
            password: null,
            confirmPassword: null,
        }
    }




    changeHandler(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    checkSpaseBarInEmail(email) {
        for (let i = 0; i < email.length; i++) {
            if (email[i] === ' ') {
                this.setState({
                    color: 'red',
                })
                return false
            }
        }

        if (this.validateEmail(email)) {
            console.log('this.validateEmail(email)+++++++++++++');
            this.setState({
                color: '',
            })
            return true;
        }
        this.setState({
            color: 'red',
        })
        return false;
    }

    validateEmail(email) {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log('Is Valid', regex.test(email));
        return regex.test(email);
    }


    passwordValidation(password) {
        let regex = /^[\w/*@!#$%^&]{8,}$/;
        console.log('is valid', regex.test(password));
        return regex.test(password);
    }


    handler() {
        const { password, confirmPassword, email } = this.state
        if (!this.checkSpaseBarInEmail(email)) {
            return alert('your  email  is not valid')
        };
        if (password !== confirmPassword) {
            return alert('your  password  is not valid')
        }
        if (!this.passwordValidation(password)) {
            return alert('your  password  is not valid')
        }
        alert('your data send DB');
        return this.props.history.push('/');
    }

    render() {
        let styles = {
            margin: '10px',
            display: 'block',
            width: '250px',
            height: '30px',
            border: '1px solid #ccc'
        }

        return (
            <div>
                <form>
                    <div>
                        <h2> Name </h2>
                        <input id='name' type='text'
                            style={styles = { ...styles, }}
                            onChange={(e) => { this.changeHandler(e) }}
                            placeholder="First name" />
                    </div>
                    <div>
                        <h2> Last Name </h2>
                        <input id='lastName' type='text'
                            style={styles = { ...styles, }}
                            onChange={(e) => { this.changeHandler(e) }}
                            placeholder="Last name" />
                    </div>
                    <div>
                        <h2> Email </h2>
                        <input id='email' type="email"
                            style={styles = { ...styles, }}
                            onChange={(e) => { this.changeHandler(e) }}
                            placeholder="test@email.com" />
                    </div>
                    <div>
                        <h2> Password </h2>
                        <input id='password' type="password"
                            style={styles = { ...styles, }} onChange={(e) => { this.changeHandler(e) }}
                            placeholder="Password" />
                    </div>
                    <div>
                        <h2>Confirm Password </h2>
                        <input id='confirmPassword' type="password"
                            style={styles = { ...styles, }} onChange={(e) => { this.changeHandler(e) }}
                            placeholder="Confirm Password" />
                    </div>
                </form>
                <button onClick={() => { this.handler() }}> submit </button>
            </div>
        )
    }
}

export default Registration;


