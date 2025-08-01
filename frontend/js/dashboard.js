fetch('http://localhost:5000/api/intern')
  .then(res => res.json())
  .then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("referralCode").textContent = data.referralCode;
    document.getElementById("donations").textContent = data.donations;
  });
