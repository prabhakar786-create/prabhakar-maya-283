
database.ref("rides").on("value",function(snapshot){

var data=snapshot.val();
var html="";

for(var key in data){

html+="<div>"+data[key].pickup+" → "+data[key].drop+"</div>";

}

document.getElementById("allrides").innerHTML=html;

});

database.ref("deliveries").on("value",function(snapshot){

var data=snapshot.val();
var html="";

for(var key in data){

html+="<div>"+data[key].pickup+" → "+data[key].drop+"</div>";

}

document.getElementById("alldelivery").innerHTML=html;

});
