    function getUserData() {
        var userId = document.getElementById("userId").value;
        if (userId >= 1 && userId <= 10) {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                var userInfo = document.getElementById("userInfo");
                userInfo.innerHTML = `
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Username:</strong> ${data.username}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                `;
            })
            .catch(error => console.error('Error fetching user data:', error));
        } else {
            alert("Введите число от 1 до 10");
        }
    }

    document.getElementById("userId").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            getUserData();
        }
    });
