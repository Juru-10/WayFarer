let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function dltBooking(){
}

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

function CancelTrip(){
	
}

function SignIn(){
	location.href("home.html");
}

function SignUp(){
	location.href("SignIn.html");
}
