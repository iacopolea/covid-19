declare module 'react-vis';

interface Datum {
  data: string
  stato: string
  ricoverati_con_sintomi: number
  terapia_intensiva: number
  totale_ospedalizzati: number
  isolamento_domiciliare: number
  totale_attualmente_positivi: number
  nuovi_attualmente_positivi: number
  dimessi_guariti: number
  deceduti: number
  totale_casi: number
  tamponi: number
  note_it: string
  note_en: string
}

interface DatumRegion extends Datum{
  lat: number
  long: number
  codice_regione: number
  denominazione_regione: string
}

interface DatumDistrict {
  data: string
  stato: string
  codice_regione: number
  denominazione_regione: string
  codice_provincia: number
  denominazione_provincia: string
  sigla_provincia: string
  lat: number
  long: number
  note_it: string
  note_en: string
}