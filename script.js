// script.js
document.addEventListener("DOMContentLoaded", function() {
        var form = document.querySelector("form");
      
        form.addEventListener("submit", function(event) {
          event.preventDefault();
          
          console.log("Form submitted!");
        });
      });
      