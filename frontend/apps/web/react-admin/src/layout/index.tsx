import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Col, Dropdown, Layout, Menu, Row, Space, Tag, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router';
import './index.less'
const { Header, Sider, Content } = Layout;

const LayoutPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className='w-full h-full'>
            <Sider className='min-h-screen' trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}
                    items={[
                        {
                            key: '/dashboard',
                            icon: <UserOutlined />,
                            label: '工作台',
                        },
                        {
                            key: '/statistics',
                            icon: <VideoCameraOutlined />,
                            label: '数据统计',
                        },
                        {
                            key: '/order',
                            icon: <UploadOutlined />,
                            label: '订单管理',
                        },
                        {
                            key: '/setmeal',
                            icon: <UploadOutlined />,
                            label: '套餐管理',
                        },
                        {
                            key: '/dish',
                            icon: <UploadOutlined />,
                            label: '菜品管理',
                        },
                        {
                            key: 'vcategory',
                            icon: <UploadOutlined />,
                            label: '分类管理',
                        },
                        {
                            key: '/employee',
                            icon: <UploadOutlined />,
                            label: '员工管理',
                        },
                    ]}
                    onClick={(e) => navigate(e.key)}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Row className='mr-6'>
                        <Col span={12}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                            <Tag color='green'>营业中</Tag>
                        </Col>
                        <Col span={12} className='!flex justify-end'>
                            <Space>
                                <Button icon={<SettingOutlined />} type='text'>设置营业状态</Button>
                                <Dropdown menu={{
                                    items: [
                                        {
                                            key: '1',
                                            label: '修改密码',
                                        },
                                        {
                                            key: '2',
                                            label: '退出登录',
                                            onClick: () => {
                                                navigate('/login');
                                            },
                                        },
                                    ],
                                }}
                                >
                                  <Space>管理员  <Avatar icon={<UserOutlined />} size={32}></Avatar></Space>
                                </Dropdown>
                            </Space>
                        </Col>
                    </Row>

                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutPage;