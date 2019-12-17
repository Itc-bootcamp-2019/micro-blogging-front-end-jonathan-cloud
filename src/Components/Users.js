import React from "react";

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            users: []
        }
    }

    addUser = (e) => {
        this.setState({user: e.target.value})

    }

    handleSubmit = (user) => {


        this.setState((prevState) => {
            const newUsers = prevState.users
            newUsers.push(user)
            return { users: newUsers }
        })
        console.log(this.state.users)
        alert(this.state.user + " was created")

    }

    render() {
        debugger
        const {user, users} = this.state
        return (
            <div>
             <input type="text" value={user} onChange={this.addUser.bind(this)}/>
            <button type="submit" onClick={()=>this.handleSubmit(user)}>add user</button>
                {users.map(user => <p>{user} was created</p>)}
            </div>
        )
    }
}

export default Users