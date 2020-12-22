import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './HeaderStyles';

export default function Header() {
  return (
    <Container>
      <Container.Title>Net Results Push Notification Panel</Container.Title>
      <Container.Menu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/download">Download</Link>
          </li>
        </ul>
      </Container.Menu>
    </Container>
  )
}