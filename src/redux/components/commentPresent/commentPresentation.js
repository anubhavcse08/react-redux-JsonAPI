import React, { Component } from 'react';
import '../userPresentation.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {commentDetails} from '../../actions';
import {bindActionCreators} from 'redux';
import PostCommentFromUser from '../postCommentFromUser/postCommentFromUser';
import Collapsible from 'react-collapsible';
import '../postCommentFromUser/postCommentFromUser.css';

class CommentPresentational extends Component {
    constructor() {
        super()
        // this.renderUser = this.renderUser.bind(this)
    }
    componentWillMount() {
        this.props.commentDetails(this.props.id);
    }

    render() {
       console.log(this.props)
        const renderUser = (users) => {
                return ( users && users.length > 0 ?
                    users.map((user, index) => {
                        return <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.postId}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.body}</td>
                                </tr>
                }):null)
        }
        const rendering = (users) => {
            return users && users.length > 0 ?
                users.map((user, index) => {
                    
                    return(
                        
                        <div key={index}>
                            <div className="collapseBox">
                                <Collapsible trigger={<h5>{user.id}. {user.name}</h5>}>
                                    <div className="collapsingData">
                                        <p>{user.body}</p>
                                    </div>
                                </Collapsible>
                            </div>
                            <hr></hr>
                        </div>)
                }):null
        }
        
       

        return(
            <div>
                <div className="userDetails">
                    <hr></hr><h1>User Post Comments Details</h1><hr></hr>
                </div>
                <div className="container">
                <h2>{this.props.id}</h2>
                {rendering(this.props.data)}
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th><b>Id</b></th>
                                <th>PostID</th>
                                <th>Name</th>
                                <th>EmailID</th>
                                <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {renderUser(this.props.data)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        data: state.users.commentReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        commentDetails
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentPresentational)