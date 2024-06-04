var orders = [];

// Fetch data from logins.json
fetch('./logins.json')
    .then(response => {
        // Check if response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse response to JSON
        return response.json();
    })
    .then(data => {
        // Log data to console
        console.log(data);

        // Get first table from DOM
        const table1 = document.querySelector('#loginsTable');

        // Loop over each item in data
        data.forEach(item => {
            // Create new row
            const row = document.createElement('tr');

            // Add data to row
            row.innerHTML = `
                <td>${item.login}</td>
                <td>${item.name} ${item.surname}</td>
                <td>${item.email}</td>
            `;

            // Append row to table
            table1.appendChild(row);
        });

        // Fetch data from orders.json
        return fetch('./orders.json');
    })
    .then(response => {
        // Check if response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse response to JSON
        return response.json();
    })
    .then(data => {
        // Update orders array
        orders = data;

        // Update orders table
        updateOrdersTable();
    })
    .catch(error => {
        // Log error to console
        console.error('Error:', error);
    });

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

        // Update orders table
        updateOrdersTable();

        // Redirect to landing page
        window.location = 'landing.html';
    }
}

function updateOrdersTable() {
    // Get orders table from DOM
    const table2 = document.getElementById('ordersTable');

    // Clear existing table rows
    while (table2.rows.length > 1) {
        table2.deleteRow(1);
    }

    // Loop over each item in orders
    orders.forEach(item => {
        // Create new row
        const row = document.createElement('tr');

        // Add data to row
        row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.quantity}</td>
            <td>${item.name}</td>
            <td>${item.address}</td>
        `;

        // Append row to table
        table2.appendChild(row);
    });
}

function close(){
    window.location = 'landing.html'
}
