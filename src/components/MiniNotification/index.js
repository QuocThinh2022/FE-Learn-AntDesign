import { BellOutlined, MailOutlined, SyncOutlined, UserAddOutlined, WarningOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";

import './MiniNotification.scss'

function MiniNotification() {
    const listItem = [
        {
            icon: <MailOutlined />,
            title: 'You received a new message',
            time: '8 min ago',
            color: 'blue'
        },
        {
            icon: <UserAddOutlined />,
            title: 'New user registered',
            time: '7 hours ago',
            color: 'green'
        },
        {
            icon: <WarningOutlined />,
            title: 'System Alert',
            time: '8 hours ago',
            color: 'red'
        },
        {
            icon: <SyncOutlined />,
            title: 'You have a new update',
            time: '2 days ago',
            color: 'yellow'
        }
    ]
    const items = listItem.map((item, index) => (
        {
            key: { index },
            label: <div className='notification__item'>
                <div className={'notification__item-icon ' + (item.color ? `notification__item-icon--${item.color}`:'')} >{item.icon}</div>
                <div className='notification__item-info'>
                    <div className='notification__item-title'>{item.title}</div>
                    <div className='notification__item-time'>{item.time}</div>
                </div>
            </div>
        }
    ));


    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                className="notification"
                overlayClassName="notification__dropdown"
                dropdownRender={(menus) => (
                    <>
                        <div className='notification__head'>
                            <span className='notification__head-left'><BellOutlined />
                                <span className='ml-10'>Notification</span>
                            </span>
                            <Button type='link' className="notification__button--link">View All</Button>
                        </div>
                        <div className='notification__body'>{menus}</div>
                    </>
                )}
            >
                <Button className='norification__button' icon={<BellOutlined />}></Button>
            </Dropdown>
        </>
    )
}

export default MiniNotification;