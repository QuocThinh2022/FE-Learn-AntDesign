import { Line } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function MultiLine() {
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
    };


    return (
        <>
            <Card title='Multi Line'>
                <Line {...config} />
            </Card>
        </>
    )
}

export default MultiLine;