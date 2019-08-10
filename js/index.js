document.querySelector('.message-form input[type=submit]')
.addEventListener('click', submit);

function submit(ev) {
    debug;
    ev.preventDefault();
    fetch ('submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.querySelector('.message-form input[name=name]').value,
            email: document.querySelector('.message-form input[name=email]').value,
            message: document.querySelector('.message-form input[name=message]').value
        })
    })
    .then( _ => document.querySelector('.message-form').reset());
}