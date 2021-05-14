export default function about() {
  const tab = document.querySelector('.tabs');
  const heading = document.createElement('div');
  const tagline = document.createElement('p');
  const subhead = document.createElement('h2');
  heading.id = 'about';
  heading.classList.add('content');
  tagline.classList.add('tagline');
  tagline.innerText = 'About page';
  subhead.innerText = 'Dauily offer';
  heading.appendChild(tagline);
  heading.appendChild(subhead);
  tab.append(heading);
  return tab;
}