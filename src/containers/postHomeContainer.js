import React, {Component} from 'react';
import { connect } from 'react-redux';
import {postDetails} from '../redux/actions';
import {bindActionCreators} from 'redux';
import PostPresentational from '../redux/components/postPresnt/postPresentation';


class PostHomeContainer extends Component {
    componentWillMount() {
        this.props.postDetails(this.props.match.params.id);
    }
    render() {
        
        return(
            <div>
                <PostPresentational {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.users.postReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        postDetails
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostHomeContainer)