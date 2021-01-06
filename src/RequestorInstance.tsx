import React, { Component } from 'react'
import { Input, Container, Header, List, Button, ListItemProps, Divider, Grid, Segment, Label, Tab } from 'semantic-ui-react'
import { SemanticShorthandCollection } from 'semantic-ui-react/dist/commonjs/generic'

const items:SemanticShorthandCollection<ListItemProps> = [
]

const btnRun = () => {
    alert("Run clicked! Not yet implemented.");
}

const panes = [
    { menuItem: 'Console', render: () => <Tab.Pane>Console logs</Tab.Pane> },
]

const RequestorInstance = () => (
    <div className="RequestorInstance">
    <Segment>
        <Grid columns={2} relaxed="very">
            <Grid.Column>
                App Hash: <br />
                <Header as="h3">Parameters</Header>
                Project folder: <Label  /> <br />
                Output results folder: <Label  /><br />
                Blender file: <Label  /><br />
            </Grid.Column>
            <Grid.Column>
                <Button onClick={btnRun}>Run Requestor</Button>
            </Grid.Column>
            </Grid>
            <Divider vertical />
        </Segment>

        <Segment attached="bottom" inverted>
        <Tab panes={panes}/>
    </Segment>
    </div>
)

export default RequestorInstance