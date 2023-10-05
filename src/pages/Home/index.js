import { Col, Row } from 'antd';
import Statistic from '../../components/Statistic';
import { DollarOutlined, LineChartOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import CardItem from '../../components/CardItem';

function Home() {
    return (
        <>
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