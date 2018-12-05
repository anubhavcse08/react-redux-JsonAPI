import React from 'react';
import Collapsible from 'react-collapsible';
import './postCommentFromUser.css';
import { Link } from 'react-router-dom';
import CommentPresentational from '../commentPresent/commentPresentation';

class PostCommentFromUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
    
      _onButtonClick() {
        this.setState({
          showComponent: true,
        });
      }
    render() {
        const proping = this.props.fromPostPresent
        const ppppp = this.props;
        console.log('visiblity: ',ppppp);
        const rendering = (users) => {
            return users && users.length > 0 ?
                users.map((user, index) => {
                    
                    return(
                        
                        <div key={index}>
                            <h1>{this.props.id}</h1>
                            <div className="collapseBox">
                                <Collapsible trigger={<h5>{user.id}. {user.title}</h5>} >
                                    <div className="collapsingData">
                                        <p>{user.body}</p>
                                        <div>
                                            <Collapsible trigger={ <div className="commentBtn">
                                            {/* pathname:`/posts/${user.id}/comments`, */}
                                                    <Link to={{state: { userId: user.id }}} key={user.id}>
                                                        <button onClick={this._onButtonClick}>View Comments</button>
                                                    </Link>

                                                </div>
                                                }>
                                                <hr></hr>
                                                
                                                <div className="collapsingComment">
                                                {this.state.showComponent ?
                                                    <CommentPresentational  id={proping.location.state.userId}/> :null
                                                }
                                                </div>
                                            </Collapsible>
                                        </div>
                                    </div>
                                </Collapsible>
                            </div>
                            <hr></hr>
                        </div>)
                }):null
        }

        return (
            <div className="container">
                <div className="userName">
                    <h3>Author: {proping.location.state.userName}</h3>
                </div>
                <hr></hr>
                <div>
                    {rendering(proping.data)}
                </div>
                
            </div>
        )
    }
}

export default PostCommentFromUser