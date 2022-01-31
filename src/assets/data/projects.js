import { v4 as uuidv4 } from 'uuid';
import PortfolioImg from '../images/sehajmunot.me.png';
import BlogImg from '../images/the-hedgehog-blog.png';
import steamwithag from '../images/steamwithag.png';
import mhfbla from '../images/mhfbla.png';
import librarycli from '../images/librarycli.png';
import phpform from '../images/phpform.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Sehaj Munot - Portfolio',
    desc:
      'A personal portfolio website for myself. www.sehajmunot.me/',
    img: PortfolioImg,
  },
  {
    id: uuidv4(),
    name: 'The Hedgehog Blog',
    desc:
      'A blog for myself where I talk about finance and computer science. munotsehaj.github.io/',
    img: BlogImg,
  },
  {
    id: uuidv4(),
    name: 'STEAM with a G',
    desc:
      'Built a website for STEAM with a G using Weebly. steamwithag.weeblysite.com/',
    img: steamwithag,
  },
  {
    id: uuidv4(),
    name: 'MH FBLA',
    desc:
      'Built a website for the Morris Hills FBLA Chapter using Wix. mhfbla.wixsite.com/mhfbla',
    img: mhfbla,
  },
  {
    id: uuidv4(),
    name: 'Library CLI',
    desc:
      'Uses Java and MySQL to hold the inventory of a library and simulate users. github.com/SaakshiMunot/library-cli',
    img: librarycli,
  },
  {
    id: uuidv4(),
    name: 'PHP Form',
    desc:
      'Uses PHP and MySQL through XAMPP to create a contact form that can display info in a PDF. github.com/munotsehaj/php-form',
    img: phpform,
  },
];

export default projects;
