export default function contact() {
  const tab = document.querySelector('.tabs');
  const heading = document.createElement('div');
  const tagline = document.createElement('p');
  const subhead = document.createElement('h2');
  heading.id = 'contact';
  heading.classList.add('content');
  tagline.classList.add('tagline');
  tagline.innerText = 'Contact page';
  subhead.innerText = 'You can contact us at';
  heading.appendChild(tagline);
  heading.appendChild(subhead);
  tab.append(heading);
  return tab;
}