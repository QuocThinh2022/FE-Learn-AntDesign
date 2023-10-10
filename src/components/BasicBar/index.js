import { Line, Bar } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function BasicBar() {
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
        xField: 'quantity',
        yField: 'date',
    };


    return (
        <>
            <Card title='Basic Bar'>
                <Bar {...config} />
            </Card>
        </>
    )
}

export default BasicBar;