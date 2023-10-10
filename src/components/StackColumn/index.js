import { Line, Aream, Column } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function StackedColumn() {
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
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        slider: {
            start: 0,
            end: 1
        },
        isStack: true,
        connectedArea: true,
    };


    return (
        <>
            <Card title='Staked Column'>
                <Column {...config} />
            </Card>
        </>
    )
}

export default StackedColumn;