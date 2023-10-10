import { Line, Area, TinyArea } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function TinyAreaChart() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch(`https://khoa-hoc-front-end.vercel.app/api/basic-line.json`)
            .then(res => res.json())
            .then(result => setDataChart(result.map(item => item.quantity)))
            .catch(error => {
                console.log('fetch data fail', error);
            })
    }, [])

    const config = {
        data: dataChart,
        areaStyle: () => {
          return {
            fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
          };
        },
        smooth: true
    };


    return (
        <>
            <Card title='Tiny Area'>
                <TinyArea {...config} />
            </Card>
        </>
    )
}

export default TinyAreaChart;