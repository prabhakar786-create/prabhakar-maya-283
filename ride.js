
var map=L.map('map').setView([26.77,82.15],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var pickupMarker,dropMarker;

map.on('click',function(e){

if(!pickupMarker){

pickupMarker=L.marker(e.latlng).addTo(map);
document.getElementById("pickup").value=e.latlng.lat+","+e.latlng.lng;

}else{

dropMarker=L.marker(e.latlng).addTo(map);
document.getElementById("drop").value=e.latlng.lat+","+e.latlng.lng;

}

});

function calculateFare(){

var base=20;
var perkm=10;

var distance=5;

var fare=base+(distance*perkm);

document.getElementById("fare").innerHTML="Estimated Fare ₹"+fare;

}

function bookRide(){

calculateFare();

var pickup=document.getElementById("pickup").value;
var drop=document.getElementById("drop").value;

database.ref("rides").push({
pickup:pickup,
drop:drop,
status:"pending"
});

alert("Ride booked successfully");

}
