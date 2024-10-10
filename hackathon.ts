document
  .getElementById("resumeform")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const lastNameElement = document.getElementById(
      "lastname"
    ) as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const skillsElem = document.getElementById("skills") as HTMLTextAreaElement;
    const experElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;

    const userNameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;

    if (
      profilePictureInput &&
      nameElement &&
      lastNameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      skillsElem &&
      experElement &&
      userNameElement
    ) {
      const name = nameElement.value;
      const lastName = lastNameElement.value;
      const email = emailElement.value;
      const phoneNum = phoneElement.value;
      const education = educationElement.value;
      const skills = skillsElem.value;
      const experience = experElement.value;

      const username = userNameElement.value;
      const uniquiURL = `${username.replace(/\s+/g, "_")}_resume.html`;

      const profilePicFile = profilePictureInput.files?.[0];
      const profilePicPath = profilePicFile
        ? URL.createObjectURL(profilePicFile)
        : "";

      const resumeOutput = `<h2>Resume</h2>
      ${
        profilePicPath
          ? `<img src="${profilePicPath}" alt="Profile Picture" class="profilePicture">`
          : ""
      }
    <p><strong>First Name:</strong><span id = "edit-name" class = "editable"> ${name} </span> </p>
    <p><strong>Last Name:</strong> <span id = "edit-lname" class = "editable"> ${lastName} </span> </p>
     <p><strong>Email:</strong><span id ="edit-email" class="editable">  ${email} </span> </p>
     <p><strong>Contact No:</strong> <span id = "edit-phone" class = "editable"> ${phoneNum} </span> </p>
     
     <h2>Education</h2>
     <p id ="edit-education" class ="editable">${education}</p>

     <h2>Skills</h2>
     <p id ="edit-skills" class ="editable">${skills}</p>

     <h2>Experience</h2>
     <p id ="edit-experience" class ="editable">${experience}</p>
     `;

      const downloadLink = document.createElement("a");
      downloadLink.href =
        "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
      downloadLink.download = uniquiURL;
      downloadLink.textContent = "Download Your CV";

      downloadLink.style.textDecoration = "none";

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();

        resumeOutputElement.appendChild(downloadLink);
      }
    } else {
      console.error("One or more output elements are missing!");
    }
  });

function makeEditable() {
  const editableElements = document.querySelectorAll(".editable");
  editableElements.forEach((element) => {
    element.addEventListener("click", function () {
      const currentElement = element as HTMLElement;
      const currentValue = currentElement.textContent || "";

      if (currentElement.tagName === "P" || currentElement.tagName === "SPAN") {
        const input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing-input");

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus();
      }
    });
  });
}
