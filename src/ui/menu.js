import './styles/content.css';
import Hcs from '../hcs.jpg';

const menuItems = [
  {
    name: 'Chicken Salad BLT',
    text: 'Your choice of any chicken salad with crispy bacon, fresh lettuce, and sliced tomato.',
  },
  {
    name: 'Pimento Cheese BLT',
    text: 'Our traditional or spicy pimento cheese, crispy bacon, fresh lettuce, & sliced tomato.',
  },
  {
    name: 'Turkey Club',
    text: 'Oven roasted turkey breast, crispy bacon, provolone, honey mustard, fresh lettuce, & sliced tomato.',
  },
  {
    name: 'Turkey Pesto',
    text: 'Oven roasted turkey breast, provolone, fresh lettuce, sliced tomato, & pesto mayonnaise.',
  },
];

export default function menu() {
  const tab = document.querySelector('.tabs');
  const heading = document.createElement('div');
  const tagline = document.createElement('h2');
  const subhead = document.createElement('p');
  const image = document.createElement('img');
  heading.id = 'menu';
  heading.classList.add('content', 'active');
  tagline.classList.add('tagline');
  tagline.innerText = 'Chicken salad is back';
  subhead.innerText = 'Tender chicken, sliced grapes, crunchy pecans. Whoa… that\'s everything you wanted in a summertime sandwich.';
  image.setAttribute('src', Hcs);
  heading.appendChild(tagline);
  heading.appendChild(subhead);
  heading.appendChild(image);
  menuItems.forEach((item) => {
    const menuItem = document.createElement('div');
    const menuTitle = document.createElement('h4');
    const menuText = document.createElement('p');
    menuItem.classList.add('menu-item');
    menuTitle.innerText = item.name;
    menuText.innerText = item.text;
    menuItem.appendChild(menuTitle);
    menuItem.appendChild(menuText);
    heading.appendChild(menuItem);
  });
  tab.append(heading);
  return tab;
}