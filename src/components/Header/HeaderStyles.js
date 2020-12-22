import styled from 'styled-components';

export const Container = styled.header`
  height: 48px;
  background: #3F51B5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
`;


Container.Title = styled.span`
  display: inline-block;
  color: white;
  font-size: 20px;
`;


Container.Menu = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    width: 150px;

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
