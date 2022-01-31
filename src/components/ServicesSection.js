import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="Topics I want to explore"
          heading="Interests"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Software Development"
            desc="In addition to web development, I want to learn and work with machine learning to develop useful software products."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Financial Computing"
            desc="I want to learn about algorithmic trading and cryptocurrencies and use data science to program projects related to finance."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Multi-Platform Development"
            desc="I want to learn React Native and Dart to create cross-platform applications."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
