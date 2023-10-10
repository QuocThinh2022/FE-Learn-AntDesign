import { Line } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function StepLine() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch(`https://khoa-hoc-front-end.vercel.app/api/basic-line.json`)
            .then(res => res.json())
            .then(result => setDataChart(result))
            .catch(error => {
                console.log('fetch data fail', error);
            })
    }, [])

    const config = {
        data: dataChart,
        xField: 'date',
        yField: 'quantity',
        stepType: 'hv'
    };


    return (
        <>
            <Card title='Step Line'>
                <Line {...config} />
            </Card>
        </>
    )
}

export default StepLine;