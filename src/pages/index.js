import React from 'react';
import { Card, Image, Grid, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import styles from '@/styles/Home.module.css';

export default function Home() {
  // This is a function which returns a React component.
  // The React component returns JSX.
  function getCard() {
    return (
      <Card className={styles.Card} centered>
        <Image src='/harvey-smiles.jpg' size='medium' alt='dog laying in grass'/>
        <Card.Content>
          <Card.Header>Harvey</Card.Header>
          <Card.Description>
            Harvey is a Cane Corso, not a Pokemon. (But look at what happens if you search for him!)
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }

  // This is a function which returns a React component.
  // The React component returns JSX.
  function getParagraph() {
    return (
      <p className={styles.blue}>
        React Application with Semantic UI React and Next.js, deployed to Vercel. Data from PokeAPI.
      </p>
    );
  }

  // This is a function which returns a React component.
  // The React component returns JSX.
 

  // This is a function which returns a React component.
  // The React component returns JSX.
  function getAnotherColumn() {
    return (
      <Image src='/pikachu.jpg' size='medium' centered alt='Pikachu Pokemon card' />
    );
  }

  return (
    <>
    <h1>Catch &apos;em All with PokeAPI</h1>;
      <Image src='/pokemon-large.png' alt='logo' size='huge' centered/>
      <Grid>
        <Grid.Row columns='equal'>
          <Grid.Column>
            {getCard()}
          </Grid.Column>
          <Grid.Column>
            {getParagraph()}
          </Grid.Column>
          <Grid.Column>
            {getAnotherColumn()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
    </>
  );
}