import React, { Component } from 'react';
import './userPresentation.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

class UserPresentational extends Component {

    render() {
        console.log("what is my props : ",this.props);
       const proping = this.props.data;
        const renderUser = (users) => {
            return users && users.length > 0 ?
                users.map((user, index) => {
                  
                        return ( <tr key={index}>
                                <td>{user.id}</td>
                                <Link to={{
                                pathname: `/${user.id}/posts`,
                                state: { userName: user.name }
                            }}
                                
                                key={user.id} userName={user.name}>
                                    <td>{user.name}</td>
                                </Link>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                                <td>{user.address.city}</td>
                            </tr>)
                }):null
        }

        return(
            <div>
                <div className="userDetails">
                    <h1>User Details</h1>
                </div>
                <div className="container">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th><b>Id</b></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone no.</th>
                                <th>Website</th>
                                <th>Company name</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(this.props.data)} */}
                            {renderUser(proping)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserPresentational