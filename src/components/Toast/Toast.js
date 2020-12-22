import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import { Container } from './ToastStyle';

/**
 * Toast to simple message notification with close button
 * 
 * @param {String}    message   - Message of notification 
 * @param {Boolean}   show      - If true show the message notificaiton toast 
 * @param {Boolean}   error     - If true show error variation of the toast notification 
 */
export default function Toast({ message, show, error }) {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    setShow(show);
  }, [show]);

  return (
    <>
      {isShow &&
        <Container error={error}>
          <Container.Message>{message}</Container.Message>
          <Container.CloseButton error={error} onClick={() => setShow(false)}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </Container.CloseButton>
        </Container>
      }
    </>
  )
}

Toast.propTypes = {
  message: propTypes.string,
  show: propTypes.bool,
  error: propTypes.bool,
}

Toast.defaultProps = {
  message: "Messaggio",
  show: false,
  erorr: false
}