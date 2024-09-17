var _a;
function generatResume() {
    var _a;
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // For uploaded picture
    var pictureInput = document.getElementById('picture');
    var picture = (_a = pictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var imagePreview = "";
    if (picture) {
        var imageUrl = URL.createObjectURL(picture);
        console.log('Generated Image URL:', imageUrl); // Debugging
        imagePreview = "<img src=\"".concat(imageUrl, "\" style=\"max-width:150px\">");
    }
    else {
        console.log('No picture uploaded'); // Debugging
    }
    // Display resume in the output div
    document.getElementById('resumeOutput').innerHTML = "\n        ".concat(imagePreview, "\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
}
// Add event listener and call the function on form submit
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing
    generatResume(); // Call the function
});
