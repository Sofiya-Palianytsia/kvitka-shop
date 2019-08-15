const cart = new Cart($('#cartModal'));
const productList = new ProductList(
  'products.json',
  $('.products-container'),
  cart
);

//Form
document.querySelector('.message-form input[type=submit]')
.addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch ('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           name: document.querySelector('.message-form input[name=name]').value,
           email: document.querySelector('.message-form input[name=email]').value,
           message: document.querySelector('.message-form textarea[name=message]').value
       })
    })
    .then( _ => document.querySelector('.message-form').reset());
}
