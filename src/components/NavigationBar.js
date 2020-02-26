import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
// import jwtDecode from 'jwt-decode';
import { connect } from "react-redux";

const { Header } = Layout;

class NavigationBar extends React.Component {
    render() {
        const { username } = this.props.user;
        return (
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
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
        user: state.auth.user
    };
};

export default connect(mapStateToProps)(NavigationBar);