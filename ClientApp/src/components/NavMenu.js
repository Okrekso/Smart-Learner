import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Glyphicon, Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavMenu.scss";
import { logout } from "../actions/authActions";

class NavMenu extends Component {
    state = {};
    handleClick = (e) => {
        this.props.logout();
    }
    render() {
        const { isAuthenticated, user } = this.props.auth;
        console.log(isAuthenticated);

        const userLinks = (
            <LinkContainer to={"/profile"}>
                <NavItem>
                    <Glyphicon glyph="th-list" /> {user.name}
                </NavItem>
            </LinkContainer>
        );

        const guestLinks = (
            <LinkContainer to={"/login"}>
                <NavItem>
                    <Glyphicon glyph="th-list" /> Login Form
                </NavItem>
            </LinkContainer>
        );
        const logoutBtn = (
            <Link className="navbar-brand logoutBtn" to={"/"} onClick={this.handleClick}>Logout</Link>
        );
        const registerBlock = (
            <LinkContainer to={"/register"}>
                <NavItem>
                    <Glyphicon glyph="user" /> Registration
                </NavItem>
            </LinkContainer>
        );
        return (
            <Navbar inverse fixedTop fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={"/"}>WebSiteCore</Link>
                    </Navbar.Brand>
                    {isAuthenticated && logoutBtn}
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={"/"} exact>
                            <NavItem>
                                <Glyphicon glyph="home" /> Home
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={"/counter"}>
                            <NavItem>
                                <Glyphicon glyph="education" /> Counter
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={"/fetchdata"}>
                            <NavItem>
                                <Glyphicon glyph="th-list" /> Fetch data
                            </NavItem>
                        </LinkContainer>

                        {isAuthenticated ? userLinks : guestLinks}

                        <LinkContainer to={"/users"}>
                            <NavItem>
                                <Glyphicon glyph="th-list" /> Users
                            </NavItem>
                        </LinkContainer>

                        <LinkContainer to={"/tables"}>
                            <NavItem>
                                <Glyphicon glyph="th-list" /> Tables
                            </NavItem>
                        </LinkContainer>
                                                
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, {logout}, null, {pure: false})(NavMenu);