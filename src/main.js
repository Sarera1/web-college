import './styles/main.scss';
import './tw.css';
import { initThemeToggle } from './js/theme';

const html = document.documentElement;
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");


initThemeToggle();



console.log('start');