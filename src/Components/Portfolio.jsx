import React from 'react';
import {Container, Grid, Card} from 'semantic-ui-react';

const projects = [
  {
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const Portfolio = () => {
  return (
    <Container>
      <Grid columns={3}>
        <Grid.Row>
          {projects.map((project, index) => (
            <Grid.Column key={index}>
              <Card>
                <Card.Content>
                  <Card.Header>{project.title}</Card.Header>
                  <Card.Description>{project.description}</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Portfolio;