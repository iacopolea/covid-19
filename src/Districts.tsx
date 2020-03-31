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
import {theme, dateAxisFormatter, numberAxisFormatter, binArrayToJson, districtsHeaders} from "./common";

export default () => {
  const [allDistricts, setAllDistricts] = useState({15:[]});
  const defaultDistrict = 15;
  const [selectedDistrict, setDistrict] = useState(defaultDistrict);
  const { Title } = Typography;
  useEffect(() => {
    const fetchData = async () => {
      fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province.json').then(async function (response) {
        if (response && response.body) {
          // @ts-ignore
          response.arrayBuffer().then(function(buffer) {
            // @ts-ignore
            const uint8View = new Uint8Array(buffer);
            const data:Array<DatumDistrict> = binArrayToJson(uint8View);
            // const data = JSON.parse('{}');
            //const str = Buffer.concat(buffer);
            let final = {};
            for (let i=1; i<=111; i++) {
              // @ts-ignore
              final[i] = data.filter(datum => {
                // @ts-ignore
                return datum.codice_provincia === i;
              })
            }
            // @ts-ignore
            setAllDistricts(final);
          });
        }
      });
    };
    fetchData();
  }, []);
  const handleChange = (selected:string) => {
    // @ts-ignore
    setDistrict(selected)
  };
  return (
    <section className='appSection'>
      <Title level={2}>Casi per Provincia</Title>
      <Select onChange={handleChange}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                // @ts-ignore
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              style={{ width: 210 }}
        // @ts-ignore
              defaultValue={'Milano'}>
        {
          Object.keys(districtsHeaders).map(key => (
            <Select.Option key={key} value={key}>{
              // @ts-ignore
              districtsHeaders[key]
            }
            </Select.Option>
          ))
        }
      </Select>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={
          // @ts-ignore
          allDistricts[selectedDistrict]
        }
          margin={{ top:20, right:20, left:0, bottom:25 }}>
          <XAxis dataKey="data" tickFormatter={dateAxisFormatter} angle={-45} dx={-20} dy={20}/>
          <YAxis tickFormatter={numberAxisFormatter}/>
          <CartesianGrid stroke={theme.colors.grey} />
          <Bar dataKey='totale_casi' fill={theme.colors.mainMuted} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}