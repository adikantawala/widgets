import React from 'react';
import ReactDOM from 'react-dom'

import Clock from "./clock.jsx"
import Tabs from "./tabs.jsx"
import Weather from "./weather.jsx"
import Autocomplete from "./Autocomplete.jsx"

const panes = [
  {title: 'one', content: "first content"},
  {title: 'two', content: "second content"},
  {title: 'three', content: "third content"}
]
const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];
function Root(){
  return (
    <div>
      <Clock/>
      <Tabs panes = {panes}/>
      <Weather/>
      <Autocomplete names={names}/>
    </div>
  )
}
document.addEventListener('DOMContentLoaded', ()=> {
  ReactDOM.render(<Root/>, document.getElementById('main'))
});
