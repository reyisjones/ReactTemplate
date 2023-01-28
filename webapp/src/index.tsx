import React from 'react';
import { render } from 'react-dom';
import './assets/index.scss';


const Application: React.SFC<{}> = () => (
  <h1>Welcome</h1>
);

render(<Application />, document.getElementById('root'));
