import React from 'react';
import { Typography, Layout, Menu } from 'antd';
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
          Per informare e mettere a disposizione i dati raccolti, il Dipartimento della Protezione Civile mette
          a disposizione, le seguenti informazioni aggiornate quotidianamente alle 18:00 circa. <a href='https://github.com/pcm-dpc/COVID-19' target='_blank'>https://github.com/pcm-dpc/COVID-19</a>
        </Paragraph>
        <Italy />
        <Regions />
        <Districts />
      </Content>
      <Footer></Footer>
    </Layout>
  );
}