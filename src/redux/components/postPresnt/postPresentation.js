import React, { Component } from 'react';
import '../userPresentation.css'
import PostCommentFromUser from '../postCommentFromUser/postCommentFromUser';

class PostPresentational extends Component {
    
    render() {
        
        return(
            <div>
                <div className="userDetails">
                    <h1>User Post With Comments Detail</h1>
                </div>
                <br></br>
                <PostCommentFromUser fromPostPresent ={this.props} />
            </div>
        )
    }
}

export default PostPresentational