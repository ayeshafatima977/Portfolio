
/*---------------To activate the collapsible buttons--------------------*/
/*Demonstration : Input: First we are assigning variable coll which saves all of the elements with class collapsible into it. 
Purpose:To make the collapsible button work ,we add an onclick event listener to all the content panels and attribute a function to the click event 
and what the function does is that it toggles between adding and removing active class so that we can highlight the button that controls the content panel
the second thing the function does is that if the content panel is visible it will hide the content,if a panel is hidden and when the user clicks on it it gets displayed,and if the panel is displayed and we click on it again then it gets hidden away.
Output:To toggle between collapsible buttons to show or hide content*/
//Source:https://www.w3schools.com/howto/howto_js_collapsible.asp

/* Borrowed Snippet starts*/
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    //It selects the content of the next Element sibling after the collapsible class
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    }
    else {
      content.style.display = "block";
    }
  });
}
/*Borrowed Snippet Ends*/


/*-----------------To pop-up our Contact Form-------------------------- */
/*Input:We would need an event listener to listen to users action 
Purpose:To have our contact form pop-up when user clicks on the envelope icon.When user clicks the envelope icon JavaScript listens for the action and look for class with popupForm
It goes to the stylesheet and change the display from none to flex when it clicked on.In order to close the form another event listener was added such that when user clicks the close icon (X)
It changes the .style property to display none property and hence nothing will be displayed until user again clicks the envelope icon*/

document.getElementById('btn').addEventListener('click', () => {

  // Go to style sheet and change the display from none to flex
  document.querySelector('.popupForm').style.display = 'flex'
}
);
document.querySelector('.close').addEventListener('click', () => {
  //Go to the stylesheet grab .popupForm and change .style property called display to none
  document.querySelector('.popupForm').style.display = 'none'
});

/*---------------Contact Form Validation--------------------------*/

/* Input: First declaring all the global variables described in the form and calling them by their respective id's used when creating teh form in index.HTML
Purpose:Then we add a submit event listener i.e when the user clicks submit button following function within the event listener will be executed to validate the email for any kinds of errors or to filter out the message if it contains swearwords.
Firstly,we split the whole user input (containing name,email,subject,message) so to compare the array of text with the given list of swearwords.
An indexOf Method is used to compare the strings that would return the first index at which a given element can be found in the array, or -1 if it is not present.
Once each element in the input is checked if any swear words is found in user input or if any field is left blank or doesn't match the given mail format it will display the errors in the form of an unordered list at once
If the user input is free of any errors or doesn't contain any swear words sendMail() function is called upon.
The sendMail() function uses mailto link so that when user enters the information in the contact form and clicks the sendMail button it would auto populate fields (with the information entered by user in contact form) for the user such as subject ,email address and message in users selected default browser.
Output:This function would validate user input using JavaScript before it open’s the user’s email client to send the form.
*/

const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const form = document.getElementById('myForm');
let flag = 0;
let swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let tempMessage = message.value.toLowerCase();
  let messageArray = tempMessage.split(" ");
  let nameArray = name.value.split(" ");
  let subjectArray = subject.value.split(" ");
  let emailArray = email.value.split(" ");
  let errorMsg = [];
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (name.value == '') {
    flag++;
    errorMsg.push("Please Enter Full Name");
  }
  if ((email.value == '') || (!email.value.match(mailFormat))) {
    flag++;
    errorMsg.push("Please Enter a valid Email");
  }
  if (subject.value == '') {
    flag++;
    errorMsg.push("Please Enter Subject");
  }
  if (message.value == '') {
    flag++;
    errorMsg.push("Please Enter a message");
  }

  for (word of swearWords) {
    if ((messageArray.indexOf(word)) != -1 || (nameArray.indexOf(word) != -1) || (subjectArray.indexOf(word) != -1) || (emailArray.indexOf(word) != -1)) {
      //checks for every word in message array for swear words
      flag++;
      errorMsg.push("Your inputs contain Bad Words,Please use only professional language");
    }
  }
  //if no swearWords found it will execute send mail function
  if (flag == 0) {
    sendMail();
  }

  //Function to display all the errorMessages in list
  let messageHtml = "";
  errorMsg.forEach(function (errors) {
    messageHtml += "<li>" + errors + "</li>";
  });
  document.getElementById("error").innerHTML = messageHtml;
}
);

function sendMail() {
  let link = "mailto:ayeshafakeemail@gmail.com"
    + "?subject=" + encodeURIComponent(document.getElementById('subject').value)
    + "&body=" + encodeURIComponent(document.getElementById('message').value);
  window.location.href = link;
}

/*---------------To activate the Print Icon -------------------*/

/*Input: Adding an event listener and calling the element by its Id.A prebuilt-command window.print() is used in JS to have the user print the resume
Purpose:When user clicks the print button JS listens for the action and 
Output would be user can print the resume when print button is clicked.
*/
document.getElementById('printResume').addEventListener("click", () => {
  window.print();
});
