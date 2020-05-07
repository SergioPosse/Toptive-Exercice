import React from 'react';

import { render } from 'react-dom';

import Main from './Main';
import Menu from './Main';
import Footer from './Main';

render(<Main/>, document.getElementById('main'));
render(<Menu/>, document.getElementById('menu'));
render(<Footer/>, document.getElementById('footer'));