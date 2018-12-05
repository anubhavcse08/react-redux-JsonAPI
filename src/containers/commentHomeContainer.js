import React, {Component} from 'react';

import CommentPresentational from '../redux/components/commentPresent/commentPresentation';

class CommentHomeContainer extends Component {
    
    render() {
        // console.log(this.props.data)
        return(
            <div>
                <CommentPresentational id={this.props.match.params.id}/>
            </div>
        )
    }
}

export default CommentHomeContainer;