import { Line, Rose } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function RoseChart() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch(`https://khoa-hoc-front-end.vercel.app/api/pie.json`)
            .then(res => res.json())
            .then(result => setDataChart(result))
            .catch(error => {
                console.log('fetch data fail', error);
            })
    }, [])

    const config = {
        data: dataChart,
        xField: 'type',
        yField: 'value',
        seriesField: 'type',
    };


    return (
        <>
            <Card title='Rose Chart'>
                <Rose {...config} />
            </Card>
        </>
    )
}

export default RoseChart;