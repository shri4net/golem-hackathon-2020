import React, { Component } from 'react'
import { Input, Container, Header, List, Button, ListItemProps, Divider, Grid, Segment } from 'semantic-ui-react'

const btnStart = () => {
    alert("Start clicked!. Not implemented yet, Invokes Requestor Instance.");
}

const btnNew = () => {
    alert("New clicked!. Not implemented yet, Invokes Creator.");
}

const RequestorSelect = () => (
    <div className="RequestorSelect">
    <Segment>
        <Grid columns={2} relaxed="very">
            <Grid.Column>
                App Hash: <br />
                <Header as="h3">Parameters</Header>
                Project folder: <Input type="text" /> <br />
                Output results folder: <Input type="text" /><br />
                Blender file: <Input type="text" /><br />
            </Grid.Column>
            <Grid.Column>
                <Button onClick={btnStart}>Start Instance</Button>
                <br /> <br /> <br />
                <Button onClick={btnNew}>Create New</Button>
            </Grid.Column>
            </Grid>
            <Divider vertical />
    </Segment>

    </div>
)

export default RequestorSelect