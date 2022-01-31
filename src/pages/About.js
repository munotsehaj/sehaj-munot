import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hello there. I'm <span>Sehaj Munot</span>
              </p>
              <h2 className="about__heading">
                An inquisitive student developer
              </h2>
              <div className="about__info">
                <PText>
                  I'm a junior at a specialized mathematics, science, and
                  engineering high school in Rockaway, New Jersey. I love
                  learning new things and their applications in the real world.
                  Recently, I have begun to grow extremely interested in finance
                  and computer science.
                  <br /> <br />
                  I only recently started coding, and after gaining knowledge
                  about multiple types of development, I have realized that code
                  is only as powerful as what the developer plans to do with it.
                  I want to make an impact with my programming knowledge, and
                  soon I hope to do so.
                  <br />
                  <br />
                  When I'm not at school, or working on a project of some kind,
                  I have several hobbies that keep me occupied. I enjoy playing
                  the keyboard or drumset and love listening to jazz. I also
                  appreciate stand-up comedy and sitcoms. Occassionally I post
                  to my blog as well.
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Computer Science Courses</h1>

              <AboutInfoItem title="School" items={['AP Computer Science A']} />
              <AboutInfoItem
                title="Pluralsight"
                items={[
                  'Building Websites with HTML, CSS, and JavaScript: Getting Started',
                ]}
              />
              <AboutInfoItem
                title="Pluralsight"
                items={['Practical Python for Beginners']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Finance Courses</h1>

              <AboutInfoItem title="FBLA" items={['Accounting I']} />
              <AboutInfoItem title="FBLA" items={['Accounting II']} />
              <AboutInfoItem title="School" items={['Virtual Enterprise']} />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Front-End"
                items={['HTML', 'CSS', 'JavaScript', 'ReactJS']}
              />
              <AboutInfoItem
                title="Builders"
                items={[
                  'Wix',
                  'Weebly',
                  'WordPress',
                  'Squarespace',
                  'Google Sites',
                ]}
              />
              <AboutInfoItem
                title="Back-End"
                items={['PHP', 'SQL', 'Python', 'Java']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Volunteer Experience</h1>

              <AboutInfoItem
                title="7/21 - 10/21"
                items={[
                  'Course Architect & Lead Instructor - Pathways Electronics',
                ]}
              />
              <AboutInfoItem
                title="1/21 - 12/21"
                items={['Lead Instructor - Pathways CAD']}
              />
              <AboutInfoItem
                title="1/20 - 3/20"
                items={['Teen Library Volunteer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
