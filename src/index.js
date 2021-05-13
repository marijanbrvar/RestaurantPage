import './ui/styles/main.css';
import Tooltip from './ui/tooltip';

// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();