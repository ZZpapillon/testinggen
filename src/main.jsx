import React from 'react'
import ReactDOM from 'react-dom/client'
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Generator from './Generator.jsx'
import Cv from './CV'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
          <Generator  />
        
  </React.StrictMode>,
)
