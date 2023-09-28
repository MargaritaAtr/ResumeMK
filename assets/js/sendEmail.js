function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "user_name": contactForm.name.value,
        "user_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}