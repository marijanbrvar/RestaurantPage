import ContactUsImage from '../contactus.jpeg';

export default function contact() {
  const tab = document.querySelector('.tabs');
  const heading = document.createElement('div');
  const tagline = document.createElement('h2');
  const subhead = document.createElement('p');
  const body = document.createElement('p');
  const image = document.createElement('img');
  heading.id = 'contact';
  heading.classList.add('content');
  tagline.classList.add('tagline');
  image.setAttribute('src', ContactUsImage);
  tagline.innerText = 'CONTACT US';
  subhead.innerText = 'WE MAKE IT RIGHT';
  body.innerText = 'Comments, questions or need information? Whatever your reason for contacting us, we are committed to ensuring you receive the best customer service. Contact us today so we can Make it Right.';
  heading.appendChild(tagline);
  heading.appendChild(subhead);
  heading.appendChild(body);
  heading.appendChild(image);
  tab.append(heading);
  return tab;
}