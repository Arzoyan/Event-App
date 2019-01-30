import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userIdAction } from '../../../actions/userIdAction';

class Post extends Component {
    constructor(props) {
        super(props)
    }





    render() {
        const { post } = this.props
        console.log('this propss', this.props);
        return (
            <form  >



            </form>
        )
    }
}



export default Post;


