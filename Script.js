document.querySelectorAll('.level').forEach(level => {
    level.addEventListener('click', function() {
        this.classList.toggle('blue');
    });
});
