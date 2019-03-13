import React from 'react';
import ReactDOM from 'react-dom'

import Clock from "./clock.jsx"
import Tabs from "./tabs.jsx"
import Weather from "./weather.jsx"

const panes = [
  {title: 'one', content: "first content"},
  {title: 'two', content: "second content"},
  {title: 'three', content: "third content"}
]
function Root(){
  return (
    <div>
      <Clock/>
      <Tabs panes = {panes}/>
      <Weather/>
    </div>
  )
}
document.addEventListener('DOMContentLoaded', ()=> {
  ReactDOM.render(<Root/>, document.getElementById('main'))
});
