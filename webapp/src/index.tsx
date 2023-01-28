import React from 'react';
import { render } from 'react-dom';
import './assets/index.scss';

const Application: React.FC<unknown> = () => (
  <><h1>Welcome</h1><div>Template using React with Typescript</div></>
);

render(<Application />, document.getElementById('root'));
