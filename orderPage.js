// Создаем глобальный массив orders
var orders = [];

function confirmOrder() {
    var product = document.getElementById('products').value;
    var quantity = document.getElementById('quantity').value;
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;

    var summary = 'Product: ' + product +
                  '\nQuantity: ' + quantity +
                  '\nName: ' + name +
                  '\nDelivery Address: ' + address;

    var confirmed = window.confirm(summary + '\n\nConfirm order?');
    if (confirmed) {
        // Create order object
        var order = {
            product: product,
            quantity: quantity,
            name: name,
            address: address
        };

        // Add new order to orders array
        orders.push(order);

        // Redirect to landing page
        window.location = 'landing.html';
    }
}

function cancelOrder() {
    if (window.confirm('Are you sure you want to cancel the order?')) {
        // Reset form fields
        document.getElementById('products').selectedIndex = 0;
        document.getElementById('quantity').value = '1';
        document.getElementById('name').value = '';
        document.getElementById('address').value = '';
    }
}

// Make orders array globally accessible
window.orders = orders;

function goBack(){
  window.location = 'landing.html'
}
