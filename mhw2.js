function showTextAndImage() {
    const testo = document.getElementById('altro');

    if (testo.style.display === 'none') {
        testo.style.display = 'block';
    }
    else {
        testo.style.display = 'none';
    }

    const container = document.getElementById('leggi-di-piu');

    if (!container.querySelector('img')) {
        const image = document.createElement('img');
        image.src = 'https://images.unsplash.com/photo-1690654008678-b4ee50220b0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbiUyMHNpcm98ZW58MHx8MHx8fDA%3D';
    
    image.alt = 'San Siro 1926';

    container.appendChild(image);
    }
}

document.getElementById('leggiButton').addEventListener('click', showTextAndImage);