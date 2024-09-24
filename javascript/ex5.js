<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch and Display Users</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            background-color: #f0f0f0;
            margin: 10px 0;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>

<h1>User List</h1>
<ul id="userList"></ul>

<script>
    // Function to fetch user data and display it
    function fetchAndDisplayUsers() {
        // Fetch data from the API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) // Parse the JSON data
            .then(users => {
                // Get the user list element
                const userList = document.getElementById('userList');

                // Loop through each user and create list items
                users.forEach(user => {
                    // Create a list item for each user
                    const listItem = document.createElement('li');

                    // Construct the user's address
                    const address = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

                    // Set the content of the list item
                    listItem.innerHTML = `<strong>Name:</strong> ${user.name} <br>
                                          <strong>Email:</strong> ${user.email} <br>
                                          <strong>Address:</strong> ${address}`;

                    // Append the list item to the user list
                    userList.appendChild(listItem);
                });
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    // Call the function to fetch and display the users when the page loads
    fetchAndDisplayUsers();
</script>

</body>
</html>
