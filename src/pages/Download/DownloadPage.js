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
      <Container.DownloadLink href="https://firebasestorage.googleapis.com/v0/b/netresultspushnotification.appspot.com/o/app-release.apk?alt=media&token=65a44271-fca1-4c80-a930-e0bc55330373   ">
        <FontAwesomeIcon icon={faDownload} />
      </Container.DownloadLink>
    </Container>
  );
}