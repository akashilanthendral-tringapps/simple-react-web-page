import React from 'react';

import { Layout } from '../layout';

const Contact = () => (
  <Layout>
    <h1 className='text-2xl'>Contact Page</h1>
    <form className='flex flex-col space-y-5 w-1/2 m-auto'>
      <div>
        <label> Name: </label>
        <input className='p-2 rounded' type='text' />
      </div>
      <div>
        <label> E-mail: </label>
        <input className='p-2 rounded' type='email' />
      </div>
      <div>
        <label> Message: </label>
        <textarea className='p-2 rounded' type='text' />
      </div>
      <button style={{backgroundColor:'#fff'}}>
        Send
      </button>
    </form>
  </Layout>
);

export default Contact;
