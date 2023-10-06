import { PlusOutlined, TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Button, Card, Row } from "antd";
import { Link } from "react-router-dom";
import RoomList from "./RoomList";
import RoomListTable from "./RoomListTable";
import { useState } from "react";

function RoomManager() {
    const [listed, setListed] = useState(true);

    return (
        <>
            <Card  className='mb-20'>
                <h2>Quan ly phong</h2>
                <Link to="/create-room">
                    <Button icon={<PlusOutlined />}>Them moi</Button>
                </Link>
            </Card>
            <div>
                <Card className="mb-20">
                    {listed ?
                        <TableOutlined onClick={() => setListed(false)} />
                        :
                        <UnorderedListOutlined onClick={() => setListed(true)} />
                    }
                </Card>
                {listed ? <RoomList /> : <RoomListTable />}
            </div>
        </>
    )
}

export default RoomManager;