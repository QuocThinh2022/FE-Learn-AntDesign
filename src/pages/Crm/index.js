import { Col, Row } from 'antd';
import Statistic from '../../components/Statistic';
import { DollarOutlined, LineChartOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import CardItem from '../../components/CardItem';

function Crm() {
    
    return (
        <>
            <Row gutter={[20,20]} className="mb-20"> 
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem>
                        <Statistic rev={true} icon={<DollarOutlined />} value='$23,523' label='Profit' color='blue' />
                    </CardItem>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem>
                        <Statistic rev={true} icon={<LineChartOutlined />} value='+17.21%' label='Growth' color='green' />
                    </CardItem>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem>
                        <Statistic rev={true} icon={<ProfileOutlined />} value='3,685' label='Orders' color='yellow' />
                    </CardItem>
                </Col>
                <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
                    <CardItem>
                        <Statistic rev={true} icon={<UserOutlined />} value='1,832' label='Customers' color='purple' />
                    </CardItem>
                </Col>
            </Row>

            <Row className='mb-20' gutter={[20,20]}>
                <Col xxl={6} xl={6} lg={6} span={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Overall Rating
                        </div>
                    </CardItem>
                </Col>
                <Col xxl={12} xl={12} lg={12} span={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Total Sales
                        </div>
                    </CardItem>
                </Col>
                <Col xxl={6} xl={6} lg={6} span={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Monthly Target
                        </div>
                    </CardItem>
                </Col>
            </Row>
            <Row className='mb-20'>
                <Col span={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Latest Transactions
                        </div>
                    </CardItem>
                </Col>
            </Row>
        </>
    )
}

export default Crm;