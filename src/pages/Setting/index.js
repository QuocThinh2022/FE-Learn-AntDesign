import { Tabs } from "antd";
import SettingAccount from "./SettingAccount";
import SettingNetwork from "./SettingNetwork";
import SettingNotification from "./SettingNotification";

function Setting() {

    const items = [
        {
            key: '1',
            label: 'Account',
            children: <SettingAccount />
        },
        {
            key: '2',
            label: 'Network',
            children: <SettingNetwork />
        },
        {
            key: '3',
            label: 'Notification',
            children: <SettingNotification />
        }
    ]

    return (
        <>
            <h2>Setting</h2>
            <Tabs items={items} />
        </>
    )
}

export default Setting;