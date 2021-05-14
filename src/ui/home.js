export default function contact() {
  const tab = document.querySelector('.tabs');
  const heading = document.createElement('div');
  const tagline = document.createElement('p');
  const subhead = document.createElement('h2');
  heading.id = 'home';
  heading.classList.add('content', 'active');
  tagline.classList.add('tagline');
  tagline.innerText = 'Home page';
  subhead.innerText = 'Welcome';
  heading.appendChild(tagline);
  heading.appendChild(subhead);
  tab.append(heading);
  return tab;
}