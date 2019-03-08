import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {
            friend: {
                id: '',
                name: '', 
                age: '',
                email: ''
            }
        }
    }

    handleChange = e => {
        e.persist();
        this.setState(prevState => ({ 
            friend: {
                ...prevState.friend,
                [e.target.name]: e.target.value
            }
    }));
    }
    

    submitHandler = e => {
        this.props.addFriend(e, this.state.friend);
        this.setState({
            friend: {
                id: '',
                name: '', 
                age: '',
                email: ''
            }

        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h5>Name</h5>
                <input
                    type="text"
                    value={this.state.friend.name}
                    name="name"
                    placeholder="Name"
                    onChange={this.handleChange}
                />
                 <h5>Email</h5>
                <input
                    type="text"
                    value={this.state.friend.email}
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                />
                 <h5>Age</h5>
                <input
                    type="text"
                    value={this.state.friend.age}
                    name="age"
                    placeholder="Age"
                    onChange={this.handleChange}
                />
                <h5>ID</h5>
                <input
                    type="text"
                    value={this.state.friend.id}
                    name="id"
                    placeholder="ID"
                    onChange={this.handleChange}
                />
                <div>
                    <button onClick={this.submitHandler}>Submit</button>
                </div>
            </form>
        )
    }

}

export default Form;