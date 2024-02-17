function handleSubmit() {
    var button = document.querySelector('.button');
    button.textContent = 'Loading...';
    button.disabled = true;
    setTimeout(function() {
        button.textContent = 'Submit';
        button.disabled = false;
    }, 2000);
}
