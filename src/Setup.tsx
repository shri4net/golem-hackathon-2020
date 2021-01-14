import React, { Component, useState } from 'react'
import { Accordion, Button, AccordionPanelProps, Icon, Label, Message, Segment, Grid, GridColumn, Divider } from 'semantic-ui-react'
import { spawn } from "child_process";


const Setup = () => {
  const [stateYgVer, setStateYgVer] = useState<string|undefined>(undefined);
  const [stateYgAppKey, setStateYgAppKey] = useState<string|undefined>(undefined);

  if(stateYgVer==undefined){
    if(stateYgVer == undefined)
      setStateYgVer("");

    // yagna --version
    const yg = spawn('yagna', ['--version']);

    yg.stdout.on('data', (data) => {
      setStateYgVer(data.toString('utf-8'));
    })
    yg.stderr.on("data", (data) => {
      alert('Error: ' + data.toString('utf-8'));
    })
    yg.on('close', (code) => {
      alert('Version Closed: ' + code);
    })
  }

  if(stateYgAppKey==undefined){
    setStateYgAppKey("");

    // yagna app-key list --json
    const yg = spawn('yagna', ['app-key','list','--json']);

    yg.stdout.on('data', (data) => {
      //let jobj = JSON.parse(data.toString('utf-8'));
      //alert(data.toString('utf-8'));
      //alert(jobj["values"][0][1]);

      let appkey = JSON.parse(data.toString('utf-8'))["values"][0][1];
      setStateYgAppKey(appkey);
    })
    yg.stderr.on("data", (data) => {
      alert('Error: ' + data.toString('utf-8'));
    })
    yg.on('close', (code) => {
      alert('AppKey Closed: ' + code);
    })
  }

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
          Yagna version: {stateYgVer}<br />
          Yagna network: <br />
          </Grid.Column>
          <Grid.Column>
          <Button onClick={btnInstallClick} disabled={(stateYgVer==""?false:true)} >Install Yagna</Button>
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
          Yagna app-key: {stateYgAppKey}<br />
          </Grid.Column>
          <Grid.Column>
          <Button onClick={btnStartSvcClick} disabled={(stateYgAppKey==""?false:true)}>Start Service</Button>
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


  return (
    <Accordion defaultActiveIndex={[0]} exclusive={false} panels={panels}/>
  );
}

export default Setup
