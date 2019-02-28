import React from 'react';
import ReactDOM from 'react-dom'

import Clock from "./clock.jsx"

function Root(){
  return (
    <div>
      <Clock/>
    </div>
  )
}
document.addEventListener('DOMContentLoaded', ()=> {
  ReactDOM.render(<Root/>, document.getElementById('main'))
});
