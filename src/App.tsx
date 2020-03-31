import React from 'react';
import { Typography, Layout } from 'antd';
import './App.css';
import Italy from "./Italy";
import Regions from "./Regions";
import Districts from "./Districts";

export default () => {
  const { Title, Paragraph } = Typography;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="app">
      <Header className="appHeader">
        <Title className='mainTitle'>Covid-19 Italy</Title>
      </Header>
      <Content className='appMain'>
        <Paragraph style={{textAlign: 'left'}}>
          Il Dipartimento della Protezione Civile mette a disposizione le seguenti informazioni
          aggiornate quotidianamente alle 18:00 circa. <a href='https://github.com/pcm-dpc/COVID-19' target='_blank'>https://github.com/pcm-dpc/COVID-19</a>
        </Paragraph>
        <Italy />
        <Regions />
        <Districts />
      </Content>
      <Footer>
        <Paragraph style={{textAlign: 'left'}}>
          Visita la repository di questo sito su <a href='https://github.com/iacopolea/covid-19'>https://github.com/iacopolea/covid-19</a>
        </Paragraph>
        <Paragraph style={{textAlign: 'left'}}>
          Grafici realizzati con Rechart: <a href='https://github.com/recharts/recharts'>https://github.com/recharts/recharts</a>
        </Paragraph>
      </Footer>
    </Layout>
  );
}