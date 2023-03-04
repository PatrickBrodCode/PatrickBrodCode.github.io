/*
Patrick Broderick
ID - 100689179
Email: Patrick.Broderick@dcmail.ca
2/12/2023
Lab 2 WEB3201-CLIENT SIDE SCRIPTING
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
//
// Create Navbar Bottom

// READ ME 
/*
Deleted a chunk of code for inserting human resources into top nav bar
Also removed function for inserting into "projects" into products navbar element
These were required for lab 1, but is messing with new code I am trying to implement 
*/
// READ ME ^

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
// create login.html and register.html dynamically
registerNavItem = document.createElement("a");
loginNavItem = document.createElement("a");




// x = $('.card-text');
// x.text("One practice tutorial we have done so far in our OOP 3 Class");
// query selector getting class names of elements and setting the text content to a hardcoded string.
var projectContent = document.querySelectorAll(".card-text");
var projectHeader = document.querySelectorAll(".card-header");
var projectTitle = document.querySelectorAll(".card-title");

// ---- Variables being set to different strings ----
///projectTitle[1].textContent = "WEBD";
//projectTitle[2].textContent = "FiveM!";
//projectContent[2].textContent = "I am currently practicing my coding abilities on a video game called FiveM, it uses lua programming  to run scripts within the game of GTA V!!!!!!";
//projectContent[0].textContent = " This is my OOP practice code snippet! I very much enjoyed getting back into OOP this year as I had to take a lap year and didnt get to do much ";
//projectContent[1].textContent = " This is a snippet of this current assignment I am working on, its been pretty fun to try different things out with JS, Jquery and using github! fun!!";

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
/***
 *    $$\           $$\               $$\                    $$\               $$$$$$\   $$$$$$\           $\    
 *    $$ |          $$ |            $$$$ |                   $$ |             $$  __$$\ $$  __$$\         $$$\   
 *    $$ | $$$$$$\  $$$$$$$\        \_$$ |         $$$$$$$\$$$$$$\  $$\   $$\ $$ /  \__|$$ /  \__|       $$ $$\  
 *    $$ | \____$$\ $$  __$$\         $$ |        $$  _____\_$$  _| $$ |  $$ |$$$$\     $$$$\           $$  \$$\ 
 *    $$ | $$$$$$$ |$$ |  $$ |        $$ |        \$$$$$$\   $$ |   $$ |  $$ |$$  _|    $$  _|          \__/ \__|
 *    $$ |$$  __$$ |$$ |  $$ |        $$ |         \____$$\  $$ |$$\$$ |  $$ |$$ |      $$ |                     
 *    $$ |\$$$$$$$ |$$$$$$$  |      $$$$$$\       $$$$$$$  | \$$$$  \$$$$$$  |$$ |      $$ |                     
 *    \__| \_______|\_______/       \______|      \_______/   \____/ \______/ \__|      \__|                     
 *                                                                                                               
 *                                                                                                               
 *                                                                                                               
 */
/***
 *     /$$           /$$              /$$$$$$                   /$$                /$$$$$$  /$$$$$$       
 *    | $$          | $$             /$$__  $$                 | $$               /$$__  $$/$$__  $$      
 *    | $$  /$$$$$$ | $$$$$$$       |__/  \ $$        /$$$$$$$/$$$$$$   /$$   /$$| $$  \__/ $$  \__/      
 *    | $$ |____  $$| $$__  $$        /$$$$$$/       /$$_____/_  $$_/  | $$  | $$| $$$$   | $$$$          
 *    | $$  /$$$$$$$| $$  \ $$       /$$____/       |  $$$$$$  | $$    | $$  | $$| $$_/   | $$_/          
 *    | $$ /$$__  $$| $$  | $$      | $$             \____  $$ | $$ /$$| $$  | $$| $$     | $$            
 *    | $$|  $$$$$$$| $$$$$$$/      | $$$$$$$$       /$$$$$$$/ |  $$$$/|  $$$$$$/| $$     | $$            
 *    |__/ \_______/|_______/       |________/      |_______/   \___/   \______/ |__/     |__/            
 *    ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓                                                                                                    
 *                                                                                                        
 *                                                                                                        
 */

/*
Patrick Broderick
ID - 100689179
Email: Patrick.Broderick@dcmail.ca
2/12/2023
Lab 2 WEB3201-CLIENT SIDE SCRIPTING
*/
// Error DIV
const elem = document.createElement('div');
elem.style.cssText = 'position: absolute; width: 100ppx; border-style: solid; height: 50px; z-index:100; background: red; border-color: black; border-width: 1px;';
elem.textContent = ""
document.body.appendChild(elem);
elem.id = "ErrorMessage";


// registration function that gets called onclick
function registerFunction()
{
   // User Class 
   class user{
      constructor(first,last,password,email)
      {
         this.first = first;
         this.last = last;
         this.email = email;
         this.password = password;
   
      }
      // method for returning a string of the user object information
      stringUserInfo(){
         var userInfoString; 
         userInfoString = " First name:  " + this.first + " Last Name: " + this.last + " Email: " + this.email + " password: " + this.password;
         console.log(userInfoString); 
      }
   };
   // get variables 
   var firstname          =   $('#registerFirst').val();
   var lastname           =   $('#registerLast').val();
   var email              =   $('#registerEmail').val();
   var password           =   $('#password').val();
   var confirmPassword    =   $('#confirmPass').val();
   var textLength         =   firstname;
   var textLength2        =   lastname;
   var textLength3        =   email;
   var textLength4        =   password;  
   var textLength5        =   confirmPassword;
   var isValid            =   false;
   var registerForm       =   document.getElementById("registerForm");
   var validationLabel    =   $(".validationLabel");
   
   // x = $(".services-title");
   // x.text("Services and Skills Page");
   // check if first name and password are longer than two characters.
   // prevent default event 
   
   // Validation based upon lab 2 requirments
   if(textLength.length < 2 || textLength2.length < 2)
   {
      elem.textContent = "Please Ensure Youre first name is greater than 1 character ";
   }
   else if(textLength3.length < 8 || textLength3.includes("@") == false) 
   {
      elem.textContent= "Please ensure your email is greater than 8 characters and that it is a properly formatted email";
   }
   else if(textLength4.length < 6 || textLength4 != textLength5 )
   {
      elem.textContent= "Please ensure that your passwords are matching and are greater than 5 characters";      
   }
   else{
      isValid = true;
      elem.textContent = "";
      // reset hidden DIV
   }
   
   
   // ensure email has a @ symbol and minimum length is 8
   
   // ensure passwords are matching and greater than 6 characters
   
   // after validation create a user object with information
   // create a new user
   if(isValid == true)
   {
      const newUser = new user(firstname, lastname,password,email);
      // call class method to log user information to console
      newUser.stringUserInfo();
   
      
      
      registerForm.reset();
   }
   else{
      // do nothing
   }
   
};

function loginFunction()
{
   // navbar-nav mr-auto is class name of ul
   // Grab Username and Password Information 
   var username = $('#userNameLogin').val();
   var password = $('#passwordLogin').val();
   //create a new element li with class name nav-item 
   newList = document.createElement("li");
   newList.className = "nav-item"; 
   // create a new <a> element with class nav-link and text of password variable
   newAElement = document.createElement('a');
   newAElement.className = "nav-link";
   newAElement.textContent = username;
   // append both elements to element of clas name navbar-nav mr-auto
   navbarlist = document.getElementsByClassName("navbar-nav mr-auto");
   navbarlist[2].appendChild(newList);
   newList.appendChild(newAElement);
   


};
