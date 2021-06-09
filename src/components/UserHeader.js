import React from 'react';
import {connect} from 'react-redux';

class UserHeader extends React.Component {
    render() {
        const {user} = this.props;

        if (!user) {
            return <div>Loading...</div>
        }

        return <div>{user.name}</div>
    }
}

// Map state to props is really for putting any logic that we don't want to have
// inside of the component itself
// This allows our components to be much more reusable
const mapStateToProps = (state, ownProps) => {
    return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader);