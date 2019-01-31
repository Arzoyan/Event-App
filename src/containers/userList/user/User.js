import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userIdAction } from '../../../actions/userIdAction';

class User extends Component {
    constructor(props) {
        super(props)
    }


    exampleFoo(e) {

        let arg = e.target.id;
        this.props.userIdAction(arg);
    }


    render() {
        const { user } = this.props
        console.log('asdsad', this.props)
        return (
            <form  >
                <h1
                    id={user.id}
                    value={user.id}
                    onClick={(e) => this.exampleFoo(e)}
                >{user.name}</h1>
            </form>
        )
    }
}

const mapStateToProps = (dispach) => {
    return {
        userIdAction: arg => dispach(userIdAction(arg))
    }
}

User = connect(
    null,
    mapStateToProps,
)(User);

export default User;


