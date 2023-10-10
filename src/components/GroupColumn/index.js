import { Line, Aream, Column } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function GroupColumn() {
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
            start: 0.5,
            end: 0.525
        },
        isGroup: true,
    };


    return (
        <>
            <Card title='Group Column'>
                <Column {...config} />
            </Card>
        </>
    )
}

export default GroupColumn;