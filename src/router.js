import React from 'react';
import {Switch, Route} from 'react-router-dom'
import UserHome from './redux/components/userHome';
import PostHome from './redux/components/postHome';
import CommentHome from './redux/components/commentHome';

const routes = () => {
    return (
        <Switch>
            <Route path="/:id/posts" exact component={PostHome} />
            <Route path="/posts/:id/comments" exact component={CommentHome} />
            <Route path="/" exact component={UserHome}/>
        </Switch>
    )
}

export default routes