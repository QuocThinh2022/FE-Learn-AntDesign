import { Carousel, Col, Collapse, Image, QRCode, Rate, Row } from 'antd';
import Statistic from '../../components/Statistic';
import { DollarOutlined, LineChartOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import CardItem from '../../components/CardItem';

import { useEffect, useState } from 'react';
import { getQuestions } from '../../services/questionsService';

const { Panel } = Collapse;

function Home() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await getQuestions();
            setData(res);
        }
        fetchApi();
    }, [])


    return (
        <>
            <h2>Rate</h2>
            <Rate onChange={(value) => console.log(value)} allowHalf />

            <h2>QR Code</h2>
            <QRCode value='https://daca.vn/' />

            <h2>Carousel</h2>
            <Row gutter={[20,20]}>
                <Col xxl={6} xl={6} lg={8} md={12} sm={24} xs={24} >
                    <Carousel autoplay  className="mb-20">
                        <div className='carousel__item'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlP7Oq-JiWisJQ8c4wJZyIq3gCqimg5AA1NO2H9xL3aXerTX16pvlGorZfj7Kr1NDwCsQ&usqp=CAU' />
                        </div>
                        <div className='carousel__item' >
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0Px8GC4cHI7FraHN-gXZiBJ9GZn_nhvmuPCSF3TRulBTQGMOuWq9KyNLwDrAYoazD1w&usqp=CAU' />
                        </div>
                        <div className='carousel__item' >
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtpvJW4gwmPOE_Qe3teMhsDvzgNVREzLa510B-Cv1uR9rm96ASp7isKltGYxQ-INANYE&usqp=CAU' />
                        </div>
                    </Carousel>
                </Col>
            </Row>

            <h2>Image</h2>
            <div>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlP7Oq-JiWisJQ8c4wJZyIq3gCqimg5AA1NO2H9xL3aXerTX16pvlGorZfj7Kr1NDwCsQ&usqp=CAU' />
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU0Px8GC4cHI7FraHN-gXZiBJ9GZn_nhvmuPCSF3TRulBTQGMOuWq9KyNLwDrAYoazD1w&usqp=CAU' />
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtpvJW4gwmPOE_Qe3teMhsDvzgNVREzLa510B-Cv1uR9rm96ASp7isKltGYxQ-INANYE&usqp=CAU' />
            </div>

            <Collapse accordion expandIconPosition='end' defaultActiveKey='1' className="mb-20">
                {data.length > 0 && data.map(item => (
                    <Panel header={item.question} key={item.id}>
                        <p>{item.answers[item.correctAnswer]}</p>
                    </Panel>
                ))}
            </Collapse>

            <Row gutter={[20,20]} className="mb-20"> 
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem>
                        <Statistic icon={<DollarOutlined />} value='$23,523' label='Profit' color='blue' />
                    </CardItem>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem>
                        <Statistic icon={<LineChartOutlined />} value='+17.21%' label='Growth' color='green' />
                    </CardItem>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem>
                        <Statistic icon={<ProfileOutlined />} value='3,685' label='Orders' color='yellow' />
                    </CardItem>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem>
                        <Statistic icon={<UserOutlined />} value='1,832' label='Customers' color='purple' />
                    </CardItem>
                </Col>
            </Row>

            <Row gutter={[20, 20]} className="mb-20">
                <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Total Revenue
                        </div>
                    </CardItem>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Customers
                        </div>
                    </CardItem>
                </Col>
            </Row>

            <Row gutter={[20, 20]} className="mb-20">
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            $17,267
                        </div>
                    </CardItem>
                </Col>
                <Col xxl={16} xl={16} lg={16} md={16} sm={24} xs={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Top Product
                        </div>
                    </CardItem>
                </Col>
            </Row>

            <Row gutter={[20, 20]} className="mb-20">
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Latest Upload
                        </div>
                    </CardItem>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Activity
                        </div>
                    </CardItem>
                </Col>
                <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Task
                        </div>
                    </CardItem>
                </Col>
            </Row>
        </>
    )
}

export default Home;