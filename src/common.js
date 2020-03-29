import moment from "moment";

export const theme = {
  colors:{
    dark: '#011627',
    light: '#fdfffc',
    main: '#1890ff',
    mainLight: '#A8DADC',
    mainMuted: '#457B9D',
    accent: '#ff9f1c',
    grey: '#d3d3d3'
  }
};

export const headers = {
  ricoverati_con_sintomi: 'Ricoverati con Sintomi',
  terapia_intensiva: 'Terapia Intensiva',
  totale_ospedalizzati: 'totale Ospedalizzati',
  isolamento_domiciliare: 'Isolamento Domiciliare',
  totale_attualmente_positivi: 'Totale Attualmente Positivi',
  nuovi_attualmente_positivi: 'Nuovi Attualmente Positivi',
  dimessi_guariti: 'Dimessi Guariti',
  deceduti: 'Deceduti',
  totale_casi: 'Totale Casi',
  tamponi: 'Tamponi',
};

export const regionHeaders = {
  1: 'Piemonte',
  2: "Valle d'Aosta",
  3: 'Lombardia',
  4: 'P. A. Trento e Bolzano',
  5: 'Veneto',
  6: 'Friuli Venezia Giulia',
  7: 'Liguria',
  8: 'Emilia Romagna',
  9: 'Toscana',
  10: 'Umbria',
  11: 'Marche',
  12: 'Lazio',
  13: 'Abruzzo',
  14: 'Molise',
  15: 'Campania',
  16: 'Puglia',
  17: 'Basilicata',
  18: 'Calabria',
  19: 'Sicilia',
  20: 'Sardegna',
};

export const numberAxisFormatter = (n) => {
  return (n>1000) ? `${n/1000}K` : n;
};

export const dateAxisFormatter = (t) => {
  return moment(t).format('DD MMM');
};