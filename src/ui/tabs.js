import './styles/tab.css';

const itemsList = ['Menu', 'Delivery', 'About', 'Contact'];

export default function tabs() {
  const container = document.querySelector('.container');
  const tabs = document.createElement('div');
  const ul = document.createElement('ul');
  tabs.classList.add('tabs');
  tabs.id = 'tabs';
  tabs.append(ul);
  container.prepend(tabs);
  itemsList.forEach((item) => {
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerText = item;
    li.classList.add('trigger');
    li.setAttribute('data-target', `#${item.toLowerCase()}`);
    list.appendChild(li);
  });
  document.querySelector('li').classList.add('active');
  return container;
}