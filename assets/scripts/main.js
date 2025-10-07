import layout from './components/layout.js';
const app = document.querySelector('#app');
app.innerHTML = `<div class="container-sm app-container ">${layout('header', 'main', 'footer')}</div>`;
