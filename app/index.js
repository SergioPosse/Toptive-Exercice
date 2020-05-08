import React from 'react';
import { render } from 'react-dom';
import Main from './Main';//import the Main component created wit react for render it

//render to my react div in public/index.html
render(<Main/>, document.getElementById('react'));