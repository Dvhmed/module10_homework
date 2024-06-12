const btn = document.querySelector('.btn');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');

btn.addEventListener('click', () => {
    icon1.style.display = icon1.style.display === 'none' ? 'flex' : 'none';
    icon2.style.display = icon2.style.display === 'flex' ? 'none' : 'flex';
  });