
database.ref("rides").on("value",function(snapshot){

var data=snapshot.val();
var html="";

for(var key in data){

if(data[key].status=="pending"){

html+="<div>Ride Request: "+data[key].pickup+" → "+data[key].drop+"</div>";

}

}

document.getElementById("rides").innerHTML=html;

});
