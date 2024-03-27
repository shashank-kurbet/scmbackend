document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });

    // table contents

var inventory_id =[1,1,2,3,3]
var store = [22,22,23,24,24];
var brand=["brand1","brand2","brand3","brand4","brand5"]
var description=["brand1","brand2","brand3","brand4","brand5"]
var status=["brand1","brand2","brand3","brand4","brand5"]
var on_hand=["brand1","brand2","brand3","brand4","brand5"]




//Static content ---------------------------------------------------------
document.write("<table border='1' width='200'>")
document.write("<tr><th>Inventory Id #</th><th>Store</th><th>Brand</th></tr><th>Description</th><th>On Hand</th><th>Status</th>");
//Dynamic content --------------------------------------------------------
for(var i=0; i<12;i++)
{
	document.write("<tr><td>" + (i+1) + "</td><td>" + monthsEnglish[i] + "</td><td>" + monthsSpanish[i] +"</td></tr>");
}
//Static content  --------------------------------------------------------
document.write("</table>")


//---------------------------------------------------------------------------------------

fetch('Inventory/gfgdetails.json')
  .then(response => response.json())
  .then(data => {
    // Call function to display table
    createTable(data.employees);
  })
  .catch(error => console.error('Error:', error));

  function createTable(data) {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
  
    // Append the table head and body to table
    table.appendChild(tableHead);
    table.appendChild(tableBody);
  
    // Creating table head
    let row = tableHead.insertRow();
    Object.keys(data[0]).forEach(key => {
      let th = document.createElement('th');
      th.textContent = key.toUpperCase();
      row.appendChild(th);
    });
  
    // Creating table body
    data.forEach(item => {
      let row = tableBody.insertRow();
      Object.values(item).forEach(value => {
        let cell = row.insertCell();
        cell.textContent = value;
      });
    });
  
    // Append the table to the HTML document
    document.getElementById('yourElementId').appendChild(table);
  }

