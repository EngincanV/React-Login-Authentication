import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import jwtDecode from 'jwt-decode';

const { Header } = Layout;

const userInfo = state => {
    const token = localStorage.getItem("jwtToken");
    if(token) {
        return jwtDecode(token);
    }
    else 
        return state.auth.user;
}

class NavigationBar extends React.Component {
    render() {
        const { username } = this.props.user;
        return (
            <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }} >
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    { username ? <Menu.Item style={{ float: "right" }} key="2"><Link to="/account/login">Logout - { username }</Link></Menu.Item> : <Menu.Item style={{ float: "right" }} key="2"><Link to="/account/login">Login</Link></Menu.Item> }
                    <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
};

const mapStateToProps = state => {
    return {
        user: userInfo(state)
    };
};

export default connect(mapStateToProps)(NavigationBar);