import { Menu } from "antd";
import { AppstoreOutlined, DashboardOutlined, ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";

function SiderMenu() {
    const location = useLocation();
    const items = [
        {
            key: 'dashboard',
            label: 'Dashboard',
            icon: <DashboardOutlined />,
            children: [
                {
                    key: '/',
                    label: <Link to='/' >Home</Link>
                },
                {
                    key: '/crm',
                    label: <Link to='/crm'>CRM</Link>
                },
                {
                    key: '/ecommerce',
                    label: <Link to='/ecommerce'>E-commerce</Link>
                },
                {
                    key: '/projects',
                    label: 'Projects'
                }
            ]
        },
        {
            key: '/booking-room',
            label: <Link to='/booking-room'>BookingRoom</Link>,
            icon: <ShoppingCartOutlined />
        },
        {
            key: '/room-manager',
            label: <Link to='/room-manager'>Room Manager</Link>,
            icon: <UnorderedListOutlined />
        }
        ,
        {
            key: '/apps',
            label: 'Apps',
            icon: <AppstoreOutlined />,
            children: [
                {
                    key: 'chat',
                    label: 'Chat'
                },
                {
                    key: 'file-manager',
                    label: 'File Manager'
                },
                {
                    key: 'mail',
                    label: 'Mail'
                },
                {
                    key: 'projects',
                    label: 'Projects',
                    children: [
                        {
                            key: 'project-list',
                            label: 'Project List'
                        },
                        {
                            key: 'project-details',
                            label: 'Project Details'
                        }
                    ]
                },
                {
                    key: 'e-commerce',
                    label: 'E-commerce',
                    children: [
                        {
                            key: 'orders-list',
                            label: 'Orders List'
                        },
                        {
                            key: 'produtcts',
                            label: 'Products'
                        },
                        {
                            key: 'products-list',
                            label: 'Products List'
                        }
                    ]
                }
            ]
        }
    ]
    return (
        <>
            <Menu mode='inline' defaultOpenKeys={['dashboard']} defaultSelectedKeys={location.pathname} items={items} />
        </>
    )
}

export default SiderMenu;