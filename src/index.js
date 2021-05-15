import './ui/styles/reset.css';
import './ui/styles/main.css';

import Tabs from './ui/tabs';
import Menu from './ui/menu';
import Contact from './ui/contact';
import Delivery from './ui/delivery';
import Nav from './ui/nav';
import About from './ui/about';

Tabs();
Menu();
Delivery();
About();
Contact();

const nav = new Nav(document.querySelector('.tabs'));
nav.init();