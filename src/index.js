import './ui/styles/reset.css';
import './ui/styles/main.css';

import heading from './ui/heading';
import tabs from './ui/tabs';
import home from './ui/home';
import contact from './ui/contact';
import delivery from './ui/delivery';
import Nav from './ui/nav';
import about from './ui/about';

tabs();
home();
about();
contact();
delivery();
heading();

const nav = new Nav(document.querySelector('.tabs'));
nav.init();