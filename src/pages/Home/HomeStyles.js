import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  height: 94vh;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

Container.LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  flex: 1;
`

Container.RightColumn = styled.div`
  display: flex;
  padding: 2rem;
  flex: 1;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    margin-top: 400px;
  }

`

Container.Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
`

/*
* ==========================
* CARD
* ==========================
*/

Container.Card = styled.div`
  background: #fff;
  border-radius: 10px;
  display: inline-block;
  height:400px;
  margin: 1rem;
  position: relative;
  padding: 2.5rem 1.5rem;
  width: 400px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  @media (max-width: 480px) {
    width: 300px;
  }
`



