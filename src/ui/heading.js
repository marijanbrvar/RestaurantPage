import './styles/heading.css';

export default function heading() {
  const container = document.querySelector('.container');
  const heading = document.createElement('div');
  const tagline = document.createElement('p');
  const subhead = document.createElement('h2');
  heading.classList.add('heading');
  tagline.classList.add('tagline');
  tagline.innerText = 'Now available for "call and collect” and casual dining, from our new home in Belgrade Boulevard. While we await approval in restourant serving, you are free to use our garden!';
  subhead.innerText = 'Services';
  heading.appendChild(tagline);
  heading.appendChild(subhead);
  container.prepend(heading);
  return container;
}
