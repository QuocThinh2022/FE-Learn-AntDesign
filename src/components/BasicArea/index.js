import { Line, Area } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function BasicArea() {
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
        areaStyle: () => {
          return {
            fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
          };
        },
        smooth: true
    };


    return (
        <>
            <Card title='Basic Area'>
                <Area {...config} />
            </Card>
        </>
    )
}

export default BasicArea;