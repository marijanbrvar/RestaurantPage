export default function delivery() {
  const tab = document.querySelector('.tabs');
  const heading = document.createElement('div');
  const tagline = document.createElement('p');
  const subhead = document.createElement('h2');
  heading.id = 'delivery';
  heading.classList.add('content');
  tagline.classList.add('tagline');
  tagline.innerText = 'Delivery page';
  subhead.innerText = 'We can delivery anyhere you wish';
  heading.appendChild(tagline);
  heading.appendChild(subhead);
  tab.append(heading);
  return tab;
}