import { Badge, Button, Card, Col, Form, Input, InputNumber, Row, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import getUtilsRoom from "../../services/utilsRoomService";

import {createRoom} from '../../services/utilsRoomService/roomService'
import { CloseOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


function CreateRoom() {
    const [form] = Form.useForm();
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getUtilsRoom();
            if (res) {
                setOptions(res);
            }
        }
        fetchApi();
    }, []);

    const handleFinish = async (values) => {
        const res = await createRoom(values);
        if (res) {
            form.resetFields();
        }
        // console.log(res);
    }

    return (
        <>
            {/*  */}
            <Badge.Ribbon color="#fff" text={<Link to='/room-manager' style={{ color: '#000'}}><CloseOutlined /></Link>}>
                <Card >
                    <h2>Create New Room</h2>
                    <Form onFinish={handleFinish} initialValues={{
                            quantityBed: 1,
                            quantityPeople: 1,
                        }}
                        layout='vertical'
                        form={form}
                    >
                        <Row gutter={[20]}>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                                <Form.Item label='Ten phong:' name='tenphong'
                                    rules={[{required: true, message: 'bat buoc'}]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            
                            <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                                <Form.Item label='So luong nguoi' name='quantityPeople'>
                                    <InputNumber min={1} style={{width:'100%'}} />
                                </Form.Item>
                            </Col>

                            <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
                                <Form.Item label='So luong giuong' name='quantityBed'>
                                    <InputNumber min={1} style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item label='Tien ich' name='ultis'>
                                    <Select  mode='multiple' options={options} />
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item label='Mo ta' name='description'>
                                    <TextArea />
                                </Form.Item>
                            </Col>
                            
                            <Col span={6} sm={24} xs={24}>
                                <Form.Item label='Trang Thai' name='status' valuePropName='checked'>
                                    <Switch
                                        checkedChildren='con phong'
                                        unCheckedChildren='het phong'
                                    />
                                </Form.Item>
                            </Col>
                                
                            <Col span={6} sm={24} xs={24}>
                                <Form.Item label='Phong VIP' name='vip'  valuePropName='checked'>
                                    <Switch checkedChildren='VIP' unCheckedChildren='Normal' />
                                </Form.Item>
                            </Col>
                        </Row>
                        
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>Tao moi</Button>
                            <Button className='ml-10' onClick={() => form.resetFields()}>Reset</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Badge.Ribbon>
        </>
    )
}

export default CreateRoom;