import React from 'react';
import styled from 'styled-components';
// import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2022 Sehaj Munot | e
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:munot.sehaj@gmail.com"
            >
              Mail
            </a>{' '}
            | G
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/munotsehaj"
            >
              itHub
            </a>{' '}
            | L
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sehajmunot/"
            >
              inkedIn
            </a>{' '}
            | R
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1fIPkVRYp9Y1hYLJrgQ-sTddefupH19d3/view?usp=sharing"
            >
              ésumé
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
