import styled, { css } from 'styled-components/macro'

export const DefaultButton = styled.button`
  background-color: blue;
  border: none;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  ${({ larger }) =>
    larger
      ? css`
          padding: 2rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 1rem;
          font-size: 1rem;
          font-weight: 400;
        `}
  padding: ${({ larger }) => larger && '2rem'};
  display: block;
  width: 200px;
  margin: 1rem auto;
`

export const HispterButton = styled(DefaultButton)`
  background-color: white;
  width: 150px;
  color: blue;
  border: 1px solid blue;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`
