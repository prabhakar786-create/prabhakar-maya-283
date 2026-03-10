
function bookDelivery(){

var pickup=document.getElementById("pickup").value;
var drop=document.getElementById("drop").value;
var type=document.getElementById("type").value;

database.ref("deliveries").push({
pickup:pickup,
drop:drop,
type:type,
status:"pending"
});

alert("Delivery booked");

}
