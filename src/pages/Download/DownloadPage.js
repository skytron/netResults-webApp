import React from 'react';

import { Container } from './DownloadPageStyle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function DownloadPage() {
  return (
    <Container>
      <Container.Label>Clicca sull'icona per scaricare l'app android</Container.Label>
      <Container.DownloadLink href="https://firebasestorage.googleapis.com/v0/b/netresultspushnotification.appspot.com/o/app-release.apk?alt=media&token=391de1cf-7a86-49c3-91bc-93dc98855a09">
        <FontAwesomeIcon icon={faDownload} />
      </Container.DownloadLink>
    </Container>
  );
}