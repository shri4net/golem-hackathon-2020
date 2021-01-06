import React, { Component } from 'react'
import { Input, Container, Header, List, ListItemProps, Segment, Tab } from 'semantic-ui-react'
import Setup from './Setup'
import Search from './Search'
import RequestorSelect from './RequestorSelect'

import { Accordion, Button, AccordionPanelProps, Icon, Label, Message } from 'semantic-ui-react'
import RequestorInstance from './RequestorInstance'

const panels = [
  {
    key: `panel-0`,
    title: {content: <Label color='blue' content="Yagna Setup" />},
    content: {
      content: (<Setup />)
    }
  },
  {
    key: `panel-1`,
    title: {content: <Label color='blue' content="Apps" />},
    content: {
      content: (<Search />  )
    }
  },
  {
    key: `panel-2`,
    title: {content: <Label color='blue' content="Selected App" />},
    content: {
      content: (<RequestorSelect />)
    }
  },
]

const panes = [
    { menuItem: 'Console', render: () => <Tab.Pane>Console logs</Tab.Pane> },
    { menuItem: 'Service', render: () => <Tab.Pane>Service logs</Tab.Pane> },
]

const Requestor = () => (
    <div className="Requestor">
    <Header as="h2">Requestor</Header>
    <Accordion defaultActiveIndex={-1} exclusive={true} panels={panels} fluid styled/>
    <hr />
    <Segment attached="bottom" inverted>
        <Tab panes={panes} />
    </Segment>
    </div>
)

export default Requestor