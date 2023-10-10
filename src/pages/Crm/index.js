import { Col, Row } from 'antd';
import Statistic from '../../components/Statistic';
import { DollarOutlined, LineChartOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import CardItem from '../../components/CardItem';
import BasicLine from '../../components/BasicLine';
import BasicLine2 from '../../components/BasicLine2';
import MultiLine from '../../components/MultiLine';
import StepLine from '../../components/StepLine';
import BasicArea from '../../components/BasicArea';
import MultiArea from '../../components/MultiArea';
import MultiArea2 from '../../components/MultiArea2';
import BasicColumn from '../../components/BasicColumn';
import StackedColumn from '../../components/StackColumn';
import GroupColumn from '../../components/GroupColumn';
import BasicBar from '../../components/BasicBar';
import StackedBar from '../../components/StackBar';
import PieChart from '../../components/PieChart';
import RoseChart from '../../components/RoseChart';
import TinyLineChart from '../../components/TinyLineChart';
import TinyAreaChart from '../../components/TinyAreaChart';

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
                    <BasicLine />
                </Col>
                <Col xxl={12} xl={12} lg={12} span={24}>
                    <BasicLine2 />
                </Col>
                <Col xxl={6} xl={6} lg={6} span={24}>
                    <MultiLine />
                </Col>
            </Row>
            <Row className='mb-20' gutter={[20,20]}>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <StepLine />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <BasicArea />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <MultiArea />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <MultiArea2 />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <BasicColumn />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <StackedColumn />
                </Col>
                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                    <GroupColumn />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <BasicBar />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <StackedBar />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <PieChart />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <RoseChart />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <TinyLineChart />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <TinyAreaChart />
                </Col>
            </Row>
        </>
    )
}

export default Crm;