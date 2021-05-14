import AboutImage from '../about.jpeg';

export default function about() {
  const tab = document.querySelector('.tabs');
  const heading = document.createElement('div');
  const tagline = document.createElement('h2');
  const subhead = document.createElement('p');
  const image = document.createElement('img');
  const body = document.createElement('p');
  heading.id = 'about';
  heading.classList.add('content');
  tagline.classList.add('tagline');
  image.setAttribute('src', AboutImage);
  body.innerText = 'The Belgrader brand purpose is to Inspire Smiles Through Delightful Taste. Bg011\'s delivers on its purpose by celebrating the art of crave-able sides. BG011\'s restaurant services feature a unique blend of quick-serve speed combined with the quality and made-for-you care of fast casual.';
  subhead.innerText = 'Inspire Smiles Through Delightful Taste';
  tagline.innerText = 'Who we are and what we do';
  heading.appendChild(tagline);
  heading.appendChild(subhead);
  heading.appendChild(body);
  heading.appendChild(image);
  tab.append(heading);
  return tab;
}