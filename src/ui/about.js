export default function about() {
  const container = document.querySelector('.container');
  const heading = document.createElement('div');
  const tagline = document.createElement('p');
  const subhead = document.createElement('h2');
  heading.id = 'about';
  heading.classList.add('content', 'active');
  tagline.classList.add('tagline');
  tagline.innerText = 'About page';
  subhead.innerText = 'Dauily offer';
  heading.appendChild(tagline);
  heading.appendChild(subhead);
  container.prepend(heading);
  return container;
}