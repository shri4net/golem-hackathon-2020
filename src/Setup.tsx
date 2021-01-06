import React, { Component } from 'react'
import { Accordion, Button, AccordionPanelProps, Icon, Label, Message, Segment, Grid, GridColumn, Divider } from 'semantic-ui-react'

const btnInstallClick = () => {
  alert('Not implemented!');
};

const btnStartSvcClick = () => {
  alert('Not implemented!');
};

const btnInitPaymentClick = () => {
  alert('Not implemented!');
};

const panels = [
  {
    key: `panel-0`,
    title: {content: <Label content="Yagna Installed ?" />},
    content: {
      content: (
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
          Yagna version: <br />
          Yagna network: <br />
          </Grid.Column>
          <Grid.Column>
          <Button onClick={btnInstallClick}>Install Yagna</Button>
          </Grid.Column>
          </Grid>
          <Divider vertical></Divider>
        </Segment>
      )
    }
  },
  {
    key: `panel-1`,
    title: {content: <Label content="Yagna Service running ?" />},
    content: {
      content: (
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
          Yagna app-key: <br />
          </Grid.Column>
          <Grid.Column>
          <Button onClick={btnStartSvcClick}>Start Service</Button>
          </Grid.Column>
          </Grid>
          <Divider vertical></Divider>
        </Segment>
      )
    }
  },
  {
    key: `panel-2`,
    title: {content: <Label content="Yagna Payment Initialized ?" />},
    content: {
      content: (
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
          Yagna id :<br />
          Balance amount:<br />
          </Grid.Column>
          <Grid.Column>
          <Button onClick={btnInitPaymentClick}>Initialize Payment</Button>
          </Grid.Column>
          </Grid>
          <Divider vertical></Divider>
        </Segment>
      )
    }
  },
]

const Setup = () => (
  <Accordion defaultActiveIndex={[0]} exclusive={false} panels={panels}/>
)

export default Setup
