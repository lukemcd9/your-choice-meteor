import React from 'react';
import { Button, Grid, Header, Icon } from 'semantic-ui-react';

export default class FAQ extends React.Component {
  render() {
    return (
        <div className="dark-bg">
          <Grid container verticalAlign="middle" columns={2}>
            <Grid.Column>
              <Header as="h1" size="huge" inverted>
                <Icon name="cogs" floated="left"/>
                WHAT US A MECHANICAL KEYBOARD?
              </Header>
              <Header as="h3" size="medium" color="orange">FOCUS ON THE SWITCHES</Header>
              <p className="white-text">A mechanical keyboard is built with high quality,
                typically spring activated key switches. These key switches vary based on the keyboard’s application
                or user preference.</p>
              <Button inverted>LEARN MORE</Button>
            </Grid.Column>
            <Grid.Column>
              <Header as="h1" size="huge" inverted><Icon name="check" floated="left"/>MECHANICAL KEYBOARD GUIDE</Header>
              <Header as="h3" size="medium" color="orange">FINDING YOUR FIRST MECHANICAL - MADE EASY</Header>
              <p className="white-text">Don&rsquo;t be overwhelmed looking for your first Mechanical Keyboard!
                We&rsquo;ve put together a short and simple survey that will make finding your first mechanical
                keyboard a breeze.
              </p>
              <Button inverted>KEYBOARD GUIDE</Button>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
