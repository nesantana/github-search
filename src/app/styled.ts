import Styled from 'styled-components'
import theme from '@/theme'

export const Form = Styled.div`
  margin: auto;
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    margin-bottom: 30px;
  }

  input {
    width: 550px;
    max-width: 100%;
    height: 50px;
    padding: 0 20px;
    border-radius: 30px;
    outline: none;
    border: 1px solid ${theme.secondaryColor};
  }

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translate(0px, -50%);
    cursor: pointer;
  }
`
