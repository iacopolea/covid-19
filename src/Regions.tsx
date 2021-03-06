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
import {headers, regionHeaders, theme, dateAxisFormatter, numberAxisFormatter} from "./common";

export default () => {
  const [allRegions, setAllRegions] = useState({3: []});
  const defaultRegion = 3;
  const [selectedRegion, setRegion] = useState(defaultRegion);
  const defaultValue = 'totale_positivi';
  const [selectedHeader, setHeader] = useState(defaultValue);
  const { Title } = Typography;
  useEffect(() => {
    const fetchData = async () => {
      fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json').then(async function (response) {
        if (response.ok) {
          const data:Array<DatumRegion> = await response.json();
          //const reader = await response.body.getReader();
          //const readData = await reader.read();
          //const data:Array<DatumRegion> = binArrayToJson(readData.value);
          let final = {};
          for (let i=1; i<=20; i++) {
            // @ts-ignore
            final[i] = data.filter(datum => {
              return datum.codice_regione === i;
            })
          }
          // @ts-ignore
          setAllRegions(final);
        }
      });
    };
    fetchData();
  }, []);
  const handleChange = (selected:string) => {
    setHeader(selected)
  };
  const handleRegionChange = (selected:number) => {
    setRegion(selected)
  };
  // @ts-ignore
  return (
    <section className='appSection'>
      <Title level={2}>Andamento Regioni</Title>
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
      <Select onChange={handleRegionChange}
              style={{ width: 140 }}
              // @ts-ignore
              defaultValue={'Lombardia'}>
        {
          Object.keys(regionHeaders).map(key => (
            <Select.Option key={key} value={key}>{
              // @ts-ignore
              regionHeaders[key]
            }
            </Select.Option>
          ))
        }
      </Select>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={
          // @ts-ignore
          allRegions[selectedRegion]
        }
          margin={{ top:20, right:20, left:0, bottom:25 }}>
          <XAxis dataKey="data" tickFormatter={dateAxisFormatter} angle={-45} dx={-20} dy={20}/>
          <YAxis tickFormatter={numberAxisFormatter}/>
          <CartesianGrid stroke={theme.colors.grey} />
          <Bar dataKey={selectedHeader} fill={theme.colors.mainMuted} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}