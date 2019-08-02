class Users {
  constructor() {
    this.id = 001;
    this.usersArray = [{
      id: 001,
      fname: 'John',
      lname: 'Kalisa',
      email: 'kjohn@gmail.com',
      password: 'hdh23ued',
      is_admin: 1 
    },{
      id: 002,
      fname: 'Jane',
      lname: 'Karabo',
      email: 'kjane@gmail.com',
      password: 'adh93u4d',
      is_admin: 0 
    }]; 
  }  
}

getUsers() {
  return this.usersArray;
}