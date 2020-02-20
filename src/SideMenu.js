import React from 'react';
import { Menu, Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;


export default function SideMenu() {
    return (
        <Sider width={250} style={{ background: '#fff' }}>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="car" />
                            Japanese Motorcycles
        </span>
                    }
                >
                    <Menu.Item key="1"><Link to="/brands">Brands</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="3">Suzuki</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="car" />
                            European Motorcycles
        </span>
                    }
                >
                    <Menu.Item key="5">BMW</Menu.Item>
                    <Menu.Item key="6">Ducati</Menu.Item>
                    <Menu.Item key="7">Husqvarna</Menu.Item>
                    <Menu.Item key="8">KTM</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                        <span>
                            <Icon type="car" />
                            American Motorcycles
        </span>
                    }
                >
                    <Menu.Item key="9">Harley-Davidson</Menu.Item>
                    <Menu.Item key="10">Indian</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

