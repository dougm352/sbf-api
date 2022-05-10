
function getBranch() {
    var cust_zip=$('#zip').val();
    let url = 'https://registration.scholasticbookfairs.com/api/bf-office/?z='+cust_zip;
  
    fetch(url)
    .then(response => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
    })
        .then(data => {
           var html = data.map(branch => {
           return '<span id=info><strong>Book Fairs Office</strong><br>for zip '+cust_zip+' <a onclick="changeZip()">change</a><br><br>Book Fairs Office: '+ branch.loc_branchname +'<br>'+ branch.loc_mail1 + '<br>'+ branch.loc_mailcity +', '+ branch.st_abbrev +' '+ branch.loc_mailzip + '<br><br>' + branch.loc_phone + '<br><a href=mailto:' + branch.loc_email +'>'+ branch.loc_email +'</a></span>'
        });

    document
        .querySelector("#contact_result")
        .insertAdjacentHTML("afterbegin", html);
    })

    .catch(error => {
        console.log(error);
    });

    $('#contact_search').css('display',"none");
    $('#contact_result').css('display',"block");

}

function changeZip (){
    info.remove();
    $('#contact_result').css('display',"none");
    $('#contact_search').css('display',"block");
    }