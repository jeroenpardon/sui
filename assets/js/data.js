var data_links = "links.json";

document.addEventListener("DOMContentLoaded", function () {
  fetch(data_links)
  .then( response => response.json())
  .then(
    function (data) {
      var mysource = document.getElementById("links-template").innerHTML;
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      document.getElementById("links").innerHTML = myresult;
    });
});

var data_apps = "apps.json";

document.addEventListener("DOMContentLoaded", function () {
  fetch(data_apps)
  .then( response => response.json())
  .then(
    function (data) {
      var mysource = document.getElementById("apps-template").innerHTML;
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      document.getElementById("apps").innerHTML = myresult;
    });
});

var data_providers = "providers.json";

document.addEventListener("DOMContentLoaded", function () {
  fetch(data_providers)
  .then( response => response.json())
  .then(
    function (data) {
      var mysource = document.getElementById("providers-template").innerHTML;
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      document.getElementById("providers").innerHTML = myresult;
    });
});