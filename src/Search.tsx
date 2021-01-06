import React, { Component } from 'react'
import { Input, Container, Header, List, ListItemProps, Segment, Grid, Divider } from 'semantic-ui-react'

const Search = () => (
    <div className="Search">
    Search App: <Input icon="search" placeholder="Search apps here.." />
    <Segment>
        <Grid columns={2} relaxed="very">
            <Grid.Column>
                <Header as="h3">Global</Header>
                <List bulleted>
                    <List.Item>Blender</List.Item>
                    <List.Item>Yacat</List.Item>
                    <List.Item>Lowe Level Api</List.Item>
                </List>
            </Grid.Column>
            <Grid.Column>
                    <Header as="h3">Local</Header>
                    ---Your local list goes here---
                </Grid.Column>
            </Grid>
            <Divider vertical></Divider>
        </Segment>
    </div>
)

export default Search