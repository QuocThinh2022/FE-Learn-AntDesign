import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, Row } from "antd";
import { Link } from "react-router-dom";
import RoomList from "./RoomList";

function RoomManager() {
    return (
        <>
            <Card  className='mb-20'>
                <h2>Quan ly phong</h2>
                <Link to="/create-room">
                    <Button icon={<PlusOutlined />}>Them moi</Button>
                </Link>
            </Card>
            <RoomList />
        </>
    )
}

export default RoomManager;