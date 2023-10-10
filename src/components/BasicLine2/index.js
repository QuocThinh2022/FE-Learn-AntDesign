import { Line } from '@ant-design/plots';
import { Card } from 'antd';
import { useEffect, useState } from 'react';

function BasicLine2() {
    const [dataChart, setDataChart] = useState([]);

    useEffect(() => {
        fetch(`https://khoa-hoc-front-end.vercel.app/api/doanh-thu-cong-ty.json`)
            .then(res => res.json())
            .then(result => setDataChart(result.doanhThu))
            .catch(error => {
                console.log('fetch data fail', error);
            })
    }, [])

    const config = {
        data: dataChart,
        xField: "nam",
        yField: "tong",
        smooth: true,
        point: true,
        slider: {
            start: 0.2,
            end: 0.8
        },
        color: '#f26722',
        meta: {
            tong: {
                alias: 'Tong danh thu',
            }
        }
    };


    return (
        <>
            <Card title='Basic Line 2'>
                <Line {...config} />
            </Card>
        </>
    )
}

export default BasicLine2;