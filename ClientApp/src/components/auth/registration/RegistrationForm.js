import React, { Component } from 'react';
import classnames from 'classnames';
import { Redirect } from 'react-router';
import { register } from '../../../actions/authActions';

class RegistrationForm extends Component {
    state = {
        name: '',
        //surname: '',
        //gender: '',
        nick: '',
        telnumber: '',
        email: '',
        password: '',
        //birthdate: '',
        //image: '',
        //description: '',
        errors: { },
        isLoading: false,
        done: false

    }

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors=Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState(
                {
                    [name]: value,
                    errors
                }
            )

        }
        else {
            this.setState(
                { [name]: value })
        }
    }

    handleChange = (e) => {
        this.setStateByErrors(e.target.name, e.target.value);
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        let errors = {};
        if (this.state.name === '') errors.name = "Поле є обов'язковим!"
        if (this.state.email === '') errors.email = "Поле є обов'язковим!"
        if (this.state.telnumber === '') errors.telnumber = "Поле є обов'язковим!"
        if (this.state.password === '') errors.password = "Поле є обов'язковим!"

        const isValid = Object.keys(errors).length === 0
        if (isValid) {
            const { name, email, telnumber, password } = this.state;
            this.setState({ isLoading: true });
            console.log('---SEND DATA state----', { Name: name, Telnumber: telnumber, Password: password });

            register({ Name: name, Telnumber: telnumber, Email:email, Password: password })
                .then(
                    () => this.setState({ done: true }),
                    (err) => this.setState({ errors: err.response.data, isLoading: false })
                );
                

        }
        else {
            this.setState({ errors });
        }

    }

    render() {
        const { errors, isLoading } = this.state;
        console.log('---FormRegister state----', this.state);
        const form = (
            <form onSubmit={this.onSubmitForm}>
                <h1>Registration</h1>

                {
                    !!errors.invalid ?
                        <div className="alert alert-danger">
                            <strong>Помилка!</strong> {errors.invalid}.
                    </div> : ''}

                <div className={classnames('form-group', { 'has-error': !!errors.name })}>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                    {!!errors.name ? <span className="help-block">{errors.name}</span> : ''}
                </div>

                {/* <div className={classnames('form-group')}>
                    <label htmlFor="surname">SurName</label>
                    <input type="text"
                        className="form-control"
                        id="surname"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleChange} />
                </div> */}

                {/* <div className={classnames('form-group', { 'has-error': !!errors.gender })}>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" className="nofocus" id="gender" required>
                        <option value="female"> Female</option>
                        <option value="male"> Male</option>
                    </select>
                    <input type="hidden"
                        className="form-control"
                        id="printgender"
                        name="gendr"
                        value={this.state.gender}
                        onChange={this.handleChange} />
                    {!!errors.gender ? <span className="help-block">{errors.gender}</span> : ''}
                </div> */}
                
                <div className={classnames('form-group')}>
                    <label htmlFor="nick">Nick</label>
                    <input type="text"
                        className="form-control"
                        id="nick"
                        name="nick"
                        value={this.state.nick}
                        onChange={this.handleChange} />
                </div>

                <div className={classnames('form-group', { 'has-error': !!errors.telnumber})}>
                    <label htmlFor="telnumber">Number phone</label>
                    <input type="text"
                        className="form-control"
                        id="telnumber"
                        name="telnumber"
                        value={this.state.telnumber}
                        onChange={this.handleChange} />
                    {!!errors.telnumber ? <span className="help-block">{errors.telnumber}</span> : ''}
                </div>

                <div className={classnames('form-group')}>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange} />
                </div>

                <div className={classnames('form-group', { 'has-error': !!errors.password })}>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange} />
                    {!!errors.password ? <span className="help-block">{errors.password}</span> : ''}
                </div>

                {/* <div className={classnames('form-group')}>
                    <label htmlFor="description">Tell as about yuorself</label>
                    <input type="textarea"
                        className="form-control"
                        id="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange} />
                    
                </div> */}


                <div className="form-group">
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-warning" disabled={isLoading}>Реєструвати <span className="glyphicon glyphicon-saved"></span></button>
                    </div>
                </div>
            </form>

        );
        return (
            this.state.done ?
                <Redirect to="/" /> :
                form 
            );
    }
}



export default RegistrationForm;

