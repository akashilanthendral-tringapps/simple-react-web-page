import React from 'react';

import { Layout } from '../layout';

const lorem =
  'This is a simple react login webpage...';

const elements = [
  'one'
];

const About = () => (
  <Layout>
    <h1 className='text-2xl'>About Page</h1>
    <ul>
      {elements.map((value, index) => {
        return (
          <li key={index} className='p-5'>
             {lorem}
          </li>
        );
      })}
    </ul>
  </Layout>
);

export default About;
