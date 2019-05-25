import React, { Component } from 'react';
import { connect } from "react-redux";
//import { login } from "../../../actions/authActions";

class CookForm extends Component {

    state = {
        Dish: 0,
        errors: {
            
        },
        done: false
    }

    dish = {

    }
    
    render() {
        const FormReadyToWork = (
            <p>Ready To Work</p>
            );
        const FormWaitingForAnOrder = (
            <p>Waiting For An Order</p>
            );

        return (
            this.state.done ?
                FormWaitingForAnOrder :
                FormReadyToWork
        );
    }
}


export default connect()(CookForm);