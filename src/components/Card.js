import React from 'react'
import styled from 'styled-components'

const Card = () => {
  return (
    <CardStyle>
      <img
        src='https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160'
        alt='product'
      />
      <footer>
        <h4>product name</h4>
        <p>$10</p>
      </footer>
    </CardStyle>
  )
}

const CardStyle = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    h4 {
      text-transform: capitalize;
      &::before {
        content: 'Name : ';
        color: red;
      }
    }
    p {
      color: var(--primary);
      font-weight: 700;
    }
  }
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
`

export default Card
