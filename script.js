const header = document.querySelector('header h1');
header.addEventListener('mouseover', function() {
    this.style.color = 'blue';
});

header.addEventListener('mouseout', function() {
    this.style.color = '#333';
});