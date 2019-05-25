import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Col, Clearfix } from 'react-bootstrap';
import semen from '../../images/naturo-monkey-selfie.jpg';
import './UserProfile.scss';
import axios from 'axios';

class UserProfile extends Component{
    state = {
        profile: []
      }
    componentDidMount = () => {
        axios.get('api/user/profile').then(res => {
            const profile = res.data;
            console.log(profile);
            this.setState({ profile });
          });
    }
    printField = (key, value) => {
        return (<p><b>{key}:</b> {value}</p>)
    }
    render() { 
        const { isAuthenticated } = this.props.auth;
        const userProfile = (
            <React.Fragment>
                {this.printField("Name", this.state.profile.name)}
                {this.printField("Email", this.state.profile.email)}
                {this.printField("Phone", this.state.profile.phone)}
            </React.Fragment>
        );
        const clientProfile = (
            <React.Fragment>
                {this.printField("Description", this.state.profile.clientDescription)}
                {this.printField("Discount", this.state.profile.clientDiscount)}
                {this.printField("Nick", this.state.profile.clientNick)}
            </React.Fragment>
        );
        const waiterProfile = (
            <React.Fragment>
                {this.printField("Description", this.state.profile.waiterDescription)}
                {this.printField("Experience", this.state.profile.waiterExperience)}
                {this.printField("Nick", this.state.profile.waiterNick)}
                {this.printField("Payment", this.state.profile.waiterPayment)}
            </React.Fragment>
        );
        const cookerProfile = (
            <React.Fragment>
                {this.printField("Experience", this.state.profile.cookerExperience)}
                {this.printField("Payment", this.state.profile.cookerPayment)}
                {this.printField("Specialization", this.state.profile.cookerSpecialization)}
                {this.printField("Qualification", this.state.profile.cookerQualification)}
            </React.Fragment>
        );
        const managerProfile = (
            <React.Fragment>
                {this.printField("Experience", this.state.profile.managerExperience)}
                {this.printField("Quantity Team", this.state.profile.managerQuantityTeam)}
            </React.Fragment>
        );
        const chiefProfile = (
            <React.Fragment>
                
            </React.Fragment>
        );
        if(isAuthenticated){
            return ( 
                <React.Fragment>
                    <Clearfix>
                        <h1>Профіль користувача</h1>
                    </Clearfix>
                    <Clearfix className="user-profile">
                        <Col sm={2}>
                            <Image className="userImage" src={semen} circle />
                        </Col>
                        <Col sm={10}>
                            {userProfile}
                            {this.state.profile.type==="client" && clientProfile}
                            {this.state.profile.type==="waiter" && waiterProfile}
                            {this.state.profile.type==="cooker" && cookerProfile}
                            {this.state.profile.type==="manager" && managerProfile}
                            {this.state.profile.type==="chief" && chiefProfile}
                        </Col>
                    </Clearfix>
                </React.Fragment>
            );
        }
        else{
            return ( 
                <h1>Ви не авторизовані!</h1>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps)(UserProfile);;