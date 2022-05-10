
// Date Selector
$( function() {
    $( "#datepicker" ).datepicker(
    {
    defaultDate: "+3w",
    changeMonth: true,
    numberOfMonths: 1
    } 
    );
  } );

// Enrollment
  let enrollment = 0;
  function enrollmentValue() {
    var ele = document.getElementsByName('students');
      for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        enrollment = ele[i].value;
      }
   }
  
   // Collect Form Data
  function sendData () {
    
    enrollmentValue();
  
    var data = new FormData();
    data.append("fname", document.getElementById("fname").value);
    data.append("lname", document.getElementById("lname").value);
    data.append("position", document.getElementById("position").value);
    data.append("email", document.getElementById("email").value);
    data.append("snl_zip", document.getElementById("snl_zip").value);
    data.append("snl_school", document.getElementById("snl_school").value);
    data.append("snl_address", document.getElementById("snl_address").value);
    data.append("snl_city", document.getElementById("snl_city").value);
    data.append("snl_state", document.getElementById("snl_state").value);
    data.append("phone", document.getElementById("phone").value);
    data.append("acct", document.getElementById("acct").value);
    data.append("K-6", document.getElementById("K-6").checked);
    data.append("K-8", document.getElementById("K-8").checked);
    data.append("K-12", document.getElementById("K-12").checked);
    data.append("PreK", document.getElementById("PreK").checked);
    data.append("MS", document.getElementById("MS").checked);
    data.append("HS", document.getElementById("HS").checked);
    data.append("enrollment", enrollment);
    data.append("startdate", document.getElementById("datepicker").value);
    data.append("calltime", document.getElementById("calltime").value);
  
  // Init Fetch Post
  let key = 'U0JGSG9zdEZhaXJGb3Jt';
  let h = new Headers();
  h.append('x-api-key', key);
  
  fetch("https://registration.scholasticbookfairs.com/api/host-fair-form/", {
  //fetch("../api/host-fair-form/dummyProcess.php", {  
    method: "POST",
    headers: h,
    body: data
  })
  
  // Return Server Response
  .then((result) => {
    if (result.status != 200) {throw new Error("Bad Server Response"); }
    return result.text();
  })
  
  // Server Response
  .then((response) => {
    console.log(response);
    //if (response.includes("Data Submitted")) {
    $('#main').css('display',"none");
    $('#result').css('display',"block");
    // } else { 
    //  alert ("Data submission failed. Please try again later.")}
  })
  
  // Handle Errors
  .catch((error) => {
    console.log(error);
  })
  
  // Prevent Form Submit
  return false;
  
  }