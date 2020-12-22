import React from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { Container, Loader } from './NotificationFormStyle';

export default function NotificationForm({ onSubmit, isBusy, title }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmitForm = data => {
    if (onSubmit) {
      onSubmit(data);
    }
  }

  return (
    <Container>
      {
        isBusy && <Container.LoaderContainer>
          <Loader />
        </Container.LoaderContainer>
      }
      <Container.Form onSubmit={handleSubmit(onSubmitForm)}>
        {/* Title */}
        <Container.Label>Titolo</Container.Label>
        <Container.Input
          error={!!errors.standardNotificationTitle}
          name="standardNotificationTitle"
          type="text"
          placeholder="Messaggio"
          defaultValue={title}
          ref={register({ required: true })} />
        {errors.standardNotificationTitle && <Container.Error>Devi inserire un titolo</Container.Error>}

        {/* Body  */}
        <Container.Label style={{ marginTop: '48px' }}>Messaggio (Massimo 1000 caratteri)</Container.Label>
        <Container.TextArea
          error={!!errors.standardNotificationBody}
          name="standardNotificationBody"
          type="text"
          placeholder="Messaggio"
          maxlength="1000"
          ref={register({ required: true })} />
        {errors.standardNotificationBody && <Container.Error>Devi inserire una messaggio</Container.Error>}
        <Container.Form.SubmitButton disabled={isBusy} value="INVIA NOTIFICA" />

      </Container.Form>
    </Container>
  )
}

NotificationForm.propTypes = {
  onSubmit: propTypes.func,
  isBusy: propTypes.bool,
  title: propTypes.string
}

NotificationForm.defaultProps = {
  isBusy: false,
  title: 'Titolo notifica'
}