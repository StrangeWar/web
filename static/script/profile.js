document.getElementById("logout-button").addEventListener("click", function () {
    // Clear user session (localStorage in this example)
    localStorage.removeItem("userToken"); // You can store a token or other data here.
    localStorage.removeItem("userDetails"); // You can store user details here.

    // Redirect the user to the login page
    window.location.href = "/login"; // Adjust the URL to match your login route.

    // Access the username and email from the HTML
    const username = document.getElementById("username").textContent;
    const email = document.getElementById("email").textContent;

    
});
