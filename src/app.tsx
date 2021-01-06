import React from 'react';
import ReactDom from 'react-dom';
import { Tab } from 'semantic-ui-react'
import RequestorInstance from './RequestorInstance';
import Requestor from './Requestor';
import 'semantic-ui-css/semantic.min.css';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const panes = [
  { menuItem: 'Requestor', render: () => <Tab.Pane><Requestor /></Tab.Pane> },
  { menuItem: 'RequestorInstance', render: () => <Tab.Pane><RequestorInstance /></Tab.Pane> },
  { menuItem: 'Creator', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Provider', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Activity', render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
]

const App = () => {
  return (
    <div className="App">
    <h2>
      Golem UI
    </h2>
    <Tab panes={panes} />
    </div>
  )
}

ReactDom.render(<App />, mainElement);
