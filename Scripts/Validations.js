﻿function isAlpha(e)
        {
        var key;       
        if(window.event) 
        { 
         key = window.event.keyCode;  
        } 
        else 
        { 
          key = e.which;       
        } 
        if (!((key >64 && key <=90) || (key >96 && key <=122) || (key==32)|| (key==46))) 
        { 
          alert("Please Enter Only the Alphabets");
          return false; 
        } 
        }
     
            function isNumberKey(evt)
            {
             var charCode = (evt.which) ? evt.which : event.keyCode
             if (charCode > 31 && (charCode < 48 || charCode > 57) )
             {  
                alert("Please enter only numbers");
                return false;
              }
             return true;
            }
      
            function isNumberKey1(evt)
            {
             var charCode = (evt.which) ? evt.which : event.keyCode
          
             if (charCode > 31 && (charCode <= 44 || charCode > 57 || charCode==46 || charCode==47))
             {  
                alert("Please enter only numbers");
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

    function isunder300(txtbox) {
        var maxvalue = 300
        if (txtbox.value > maxvalue) {
            alert("Marks should be less than or equal to 300");
            txtbox.value = "";
            txtbox.focus();
        }
    }

    function isunder200(txtbox) {
        var maxvalue = 200
        if (txtbox.value > maxvalue) {
            alert("Marks should be less than or equal to 200");
            txtbox.value = "";
            txtbox.focus();
        }
    }
           