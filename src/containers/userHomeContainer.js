import React, {Component} from 'react';
import { connect } from 'react-redux';
import {userDetails} from '../redux/actions';
import {bindActionCreators} from 'redux';
import UserPresentational from '../redux/components/userPresentation';

class UserHomeContainer extends Component {
    componentWillMount() {
        this.props.userDetails();
    }
    render() {
        console.log(this.props)
        return(
            <div>
                <UserPresentational {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("data : ",state);
    return {
        data: state.users.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        userDetails
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeContainer)