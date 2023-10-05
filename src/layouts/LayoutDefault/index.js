import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Outlet } from 'react-router-dom';

import logo from '../../images/logo.png';
import logoFold from '../../images/logo-fold.png';
import './LayoutDefault.scss';
import MiniNotification from "../../components/MiniNotification";
import SiderMenu from "../../components/SiderMenu";


function LayoutDefault() {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    }

    return (
        <>
            <Layout className='layout'>
                <header className='layout__header'>
                    <div className={'layout__logo' + (collapsed ? ` layout__logo--fold` : '')}>
                        <img src={collapsed ? logoFold : logo} alt='Logo' />
                    </div>

                    <div className='layout__nav'>
                        <span className='layout__icon-collapse' onClick={handleCollapse}>
                            {collapsed ? (<MenuUnfoldOutlined />) : (<MenuFoldOutlined />)}
                        </span>
                        <span className='layout__nav--right'>
                            <MiniNotification />
                        </span>
                    </div>
                </header>

                <Layout>
                    <Sider breakpoint='lg' onBreakpoint={(broken)=>{setCollapsed(broken)}} collapsed={collapsed} className='layout__sider' theme='light'>
                        <SiderMenu />
                    </Sider>
                    <Content className={'layout__content ' + (collapsed ? `layout__content--full`:'')}>
                        <Outlet />
                    </Content>
                </Layout>

                <footer className={'layout__footer ' + (collapsed ? `layout__footer--full`:``)}>
                    <div className='layout__footer__content'>
                        <p>Copyright &copy; 2018 Theme_Nate. All rights reserved.</p>
                        <span>
                            <a href="/">Term & Conditions</a>
                            <a href="/">Privacy & Policy</a>
                        </span>
                    </div>
                </footer>
            </Layout>
        </>
    )
}

export default LayoutDefault;