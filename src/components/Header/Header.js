import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './HeaderStyles';

export default function Header() {
  return (
    <Container>
      <Container.Title>Net Results Push Notification Panel</Container.Title>
      <Container.Menu>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{ color: 'orange' }}>Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/download" activeStyle={{ color: 'orange' }}>Download</NavLink>
          </li>
        </ul>
      </Container.Menu>
    </Container>
  )
}