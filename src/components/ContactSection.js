import React from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { HiDocumentText } from 'react-icons/hi';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    align-items: center;
    justify-content: center;
  }
  .contactSection__wrapper {
    // display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: center;
    align-items: center;
  }
  .contact_info {
    width: 100%;
    //max-width: 500px;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contact_info {
      max-width: 100%;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="Connect" subheading="let's communicate!" />
        <div className="contactSection__wrapper">
          <div className="contact_info">
            <ContactInfoItem icon={<MdEmail />} text="munot.sehaj@gmail.com" />
            <ContactInfoItem
              icon={<AiFillLinkedin />}
              text="linkedin.com/in/sehajmunot/"
            />
            <ContactInfoItem text="github.com/munotsehaj" />
            <ContactInfoItem
              icon={<HiDocumentText />}
              text="tinyurl.com/sehaj-munot-resume"
            />
          </div>
          {/* <div className="right">
            <ContactForm />
          </div> */}
        </div>
      </div>
    </ContactSectionStyle>
  );
}
