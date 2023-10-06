import { Badge, Button, Popconfirm, Table, Tag, Tooltip, notification } from "antd";
import { useEffect, useState } from "react";
import { deleteRoom, getListRoom } from "../../services/utilsRoomService/roomService";
import { DeleteFilled, DeleteOutlined, DollarOutlined, EditOutlined } from "@ant-design/icons";
import EditRoom from "./EditRoom";

function RoomList() {

    const [rooms, setRooms] = useState([]);
    const [api, contextHolder] = notification.useNotification();

    const fetchApi = async () => {
        const res = await getListRoom();
        setRooms(res.reverse());
    }

    useEffect(() => {
        fetchApi();
    }, [])

    function handleReload() {
        fetchApi();
    }

    async function handleDelete(record) {
        const res = await deleteRoom(record.id);
        if (res) {
            handleReload();
            api['success']({
                message: 'Xoa phong thanh cong!',
                description: `Da xoa phong: ${record.tenphong}`
            })
        } else {
            api['error']({
                message: 'Xoa phong that bai!',
                desciption: `Vui long thu lai sau!`
            })
        }
    }

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
                        <Tag color='#531dab' icon={<DollarOutlined />}>VIP</Tag>
                    ):(
                        <Tag color='gray'>thuong</Tag>
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
                    <Tooltip title='Delete Room' placement='left'>
                        <Popconfirm title='Sure to delete?' onConfirm={() => handleDelete(record)}>
                            <Button danger type='text' icon={<DeleteFilled  />} ></Button>
                        </Popconfirm>
                    </Tooltip>
                    
                    <EditRoom record={record} onReload={handleReload} />
                </>
            )
        }
    ]

    return (
        <>
            {contextHolder}
            <Table dataSource={rooms} columns={columns} rowKey='id' />
        </>
    )
} 

export default RoomList;