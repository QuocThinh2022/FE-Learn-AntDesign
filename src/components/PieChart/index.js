import { Line, Pie } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function PieChart() {
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
        angleField: 'value',
        colorField: 'type'
    };


    return (
        <>
            <Card title='Pie Chart'>
                <Pie {...config} />
            </Card>
        </>
    )
}

export default PieChart;