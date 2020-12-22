import styled from 'styled-components';

export const Container = styled.header`
  height: 48px;
  background: #3F51B5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;

  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;


Container.Title = styled.span`
  display: inline-block;
  color: white;
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;


Container.Menu = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 150px;

    @media (max-width: 480px) {
      width: 120px;
    }

    a {
      text-decoration: none;
      color: whitesmoke;
      font-size: 16px;

      &:hover {
        color: orange;
      }
    }
  }
`
