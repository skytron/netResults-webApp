import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.error ? "red" : "#222"};
  color: white;
  position: absolute;
  padding: 1rem 2.5rem;
  border-radius: 10px;
  bottom: 40px;
  left: 50%
`

Container.Message = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
`

Container.CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 5px;
  border-radius: 50%;
  font-size: 10px;
  background: ${props => props.error ? "white" : "#555"};
  display: flex;
  justify-content: center;
  align-content: center;
  color: ${props => props.error ? "black" : "white"};
  cursor: pointer;
`