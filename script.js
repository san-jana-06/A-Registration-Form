document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const output = document.getElementById('output');
    output.innerHTML = '';

    formData.forEach((value, key) => {
        output.innerHTML += `${key}: ${value}<br>`;
    });
});