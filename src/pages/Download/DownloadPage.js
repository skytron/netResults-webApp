import React from 'react';

import { Container } from './DownloadPageStyle.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

/**
 * Page component to Download android app to show push notification message
 * send by this web app
 * 
 */
export default function DownloadPage() {
  return (
    <Container>
      <Container.Label>Clicca sull'icona per scaricare l'app android</Container.Label>
      <Container.DownloadLink href="https://firebasestorage.googleapis.com/v0/b/netresultspushnotification.appspot.com/o/app-release.apk?alt=media&token=3abaaa9d-9174-4798-bbb7-0ff81a06ba26">
        <FontAwesomeIcon icon={faDownload} />
      </Container.DownloadLink>
    </Container>
  );
}