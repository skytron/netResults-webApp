import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`

Container.Label = styled.h3`
  font-size: 20px;
  font-weigth: 600;
  color: #333;
  margin-top: 64px;
`

Container.DownloadLink = styled.a`
  text-decoration: none;
  color: #0fa34f;
  font-size: 100px;
  display: inline-block;
  margin-top: 32px;
`