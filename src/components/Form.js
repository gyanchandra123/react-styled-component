import React from 'react'
import styled, { css } from 'styled-components/macro'

const Button = styled.button.attrs((props) => {
  // adding attribute
  return { type: props.type || 'button' } //** here we are setting a common attribute value ‘button’ || ‘submit’ based on the input type.
})`
  background: var(--btn-background);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  ${({ type }) => {
    // applying styles based on the attribute value
    //** here we are using css helper function + applying value based condition checking to apply the style.
    return (
      type === 'submit' &&
      css`
        display: block;
        width: 100%;
        margin-top: 1rem;
        border-radius: 0.25rem;
      `
    )
  }}
`

const BasicInput = styled.input.attrs((props) => {
  return {
    //**here we are learning : how to add more than 1 attribute dynamically
    type: props.type || 'text',
    placeholder: props.placeholder || 'please enter value',
  }
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`

const Form = () => {
  return (
    <div>
      <h2>some random stuff</h2>
      <Button>click me</Button>
      <form
        css={`
          width: 300px;
          background: var(--primary);
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <h2>Form</h2>
        <BasicInput />
        <BasicInput />
        <BasicInput />
        <BasicInput type='email' placeholder='enter email' />
        <Button type='submit'>submit here</Button>
      </form>
    </div>
  )
}

export default Form
