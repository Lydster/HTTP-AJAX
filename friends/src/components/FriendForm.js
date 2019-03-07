import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '', 
            age: ''
        }
    }

    handleChangesName = e => {
        this.setState({ [e.target.name]: e.target.value});
        console.log(e.target.value)
    }

    handleChangesEmail = e => {
        this.setState({ [e.target.name]: e.target.value});
        console.log(e.target.value)
    }

    handleChangesAge = e => {
        this.setState({ [e.target.name]: e.target.value});
        console.log(e.target.value)
    }


    submitHandler = e => {
        this.setState({ })
    }

    render() {
        return (
            <form >
                <h5>Name</h5>
                <input
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChangesName}
                />
                 <h5>Email</h5>
                <input
                    type="text"
                    value={this.state.email}
                    name="email"
                    onChange={this.handleChangesEmail}
                />
                 <h5>Age</h5>
                <input
                    type="text"
                    value={this.state.age}
                    name="age"
                    onChange={this.handleChangesAge}
                />
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }

}

export default Form;