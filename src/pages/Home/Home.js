import React, { useState } from 'react';
import { sendStandardNotification, sendSilentNotification } from '../../notification';

// Components
import NotificationForm from '../../components/NotificationForm/NotificationForm';
import Toast from '../../components/Toast/Toast';


import { Container } from './HomeStyles';

export default function Home() {
  const [isBusyStandard, setBusyStandard] = useState(false);
  const [isBusySilent, setBusySilent] = useState(false);
  const [message, setMessage] = useState("Messagio standard");
  const [showMessage, setShowMessage] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const onSubmitStandardNotification = async data => {
    try {
      setBusyStandard(true);

      await sendStandardNotification(data.title, data.body);

      makeMessage("Notifica Standard inviata");
    } catch (e) {
      makeMessage(e.message, true);
    } finally {
      setBusyStandard(false);
    }
  }

  const onSubmitSilentNotification = async data => {
    try {
      setBusySilent(true);

      await sendSilentNotification(data.title, data.body);

      makeMessage("Notifica Silenziosa inviata");
    } catch (e) {
      makeMessage(e.message, true);
    } finally {
      setBusySilent(false);
    }
  }

  const makeMessage = (message, isError) => {
    setShowMessage(false);
    setMessage(message);
    setShowMessage(true);
    setIsErrorMessage(isError ? isError : false);
  }


  return (
    <Container>
      <Toast show={showMessage} message={message} error={isErrorMessage} />
      <Container.LeftColumn>
        <Container.Title>Notifica Push Standard</Container.Title>

        <Container.Card>
          <NotificationForm isBusy={isBusyStandard} title="Notifica Standard" onSubmit={onSubmitStandardNotification} />
        </Container.Card>
      </Container.LeftColumn>
      <Container.RightColumn>
        <Container.Title>Notifica Push Silenziosa (Data only)</Container.Title>

        <Container.Card>
          <NotificationForm isBusy={isBusySilent} title="Notifica Silenziosa" onSubmit={onSubmitSilentNotification} />
        </Container.Card>
      </Container.RightColumn>
    </Container>
  );
}