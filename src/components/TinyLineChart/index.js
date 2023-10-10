import { Line, TinyLine } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function TinyLineChart() {
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
        smooth: true
    };


    return (
        <>
            <Card title='Tiny Line'>
                <TinyLine {...config} />
            </Card>
        </>
    )
}

export default TinyLineChart;