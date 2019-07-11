function trip(trips){
	document.getElementById("trip").innerHTML=" ";

	let name = document.createElement("h4");
	let time = document.createElement("p");
	let origin = document.createElement("p");
	let destination = document.createElement("p");
	let seats = document.createElement("p");

    let nameN = document.createTextNode(trips[i].name);
    let timeN = document.createTextNode(trips[i].time);
    let originN = document.createTextNode(trips[i].origin);
    let destinationN = document.createTextNode(trips[i].destination);
    let seatsN = document.createTextNode(trips[i].seats.count());

    name.appendChild(nameN);
    time.appendChild(timeN);
    origin.appendChild(originN);
    destination.appendChild(destinationN);
    seats.appendChild(seatsN);

    let element = document.getElementById("trip");

    element.appendChild(name);
    element.appendChild(time);
    element.appendChild(origin);
    element.appendChild(destination);
    element.appendChild(seats);
}