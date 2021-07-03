import React, { Component } from 'react';
class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }
    state = this.initialState;
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    };
    submitForm = () => {
        // 传递参数
        this.props.handleSubmit(this.state);
        // 将状态重置为初始状态，以在提交后清除表单
        this.setState(this.initialState);
    }
    render() {
        const { name, job } = this.state;
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}
export default Form;