document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const experience = document.getElementById("experience").value;
  
    // Generate resume HTML
    const resumeHTML = `
      <h2>${fullName}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Address: ${address}</p>
      <h3>Experience:</h3>
      <p>${experience}</p>
    `;
  
    // Display generated resume
    document.getElementById("resumeOutput").innerHTML = resumeHTML;
  });
  