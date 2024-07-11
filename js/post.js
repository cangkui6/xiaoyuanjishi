
    document.querySelectorAll('.color-options .color').forEach(color => {
        color.addEventListener('click', function() {
            const duration = this.getAttribute('data-duration');
            const price = this.getAttribute('data-price');
            document.getElementById('selected-info').innerHTML = `${duration}<br>${price}`;
        });
    });
