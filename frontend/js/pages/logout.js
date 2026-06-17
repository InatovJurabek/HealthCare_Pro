const logoutBtn = document.getElementById("logout-btn");
console.log(logoutBtn);



if (logoutBtn) {
  logoutBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Logout bosildi.");

    try {
      const response = await fetch("http://127.0.0.1:5000/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });

      const data = await response.json();
      console.log(data.message);

      clearTokens();
      window.location.href = "auth.html";
    } catch (error) {
      console.error("Logout xatosi:", error);
    }
  });
}