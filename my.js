
var comments = avalon.define("comments", function(vm){
    vm.comments = [];
});

$(function(){
  
    $.getJSON('newlispjson.json').done(function(data){
        comments.comments = data;
    });
});
