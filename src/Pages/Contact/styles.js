import styled from 'styled-components'
import { borderRadius } from '../../styles'

export const FormContainer = styled.div`
  margin: auto;

  @media(max-width:768px){ width: 75vw; };
  @media(min-width:768px){ width: 50vw; };
  @media(min-width:1024px){ width: 33vw; }

  form {
    margin:auto;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    font-size: 2vh;


    & > * {
      margin: auto;
      ${borderRadius};
      font-size: 1rem;
      padding: .375rem .75rem;
      width: calc(100% - 1.5rem);
      line-height: 1.25;
    }

    label {
      border: 0;
      align-self: flex-start;
      width: 0;
      margin: 15px 0 0;
    }

    input {
      height: calc(1em + .5rem + 2px);
    }

    textarea {
      height: calc(2em + 3rem + 2px);
      justify-content: flex-start;
    }

    button {
      align-self: flex-start;
      width: 36%;
      margin: 1rem 0;
      padding: .375rem .75rem;
    }
  }

  div {
    display: flex;
    margin: auto;
    width:100%;
    justify-content: space-around;
  }

`
