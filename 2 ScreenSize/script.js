const btn = document.querySelector('.alert-button');
btn.addEventListener ('click', () => {
    const width = window.screen.width;
    const height = window.screen.height;
    const browserWidth = window.innerWidth;
    const browserHeight = window.innerHeight;
    alert(`Ширина экрана девайса: ${width}px\nВысота экрана девайса: ${height}px\n
Ширина окна браузера: ${browserWidth}px\nВысота окна браузера: ${browserHeight}px`);
})

