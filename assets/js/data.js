var data_links = "links.json";
  
$(document).ready(function(){
  $.getJSON(data_links,
    function (data) {
      var mysource = $('#links-template').html();
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      $('#links').html(myresult);
  });
});

var data_apps = "apps.json";
  
$(document).ready(function(){
  $.getJSON(data_apps,
    function (data) {
      var mysource = $('#apps-template').html();
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      $('#apps').html(myresult);
  });
});

var data_providers = "providers.json";
  
$(document).ready(function(){
  $.getJSON(data_providers,
    function (data) {
      var mysource = $('#providers-template').html();
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      $('#providers').html(myresult);
  });
});