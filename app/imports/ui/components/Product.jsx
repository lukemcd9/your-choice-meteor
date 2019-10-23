import React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';

export default class Product extends React.Component {
  render() {
    return (
        <div className="keyboard-background">
          <Grid container centered verticalAlign="middle" style={{ height: '500px' }} columns={3}>
            <Grid.Row column>
              <Grid.Column centered textAlign="center">
                <Header as="h1" className="white-text">PURE WHITE MINI</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column centered textAlign="center">
                <Header as="h3" className="white-text">EVERYTHING YOU LOVE ABOUT DUCKY&rsquo;S ONE 2 MINI.
                  <br/>
                  IN WHITE.
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column centered textAlign="center"><Button color="orange">PURE WHITE</Button></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
