import React from 'react';

class Headers extends React.Component{
  render(){


    const selected = this.props.selectedPane;
    const headers = this.props.panes.map((pane, index) => {
      const title = pane.title;
      const klass = index === selected ? 'active' : '';

      return (
        <li
          key={index}
          className = {klass}
          onClick = {()=> this.props.onTabChosen(index)}
        >
          {title}{' '}
        </li>
      )
    })
    return (
      <ul className='tab-header'>
        {headers}
      </ul>
    )
  }
}

export default class Tabs extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      selected:0
    }
    this.selectedTab = this.selectedTab.bind(this)
  }

  selectedTab(num){
    this.setState({selected: num})
  }

  render(){
    const pane = this.props.panes[this.state.selected]
    return(
      <div>
        <h1>Tabs</h1>
        <Headers
          selectedPane = {this.state.selected}
          onTabChosen = {this.selectedTab}
          panes = {this.props.panes}
        />
        <div className='tab-content'>
          <article>
            {pane.content}
          </article>
        </div>
      </div>
    )
  }

}
