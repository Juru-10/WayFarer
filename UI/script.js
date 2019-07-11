function booking(users, trips){
	let btn = document.createElement("button");
  	btn.onclick == book();
  	let book = document.createTextNode("Book");
  	btn.appendChild(book);
	let slct = document.createElement("select");
	let para = document.createElement("p");
    let node = document.createTextNode(trips[i].seats[i]);
    trips[i].user = users[i];
    para.appendChild(node);
    para.appendChild(btn);
    slct.appendChild(para);
    let element = document.getElementById("trips");
    element.appendChild(slct);
}

function book(){

}