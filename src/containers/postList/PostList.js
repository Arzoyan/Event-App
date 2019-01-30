import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post/post';


class PostList extends Component {

  constructor(props) {
    super(props)


  }



  render() {
    console.log('this props ***********',this.props);
    const { article,postId } = this.props;

      let posts=[]
     

    return (

      <div>
        {
          article && article.map((post, index) => {

            return (
              <Post post={post} postId={postId} key={'0' + index} />
            )
          })

        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  article: state.userPosts,
  postId:state.postId
})

PostList = connect( 
  mapStateToProps
)(PostList)
export default PostList;


