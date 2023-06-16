import RootRoutes from './routes';
import React from 'react';

import './css/base.css';
import './css/layout.css';
import './css/components.css';
import './css/pages.css';
import './css/response.css';
import './css/bootstrap.min.css'

function App() {

  return (
    <div className="wrap">
      <React.StrictMode>
        <RootRoutes />
      </React.StrictMode>
    </div>
  )
}


export default App;
