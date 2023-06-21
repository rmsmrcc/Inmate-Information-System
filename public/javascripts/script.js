(function () {
  'use strict'
    
  const forms = document.querySelectorAll('.requires-validation')
  Array.from(forms)

.forEach(function (form) {
  form.addEventListener('submit', function (event) {
if (!form.checkValidity()) {
  event.preventDefault()
  event.stopPropagation()
}

form.classList.add('was-validated')
}, false)
})
})()
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 

window.addEventListener('DOMContentLoaded', event => {

 
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
      // Uncomment Below to persist sidebar toggle between refreshes
      if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
          document.body.classList.toggle('sb-sidenav-toggled');
      }
      sidebarToggle.addEventListener('click', event => {
          event.preventDefault();
          document.body.classList.toggle('sb-sidenav-toggled');
          localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      });
  }

});

const signupButton = document.getElementById("signup-button"),
  loginButton = document.getElementById("login-button"),
  userForms = document.getElementById("user_options-forms");

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener(
  "click",
  ()=>{
    userForms.classList.remove("bounceRight");
    userForms.classList.add("bounceLeft");
  },
  false
);

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener(
  "click",
  () => {
    userForms.classList.remove("bounceLeft");
    userForms.classList.add("bounceRight");
  },
  false
);
(document).ready(function() {
  //-------------------------------SELECT CASCADING-------------------------//
  var selectedCountry = (selectedRegion = selectedCity = "");
  // This is a demo API key for testing purposes. You should rather request your API key (free) from http://battuta.medunes.net/
  var BATTUTA_KEY = "00000000000000000000000000000000";
  // Populate country select box from battuta API
  url =
    "https://battuta.medunes.net/api/country/all/?key=" +
    BATTUTA_KEY +
    "&callback=?";

  // EXTRACT JSON DATA.
  $.getJSON(url, function(data) {
    console.log(data);
    $.each(data, function(index, value) {
      // APPEND OR INSERT DATA TO SELECT ELEMENT.
      $("#country").append(
        '<option value="' + value.code + '">' + value.name + "</option>"
      );
    });
  });
  // Country selected --> update region list .
  $("#country").change(function() {
    selectedCountry = this.options[this.selectedIndex].text;
    countryCode = $("#country").val();
    // Populate country select box from battuta API
    url =
      "https://battuta.medunes.net/api/region/" +
      countryCode +
      "/all/?key=" +
      BATTUTA_KEY +
      "&callback=?";
    $.getJSON(url, function(data) {
      $("#region option").remove();
      $('#region').append('<option selected disabled value="">Select Region</option>');
      $.each(data, function(index, value) {
        // APPEND OR INSERT DATA TO SELECT ELEMENT.
        $("#region").append(
          '<option value="' + value.region + '">' + value.region + "</option>"
        );
      });
    });
  });
  // Region selected --> updated city list
  $("#region").on("change", function() {
    selectedRegion = this.options[this.selectedIndex].text;
    // Populate country select box from battuta API
    countryCode = $("#country").val();
    region = $("#region").val();
    url =
      "https://battuta.medunes.net/api/city/" +
      countryCode +
      "/search/?region=" +
      region +
      "&key=" +
      BATTUTA_KEY +
      "&callback=?";
    $.getJSON(url, function(data) {
      console.log(data);
      $("#city option").remove();
      $('#city').append('<option selected disabled value="">Select City</option>');
      $.each(data, function(index, value) {
        // APPEND OR INSERT DATA TO SELECT ELEMENT.
        $("#city").append(
          '<option value="' + value.city + '">' + value.city + "</option>"
        );
      });
    });
  });
  // city selected --> update location string
  $("#city").on("change", function() {
    selectedCity = this.options[this.selectedIndex].text;
    $("#location").html(
      "Locatation: Country: " +
        selectedCountry +
        ", Region: " +
        selectedRegion +
        ", City: " +
        selectedCity
    );
  });
});

function handleImageUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    
    reader.onload = function(e) {
        var imagePreview = document.getElementById('image-preview');
        imagePreview.src = e.target.result;
    }
    
    reader.readAsDataURL(file);
}