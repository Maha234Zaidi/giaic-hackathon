var _a;
(_a = document
    .getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var lastNameElement = document.getElementById("lastname");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var skillsElem = document.getElementById("skills");
    var experElement = document.getElementById("experience");
    var userNameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        lastNameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        skillsElem &&
        experElement &&
        userNameElement) {
        var name_1 = nameElement.value;
        var lastName = lastNameElement.value;
        var email = emailElement.value;
        var phoneNum = phoneElement.value;
        var education = educationElement.value;
        var skills = skillsElem.value;
        var experience = experElement.value;
        var username = userNameElement.value;
        var uniquiURL = "".concat(username.replace(/\s+/g, "_"), "_resume.html");
        var profilePicFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicPath = profilePicFile
            ? URL.createObjectURL(profilePicFile)
            : "";
        var resumeOutput = "<h2>Resume</h2>\n      ".concat(profilePicPath
            ? "<img src=\"".concat(profilePicPath, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n    <p><strong>First Name:</strong><span id = \"edit-name\" class = \"editable\"> ").concat(name_1, " </span> </p>\n    <p><strong>Last Name:</strong> <span id = \"edit-lname\" class = \"editable\"> ").concat(lastName, " </span> </p>\n     <p><strong>Email:</strong><span id =\"edit-email\" class=\"editable\">  ").concat(email, " </span> </p>\n     <p><strong>Contact No:</strong> <span id = \"edit-phone\" class = \"editable\"> ").concat(phoneNum, " </span> </p>\n     \n     <h2>Education</h2>\n     <p id =\"edit-education\" class =\"editable\">").concat(education, "</p>\n\n     <h2>Skills</h2>\n     <p id =\"edit-skills\" class =\"editable\">").concat(skills, "</p>\n\n     <h2>Experience</h2>\n     <p id =\"edit-experience\" class =\"editable\">").concat(experience, "</p>\n     ");
        var downloadLink = document.createElement("a");
        downloadLink.href =
            "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquiURL;
        downloadLink.textContent = "Download Your CV";
        downloadLink.style.textDecoration = "none";
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
            resumeOutputElement.appendChild(downloadLink);
        }
    }
    else {
        console.error("One or more output elements are missing!");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
                var input = document.createElement("input");
                input.type = "text";
                input.value = currentValue;
                input.classList.add("editing-input");
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
