import Delivert from '../delivery.jpeg';

export default function delivery() {
  const tab = document.querySelector('.tabs');
  const heading = document.createElement('div');
  const tagline = document.createElement('h2');
  const subhead = document.createElement('p');
  const image = document.createElement('img');
  heading.id = 'delivery';
  heading.classList.add('content');
  tagline.classList.add('tagline');
  tagline.innerText = 'Delivery page';
  subhead.innerText = 'We can delivery anyhere you wish';
  image.setAttribute('src', Delivert);
  heading.appendChild(tagline);
  heading.appendChild(subhead);
  heading.appendChild(image);
  tab.append(heading);
  return tab;
}