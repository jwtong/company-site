import React from 'react'
import Grammarly from '../assets/svg/companies/Grammarly.svg'
import GitLab from '../assets/svg/companies/GitLab.svg'
import Facebook from '../assets/svg/companies/Facebook.svg'
import Tesla from '../assets/svg/companies/Tesla.svg'
import PayPal from '../assets/svg/companies/PayPal.svg'
import Uber from '../assets/svg/companies/Uber.svg'
import Google from '../assets/svg/companies/Google.svg'
import Etsy from '../assets/svg/companies/Etsy.svg'
import Twitch from '../assets/svg/companies/Twitch.svg'
import LinkedIn from '../assets/svg/companies/LinkedIn.svg'
import Wikipedia from '../assets/svg/companies/Wikipedia.svg'
import YouTube from '../assets/svg/companies/YouTube.svg'
import { Props as TechnologyCardProps } from '../components/TechnologyCard'

const techStack: TechnologyCardProps[] = [
  {
    category: 'Web Frontend Framework',
    title: 'Vue.js',
    description:
      "Vue is the fastest growing JavaScript frontend framework, and for good reason. It's flexible, scalable, highly performant, and a breeze to work with. Vue's comprehensive documentation and intuitive design make it easy to learn for most programmers. It boasts a rich ecosystem and engaged community around the world.",
    alternatives: 'React, Svelte',
    icon: {
      component: require('../assets/svg/devicon-master/icons/vuejs/vuejs-original.svg'),
      color: '#4fc08d',
    },
    companiesUsing: [
      {
        name: 'Grammarly',
        component: <Grammarly width="100%" height="45px" />,
      },
      {
        name: 'GitLab',
        component: <GitLab width="100%" height="50px" />,
      },
    ],
  },
  {
    category: 'Mobile Frontend Framework',
    title: 'React Native',
    description:
      'React Native emerged as the primary tool for building cross-platform (iOS & Android) mobile apps. Leveraging JavaScript, React Native allows developers to utilize a single codebase while rendering a native app experience to users.',
    alternatives: 'Swift, Java',
    icon: {
      component: require('../assets/svg/devicon-master/icons/react/react-original.svg'),
      color: '#61DAFB',
    },
    companiesUsing: [
      {
        name: 'Facebook',
        component: <Facebook width="100%" height="60px" />,
      },
      {
        name: 'Tesla',
        component: <Tesla width="100%" height="25px" />,
      },
    ],
  },
  {
    category: 'Backend Framework',
    title: 'Node.js',
    description:
      'Node.js offers some of the best performance and scalability among backend frameworks. An extensive library of well maintained packages, comprehensive platform integration, and abundance of developers familiar with JavaScript make Node a robust choice.',
    icon: {
      component: require('../assets/svg/devicon-master/icons/nodejs/nodejs-original.svg'),
      color: '#83CD29',
    },
    alternatives: '.NET Core, Ruby on Rails',
    companiesUsing: [
      {
        name: 'Uber',
        component: (
          <Uber
            width="100%"
            height="30px"
            style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}
          />
        ),
      },
      {
        name: 'PayPal',
        component: <PayPal width="100%" height="30px" />,
      },
    ],
  },
  {
    category: 'Cloud Hosting',
    title: 'Amazon Web Services',
    description:
      'Of the numerous hosting platforms available today, Amazon Web Services is the most mature and widely used. AWS is well tuned to manage any size application, from a school-project to a billion dollar company.',
    icon: {
      component: require('../assets/svg/devicon-master/icons/amazonwebservices/amazonwebservices-original.svg'),
      color: '#F7A80D',
    },
    alternatives: 'Microsoft Azure, Heroku',
    companiesUsing: [
      {
        name: 'Twitch',
        component: (
          <Twitch
            width="100%"
            height="30px"
            style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}
          />
        ),
      },
      {
        name: 'LinkedIn',
        component: <LinkedIn width="100%" height="30px" />,
      },
    ],
  },
  {
    category: 'Wireframing',
    title: 'Sketch',
    description:
      'Sketch is a powerful visual editing tool used to create mockups for mobile and web applications. Unlike the more traditional Photoshop, Sketch is well known for is simplicity and compatability with software engineering paradigms.',
    icon: {
      component: require('../assets/svg/devicon-master/icons/sketch/sketch-original.svg'),
      color: '#FB8333',
    },
    alternatives: 'Balsamiq, InVision',
    companiesUsing: [
      {
        name: 'Google',
        component: (
          <Google
            width="100%"
            height="40px"
            style={{ marginTop: '.75rem', marginBottom: '.75rem' }}
          />
        ),
      },
      {
        name: 'Etsy',
        component: <Etsy width="100%" height="40px" />,
      },
    ],
  },
  {
    category: 'Database Engine',
    title: 'MySQL',
    description:
      'MySQL holds the largest market share for relational database management systems. It is a stable, reliable, and powerful solution offering advanced features.',
    icon: {
      component: require('../assets/svg/devicon-master/icons/mysql/mysql-original.svg'),
      color: '#00618A',
    },
    alternatives: 'PostgreSQL, MongoDB',
    companiesUsing: [
      {
        name: 'Wikipedia',
        component: (
          <Wikipedia
            width="100%"
            height="30px"
            style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}
          />
        ),
      },
      {
        name: 'YouTube',
        component: <YouTube width="100%" height="30px" />,
      },
    ],
  },
]

export default techStack
