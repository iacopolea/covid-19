import React, {useEffect, useState} from 'react';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  BarChart
} from 'recharts';
import { Typography, Select } from 'antd';
import {headers, theme, dateAxisFormatter, binArrayToJson} from "./common";

export default () => {
  const [dataIta, setDataIta] = useState([]);
  const defaultValue = 'totale_attualmente_positivi';
  const [selectedHeader, setHeader] = useState(defaultValue);
  const { Title } = Typography;
  useEffect(() => {
    const fetchData = async () => {
      fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json').then(async function (response) {
        if (response && response.body) {
          const reader = await response.body.getReader();
          const readData = await reader.read();
          const data:Array<Datum> = binArrayToJson(readData.value);
          // @ts-ignore
          setDataIta(data);
        }
      });
    };
    fetchData();
  }, []);
  const handleChange = (selected:string) => {
    setHeader(selected)
  };
  // @ts-ignore
  return (
    <section className='appSection'>
      <Title level={2}>Andamento Nazionale</Title>
      <Select onChange={handleChange}
              style={{ width: 210 }}
              // @ts-ignore
              defaultValue={defaultValue}>
        {
          Object.keys(headers).map(key => (
            <Select.Option key={key} value={key}>{
              // @ts-ignore
              headers[key]
            }
            </Select.Option>
          ))
        }
      </Select>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={dataIta} margin={{ top:20, right:20, left:0, bottom:25 }}>
          <XAxis dataKey="data" tickFormatter={dateAxisFormatter} angle={-45} dx={-20} dy={20}/>
          <YAxis tickFormatter={t=>{return `${t/1000}K`}}/>
          <CartesianGrid stroke={theme.colors.grey} />
          {/*<Scatter dataKey="nuovi_attualmente_positivi" stroke="#ff7300" strokeWidth={0} fill='#0B3954' shape={<Dot r={2}/>} />*/}
          <Bar dataKey={selectedHeader} fill={theme.colors.mainMuted} />
          {/*<Line dataKey="tamponi" dot={false} />*/}
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}