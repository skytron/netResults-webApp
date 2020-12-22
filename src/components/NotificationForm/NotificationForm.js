import React from 'react';
import propTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import { Container, Loader } from './NotificationFormStyle';

export default function NotificationForm({ onSubmit, isBusy, title }) {
  const { register, handleSubmit, setValue, errors } = useForm();

  const onSubmitForm = data => {
    const { notificationTitle, notificationBody } = data;

    if (onSubmit) {
      onSubmit({
        title: notificationTitle,
        body: notificationBody
      });
    }

    // clear message
    setValue("notificationBody", "");
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
          name="notificationTitle"
          type="text"
          placeholder="Messaggio"
          defaultValue={title}
          ref={register({ required: true })} />
        {errors.notificationTitle && <Container.Error>Devi inserire un titolo</Container.Error>}

        {/* Body  */}
        <Container.Label style={{ marginTop: '48px' }}>Messaggio (Massimo 1000 caratteri)</Container.Label>
        <Container.TextArea
          error={!!errors.notificationBody}
          name="notificationBody"
          type="text"
          placeholder="Messaggio"
          maxlength="1000"
          ref={register({ required: true, maxLength: 1000 })} />
        {errors.notificationBody && errors.notificationBody.type === "required" && <Container.Error>Devi inserire una messaggio</Container.Error>}
        {errors.notificationBody && errors.notificationBody.type === "maxLength" && <Container.Error>Massimo numero di caraterri è 1000</Container.Error>}

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