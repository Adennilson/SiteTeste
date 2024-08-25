document.querySelector('.carta').addEventListener('click', function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = '#' + randomColor;
});
