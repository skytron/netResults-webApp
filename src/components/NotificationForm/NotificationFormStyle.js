import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`

/*
* ==========================
* FORM
* ==========================
*/

Container.Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

Container.Form.SubmitButton = styled.input.attrs({ type: 'submit' })`
  border: none;
  background: #3F51B5;
  font-size: 1.2rem;
  padding: .8rem;
  color: white;
  margin-top: 24px;
  
  :disabled {
    background: gray;
  }
`

Container.Error = styled.span`
  color: red;
  font-size: 1rem;
  display: inline-block;
  margin: 5px 0 0 5px;
  font-weight: 500;
`
Container.Label = styled.label`
  color: #333;
  font-size: 16px;
`


Container.Input = styled.input`
  margin-top: .3rem;
  border: 1px solid #555;
  padding: .5rem;
  border-radius: 5px;
  ${props => props.error && css`
    border-color: red
  `}
`
Container.TextArea = styled.textarea`
  margin-top: .3rem;
  border: 1px solid #555;
  padding: .5rem;
  border-radius: 5px;
  height: 150px;
    ${props => props.error && css`
    border-color: red
  `}
`

const loaderRotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Loader = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3F51B5; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${loaderRotate} 2s linear infinite;
`

Container.LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 20px;
`