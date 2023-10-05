import { Checkbox, Col, Row, DatePicker, Input, Radio, Select, Button } from 'antd';
import { useState } from 'react';
import dayjs from 'dayjs';


const { RangePicker } = DatePicker;
const { TextArea } = Input;

function BookingRoom() {
    const [dataForm, setDataForm] = useState([]);
    
    const handleChangeServices = (e) => {
        const newState = {
            ...dataForm,
            services: e
        }
        setDataForm(newState);
    }

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');

        // Can not select days before today
        // return current && current < dayjs().subtract(1, 'day');
    }

    const handleChangeDate = (date, dateString) => {
        const newState = {
            ...dataForm,
            date: dateString
        }
        setDataForm(newState);
    }
    

    const handleChangeInput = (e) => {
        const newState = {
            ...dataForm,
            [e.target.name]: e.target.value
        }

        setDataForm(newState);
    }

    const handleChangeGift = (e) => {
        const newState = {
            ...dataForm,
            [e.target.name]: e.target.value
        }

        setDataForm(newState);
    }

    const handleChangeGift2 = (e) => {
        const newState = {
            ...dataForm,
            gift2: e
        }
        setDataForm(newState);
    }
    
    const handleSubmit = (e) => {
        console.log(dataForm);
    }


    return (
        <>
            <Row gutter={[15,15]}>
                <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={24}>
                    <p>Ho ten:</p>
                    <Input onChange={handleChangeInput} name='fullName' placeholder='Vi du: Le Van A' />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={24}>
                    <p>SDT:</p>
                    <Input onChange={handleChangeInput} name='numberPhone' placeholder='0123456789' />
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                    <p>Email:</p>
                    <Input onChange={handleChangeInput} name='email' placeholder='pethinh@gmail.com' />
                </Col>
                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={12} >
                    <p>So nguoi:</p>
                    <Input type='number' onChange={handleChangeInput} name='numberPeople' min={1} max={60} defaultValue={1} />
                </Col>
                <Col xxl={4} xl={4} lg={4} md={4}  sm={4} xs={12}>
                    <p>So phong:</p>
                    <Input type='number' onChange={handleChangeInput} name='numberRoom' min={1} max={20} defaultValue={1} />
                </Col>
                <Col xxl={16} xl={16} lg={16} md={16}  sm={16} span={24}>
                    <p>Chon ngay:</p>
                    <RangePicker format='DD/MM/YYYY' disabledDate={disabledDate} onChange={handleChangeDate} style={{width: "100%"}} />
                     
                </Col>
                <Col span={24}>
                    <p>Dich vu them:</p>
                    <Checkbox.Group onChange={handleChangeServices} >
                        <Checkbox value='Thue xe may'>Thue xe may</Checkbox>
                        <Checkbox value='Thue oto 4 cho'>Thue oto 4 cho</Checkbox>
                        <Checkbox value='Thue oto 9 cho'>Thue oto 9 cho</Checkbox>
                        <Checkbox value='Thue oto 16 cho'>Thue oto 16 cho</Checkbox>
                     </Checkbox.Group>
                </Col>
                <Col span={24}>
                    <p>Qua tang:</p>
                    <Radio.Group onChange={handleChangeGift} name='gift' >
                        <Radio value="Ao">Ao</Radio>
                        <Radio value='Kem chong nang'>Kem chong nang</Radio>
                        <Radio value='Kinh mat'>Kinh mat</Radio>
                        <Radio value='Sua rua mat'>Sua rua mat</Radio>
                    </Radio.Group>
                </Col>
                <Col span={24}>
                    <p>Qua tang 2</p>
                    <Select options={[
                            { value: 'Ve xem phim', label: 'Ve xem phim' },
                            { value: 'Ve xem nhac', label: 'Ve xem nhac' },
                            { value: 'Ve vui choi', label: 'Ve vui choi' },
                            { value: 'Ve an uong', label: 'Ve an uong' }
                        ]}
                        onChange={handleChangeGift2}
                        style={{width: '100%'}}
                    />
                </Col>
                <Col span={24}>
                    <p>Note:</p>
                    <TextArea onChange={handleChangeInput} name='note' showCount placeholder='Note at here' />
                </Col>
                <Button  onClick={handleSubmit}>Send</Button>
            </Row>
        </>
    )
}

export default BookingRoom;