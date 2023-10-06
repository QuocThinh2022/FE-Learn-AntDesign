import { CloseOutlined, EditOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Col, Form, Input, InputNumber, Modal, Row, Select, Spin, Switch, Tooltip, message, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getUtilsRoom from "../../services/utilsRoomService";
import { updateRoom } from "../../services/utilsRoomService/roomService";

function EditRoom(props) {
    const { record, onReload } = props;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getUtilsRoom();
            if (res) {
                setOptions(res);
            }
        }
        fetchApi();
    }, []);


    function handleOpenModal() {
        form.resetFields();
        setIsOpenModal(true);
    }

    function handleCloseModal() {
        setIsOpenModal(false);
    }

    function handleOk() {
        handleCloseModal();
    }

    function handleCancel() {
        handleCloseModal();
    }

    function handleEdit() {
        handleOpenModal();
    }
    // console.log(record);

    const handleFinish = async (values) => {
        setIsLoading(true);
        const res = await updateRoom(record.id, values);
        if (res) {
            onReload();
            form.resetFields();
            api['success']({
                message: 'Cap nhat thanh cong!',
                description: `Cap nhat thanh cong phong: ${record.tenphong}`
            })
        }
        else {
            api['error']({
                message: 'Cap nhat KHONG thanh cong',
                description: `Cap nhat that bai phong: ${record.tenphong}`
            })
        }
        handleCloseModal();
        setIsLoading(false);
    }

    return (
        <>
            {contextHolder}
            <Tooltip title='Edit Room'>
                <Button onClick={handleEdit} type='text' icon={<EditOutlined />}></Button>
            </Tooltip>
            <Modal title='Edit Room'open={isOpenModal} width={600} onOk={handleOk} onCancel={handleCancel}
                footer={null} maskClosable={false}
            >
                <Spin tip='Loading...' spinning={isLoading}>
                    <Form onFinish={handleFinish} initialValues={record}
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
                            <Button type='primary' htmlType='submit'>Update</Button>
                            <Button className='ml-10' onClick={() => form.resetFields()}>Reset</Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </Modal>
        </>
    )
}

export default EditRoom;