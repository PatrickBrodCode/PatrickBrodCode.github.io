/*
Patrick Broderick
ID - 100689179
Email: Patrick.Broderick@dcmail.ca
2/12/2023
*/


/*
Setting content of my different pages using jquery
This is used by class name and editng the text within it
*/
x = $('.indexContent');
x.text("Welcome to my Lab 1 for my Web development class - WEBD6201 - Client Side Scripting. Please click any of the links above to explore the webpage");

x = $('.projectsContent');
x.text("This is a list of my favourite projects I have done within my years at Computer Programming.");

x = $('.aboutContent');
x.text("This is an about page, I was supposed to have a partner but unfortunatley couldn't find one. So instead Ill tell you about myself. I am a 22 year old that is very interested in programming and learning different aspects of how technology works." +
" I try every day to learn something new in hopes that one day I can do this professionally and have a good living. Unfortunatley I'm really bad at css and formatting websites to look nice.");
x = $('.contactContent');
x.text("hello world");
x = $('.aboutEmail');
x.text("patrick.broderick@dcmail.ca \n Dont have a linkable resume at the moment");
x = $('.productsContent');
x.text("hello world");

x = $('.servicesContent');
x.text("I am most skillfull in backend languages like python, c++, C# etc \n this is mainly because I find the backend of things alot more interesting then formatting front end designs and other things of that nature. I really have no interest in doing that at all as you can probably see!");

x = $('.about-title');
x.text("My About Page:");

x = $('.card-title');
x.text("OOP3 Project");

x = $(".services-title");
x.text("Services and Skills Page");

x = $(".servicesSkills");
x.text(" My Skills include (Python , Lua Scripting, \n C# using the .NET framework and UNITY)");
// Replacing products nav item with project title and href link

navbarItems = document.getElementsByClassName("nav-link");
navbarItems[3].textContent = "Projects";
navbarItems[3].setAttribute('href', 'projects.html');
// add human resources into navbar
navbarItems[1].textContent = "Human Resources";
navbarItems[1].setAttribute('href','humanresources.html');
// Create Navbar Bottom

navbarBottom = document.createElement("nav");
// create anchor element 
navbarBottomContent = document.createElement("a");
// editing class of bottom navbar and anchor tag
navbarBottom.className = "navbar fixed-bottom navbar-light bg-light";
navbarBottomContent.className = "navbar-brand";
navbarBottomContent.textContent = "© Copyright 2023 - Patrick Broderick";
// append navbar to the body, 
document.body.appendChild(navbarBottom);
// append anchor tag to navbar
navbarBottom.appendChild(navbarBottomContent);


// x = $('.card-text');
// x.text("One practice tutorial we have done so far in our OOP 3 Class");
// query selector getting class names of elements and setting the text content to a hardcoded string.
var projectContent = document.querySelectorAll(".card-text");
var projectHeader = document.querySelectorAll(".card-header");
var projectTitle = document.querySelectorAll(".card-title");

// ---- Variables being set to different strings ----
projectTitle[1].textContent = "WEBD";
projectTitle[2].textContent = "FiveM!";
projectContent[2].textContent = "I am currently practicing my coding abilities on a video game called FiveM, it uses lua programming  to run scripts within the game of GTA V!!!!!!";
projectContent[0].textContent = " This is my OOP practice code snippet! I very much enjoyed getting back into OOP this year as I had to take a lap year and didnt get to do much ";
projectContent[1].textContent = " This is a snippet of this current assignment I am working on, its been pretty fun to try different things out with JS, Jquery and using github! fun!!";

// function from https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
// function lets you input how many miliseconds the program will wait for.
function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
// submit button is used when you put your information into the form, no validation is present because nothing said to!
/*
Gets grabs information from texts inputs
Prints the information in the console 
Timer for 3 seconds then redirects/changes href to index.html

*/ 
function submitButton()
{
   var email = $('#email').val();
   var contactNumber = $('#contact-number').val();
   var message = $('#message').val();
   var name = $('#name').val();
   
   console.log(name + contactNumber + email + message );
   wait(3000);
   window.location.href = 'index.html';
   
   
}
