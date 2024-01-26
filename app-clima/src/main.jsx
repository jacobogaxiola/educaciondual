import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Gael from './Gael.jsx'
import Diego from './Diego.jsx'
import Fran from './Fran.jsx'
import Paulina from './Paulina.jsx'
import Lenin from './Lenin.jsx'
import Jassiel from './Jassiel.jsx'
import Yan from './Yan.jsx'
import Isis from './Isis.jsx'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";import './index.css'  

import {CssBaseline} from '@mui/material'
import { SnackbarProvider } from 'notistack';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider>
      <CssBaseline />
      <App />
      < Gael/>
      <Diego/>
      <Fran/>
      <Paulina/>
      <Lenin/>
      <Jassiel/>
      <Yan/>
      <Isis/>
    </SnackbarProvider>
  </React.StrictMode>,
)
