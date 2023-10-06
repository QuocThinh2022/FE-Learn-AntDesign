import { useEffect, useState } from "react";
import { getListRoom } from "../../services/utilsRoomService/roomService";
import { Badge, Card, Col, Row } from "antd";


function RoomListTable() {
    const [listRooms, setListRooms] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getListRoom();
            if (res) {
                setListRooms(res);
            }
        }
        fetchApi();
    }, [])
    return (
        <>
            <>
                {listRooms.length > 0 && (
                    <Row gutter={[20,20]}>
                        {listRooms.map(item => (
                            <Col xxl={6} xl={6} lg={6} md={8} sm={12} xs={24}  key={item.id}>
                                <Badge.Ribbon text={item.vip ? 'VIP':'Normal'}  color={item.vip ? 'purple':'gray'}>
                                    <Card>
                                        <div>{item.tenphong}</div>
                                        <div>So nguoi: {item.quantityPeople}</div>
                                        <div>So giuong: {item.quantityBed}</div>
                                        <div>
                                            {item.status ? <Badge color='green' text='Con phong' /> : <Badge color='red' text='Het phong' />}
                                        </div>
                                    </Card>
                                </Badge.Ribbon>    
                            </Col>
                        ))}
                    </Row>
                )}
            </>
        </>
    )
}

export default RoomListTable;