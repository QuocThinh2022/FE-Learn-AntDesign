import { Badge, Button, Table } from "antd";
import { useEffect, useState } from "react";
import { getListRoom } from "../../services/utilsRoomService/roomService";
import { DeleteFilled, DeleteOutlined } from "@ant-design/icons";

function RoomListTable() {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getListRoom();
            setRooms(res);
        }
        fetchApi();
    }, [])

    const columns = [
        {
            title: 'Ten phong',
            dataIndex: 'tenphong',
            key: 'tenphong',
        },
        {
            title: 'So phong',
            dataIndex: 'quantityBed',
            key: 'quantityBed',
        },
        {
            title: 'So nguoi',
            dataIndex: 'quantityPeople',
            key: 'quantityPeople',
        },
        {
            title: 'Loai phong',
            dataIndex: 'vip',
            key: 'vip',
            render: (text, record, index) => (
                <>
                    {record.vip ? (
                        <Badge text='VIP' color='purple' />
                    ):(
                        <Badge text='thuong' color='gray' />
                    )}
                </>
            )
        },
        {
            title: 'Trang thai',
            dataIndex: 'status',
            key: 'status',
            render: (text, record, index) => (
                <>
                    {record.status ? (
                        <Badge text='Con Phong' color='green' />
                    ): (
                        <Badge text='Het phong' color='red' />
                    )}
                </>
            )
        },
        {
            title: 'Hanh dong',
            key: 'actions',
            render: (text, record, index) => (
                <>
                    <Button danger type='text' icon={<DeleteFilled  />} ></Button>
                </>
            )
        }
    ]

    return (
        <>
            <Table dataSource={rooms} columns={columns} rowKey='id' />
        </>
    )
} 

export default RoomListTable;