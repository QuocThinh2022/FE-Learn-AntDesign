import {Row, Col} from 'antd'
import CardItem from '../../components/CardItem';
import Statistic from '../../components/Statistic';

function Ecommerce() {
    return (
        <>
            <Row  gutter={[20, 20]} className='mb-20'>
                <Col xxl={10} xl={10} lg={10} span={24}>
                    <Row gutter={[20, 20]}>
                        <Col xxl={12} xl={12} lg={12} md={12} span={24} >
                            <CardItem>
                                <div style={{height: '100px'}}>Sales</div>
                            </CardItem>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} span={24} >
                            <CardItem>
                                <div style={{height: '100px'}}>Margin</div>
                            </CardItem>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} span={24} >
                            <CardItem>
                                <div style={{height: '100px'}}>Orders</div>
                            </CardItem>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} span={24} >
                            <CardItem>
                                <div style={{height: '100px'}}>Affiliate</div>
                            </CardItem>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={14} xl={14} lg={14} span={24}>
                    <CardItem>
                        <div style={{height: "260px"}}>
                            Sales Statistics
                        </div>
                    </CardItem>
                </Col>
            </Row>

            <Row gutter={[20,20]} className='mb-20'>
                <Col xxl={16} xl={16} lg={16} span={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Revenue
                        </div>
                    </CardItem>
                </Col>
                <Col xxl={8} xl={8} lg={8} span={24}>
                    <CardItem>
                        <div style={{height: "400px"}}>
                            Top Products
                        </div>
                    </CardItem>
                </Col>
            </Row>
        </>
    )
}

export default Ecommerce;