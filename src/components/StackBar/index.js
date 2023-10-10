import { Line, Aream, Column, Bar } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function StackedBar() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch(`https://khoa-hoc-front-end.vercel.app/api/multi-line.json`)
            .then(res => res.json())
            .then(result => setDataChart(result))
            .catch(error => {
                console.log('fetch data fail', error);
            })
    }, [])

    const config = {
        data: dataChart,
        xField: 'value',
        yField: 'year',
        seriesField: 'category',
        slider: {
            start: 0.8,
            end: 0.86
        },
        isStack: true,
        // connectedArea: true,
    };


    return (
        <>
            <Card title='Staked Column'>
                <Bar {...config} />
            </Card>
        </>
    )
}

export default StackedBar;