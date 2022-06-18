import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Events from './components/Events';
import Home from './components/Home';

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorModeScript />
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/home' element={<Home />} />
          <Route path='/upcoming' element={<Events eventType='past' />} />
          <Route path='/past' element={<Events eventType='upcoming' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)


