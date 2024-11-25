function isAlpha(e) {
    var key;       
    if (window.event) { 
        key = window.event.keyCode;  
    } else { 
        key = e.which;       
    }

    if (!((key > 64 && key <= 90) || (key > 96 && key <= 122) || (key == 32) || (key == 46))) { 
        showErrorMessage("Please Enter Only the Alphabets");
        return false; 
    }
}

function showErrorMessage(message) {
    // Here, you could display a modal or use a toast notification.
    // For example, using a simple div for error message display:
    var errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.innerText = message;
    document.body.appendChild(errorDiv);

    // Optionally, auto-remove after 5 seconds
    setTimeout(function() {
        document.body.removeChild(errorDiv);
    }, 5000);
}

     
            function isNumberKey(evt)
            {
             var charCode = (evt.which) ? evt.which : event.keyCode
             if (charCode > 31 && (charCode < 48 || charCode > 57) )
             {  
                showErrorMessage("Please enter only numbers");
                return false;
              }
             return true;
            }
      
            function isNumberKey1(evt)
            {
             var charCode = (evt.which) ? evt.which : event.keyCode
          
             if (charCode > 31 && (charCode <= 44 || charCode > 57 || charCode==46 || charCode==47))
             {  
                showErrorMessage("Please enter only numbers");
                return false;
              }
             return true;
            }
      
      
      function validateAddress(e) 
      { 
        var key;       
        if(window.event) 
        { 
            key = window.event.keyCode; //IE 
        } 
        else 
        { 
            key = e.which; //firefox       
        } 
        if (!((key >64 && key <=90) || (key >96 && key <=122) ||( key ==32) ||(key ==35)||(key ==47)||(key >47 && key <=57) || ( key ==8)||( key == 0)||(key==127) ||(key==44) ||(key==46)||(key==45)||(key==40)||(key==41)))
        { 
           
            return false; 
        } 
       }
     
    function alphacaps(e) 
    { 
        var key;       
        if(window.event) 
        { 
            key = window.event.keyCode; //IE 
        } 
        else 
        { 
            key = e.which; //firefox       
        } 
        if (!((key >=65 && key <=90)||(key >=97&& key <=122)||(key ==32)|| (key ==46) ) )
        { 
           
            return false; 
        }
    }

    function alphanumercicaps(e) {
        var key;
        if (window.event) {
            key = window.event.keyCode; //IE 
        }
        else {
            key = e.which; //firefox       
        }
        if (!((key >= 65 && key <= 90) || (key >= 96 && key <= 122) || (key >= 48 && key <= 57))) {

            return false;
        }
    }

    function showErrorMessage(message, element) {
        // Create an inline error message or use a notification library
        const errorContainer = document.createElement('div');
        errorContainer.className = 'error-message'; // Add appropriate CSS for styling
        errorContainer.innerText = message;
    
        // Append the error message next to the textbox
        const parent = element.parentNode;
        if (!parent.querySelector('.error-message')) {
            parent.appendChild(errorContainer);
        }
    
        // Clear the error message after 3 seconds
        setTimeout(() => {
            if (errorContainer.parentNode) {
                errorContainer.parentNode.removeChild(errorContainer);
            }
        }, 3000);
    
        element.value = ""; // Reset the value
        element.focus(); // Refocus the element
    }
    
    function isUnderLimit(txtbox, maxValue) {
        if (parseInt(txtbox.value, 10) > maxValue) {
            const message = `Marks should be less than or equal to ${maxValue}`;
            showErrorMessage(message, txtbox);
        }
    }
    
    // Usage examples:
    function isUnder300(txtbox) {
        isUnderLimit(txtbox, 300);
    }
    
    function isUnder200(txtbox) {
        isUnderLimit(txtbox, 200);
    }
    
           