import React, { useState } from 'react';
import { sendStandardNotification } from '../../notification';
import NotificationForm from '../../components/NotificationForm/NotificationForm';


import {
  Container,
  Loader
} from './HomeStyles';

export default function Home() {
  const [isBusy, setBusy] = useState(false);

  const onSubmitStandardNotification = data => {
    console.log(data);
  }

  const onSubmitSilentNotification = data => {
    console.log(data);
  }


  return (
    <Container>
      <Container.LeftColumn>
        <Container.Title>Notifica Push Standard</Container.Title>

        <Container.Card>
          <NotificationForm title="Notifica Standard" onSubmit={onSubmitStandardNotification} />
        </Container.Card>
      </Container.LeftColumn>
      <Container.RightColumn>
        <Container.Title>Notifica Push Silenziosa (Data only)</Container.Title>

        <Container.Card>
          <NotificationForm title="Notifica Silenziosa" onSubmit={onSubmitSilentNotification} />
        </Container.Card>
      </Container.RightColumn>
    </Container>
  );
}