import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

import {
  Container,
  Loader
} from './HomeStyles';

export default function Home() {
  const { register, handleSubmit, errors } = useForm();
  const [isBusy, setBusy] = useState(false);

  const onSubmit = data => {
    setBusy(true)
    setTimeout(() => setBusy(false), 1000)

    console.log(data)
  }

  return (
    <Container>
      <Container.LeftColumn>
        <Container.Title>Notifica Push Standard</Container.Title>

        <Container.Card>
          {
            isBusy && <Container.LoaderContainer>
              <Loader />
            </Container.LoaderContainer>
          }

          <Container.Form onSubmit={handleSubmit(onSubmit)}>

            {/* Title */}
            <Container.Label>Titolo</Container.Label>
            <Container.Input
              error={!!errors.standardNotificationTitle}
              name="standardNotificationTitle"
              type="text"
              placeholder="Titolo push"
              defaultValue="Notifica Standard"
              ref={register({ required: true })} />
            {errors.standardNotificationTitle && <Container.Error>Devi inserire un titolo</Container.Error>}

            {/* Body  */}
            <Container.Label style={{ marginTop: '48px' }}>Messaggio (Massimo 1000 caratteri)</Container.Label>
            <Container.TextArea
              error={!!errors.standardNotificationBody}
              name="standardNotificationBody"
              type="text"
              placeholder="Titolo push"
              maxlength="1000"
              ref={register({ required: true })} />
            {errors.standardNotificationBody && <Container.Error>Devi inserire una messaggio</Container.Error>}
            <Container.Form.SubmitButton disabled={isBusy} value="INVIA NOTIFICA" />
          </Container.Form>
        </Container.Card>
      </Container.LeftColumn>
      <Container.RightColumn>
        <Container.Title>Notifica Push Silenziosa (Data only)</Container.Title>

        <Container.Card>
          <Container.Form>

            <Container.Label>Titolo</Container.Label>
            <Container.Input type="text" placeholder="Titolo push" />
          </Container.Form>
        </Container.Card>
      </Container.RightColumn>
    </Container>
  );
}