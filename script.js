function trips(){
  document.getElementById("trips").innerHTML=" ";
    for(let i=0;i<trips.length;i++){
      let btn1 = document.createElement("button");
      btn1.onclick == booking();
      let book = document.createTextNode("Book");
      btn1.appendChild(book);

      let btn2 = document.createElement("button");
      btn2.onclick == trip();
      let dtls = document.createTextNode("Details");
      btn2.appendChild(dtls);

      let para = document.createElement("div");
        let node = document.createTextNode(trips[i].name);
        para.appendChild(node);
        let element = document.getElementById("trips");
        element.appendChild(para);
        element.appendChild(btn1);
        element.appendChild(btn2);
    }
}

function bookings(){
	document.getElementById("bookings").innerHTML=" ";
  	for(let i=0;i<bookings.length;i++){
  		let btn = document.createElement("button");
  		let dlt = document.createTextNode("Delete");
  		btn.appendChild(dlt);
    	let para = document.createElement("div");
      	let node = document.createTextNode(bookings[i].name);
      	para.appendChild(node);
      	let element = document.getElementById("bookings");
      	element.appendChild(para);
      	element.appendChild(btn);

    }
}