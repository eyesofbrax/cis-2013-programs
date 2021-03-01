     var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     
     floatAge = parseFloat(prompt("Enter Age"));
                               
     floatDays = parseFloat(floatAge/365.25).toFixed(2);
     intWeeks = parseFloat(floatDays/7).toFixed(2);
     floatMonths = parseFloat(floatAge*12).toFixed(2);
     intFortnights = parseFloat(floatDays*14).toFixed(2);
     
     alert("You are currently = " + floatAge + "years old and you are " + floatDays + "days old and " + intWeeks + "weeks old and " + floatMonths "months old and " + intFortnights + "fortnights old");