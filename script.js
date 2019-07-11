function userBookings(users){
	document.getElementById("bookings").innerHTML=" ";
  	for(let i=0;i<bookings.length;i++){
  		if (users[i] == bookings[i].user){
  			let btn = document.createElement("button");
  			btn.onclick = dltBooking();
  			let dlt = document.createTextNode("Delete");
  			btn.appendChild(dlt);
    		let para = document.createElement("div");
      		let node = document.createTextNode(bookings[i].name);
      		para.appendChild(node);
      		let element = document.getElementById("yourBookings");
      		element.appendChild(para);
      		element.appendChild(btn);
  		}
    }
}