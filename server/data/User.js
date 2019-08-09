import moment from 'moment';

// import uuid from 'uuid';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';
const users = [{
  id: 1,
  first_name: 'jura',
  last_name: 'yuui',
  email: 'rujru@gmh.kj',
  password:'kjhklkjh', 
  is_admin: false,
  createdDate: moment(moment.now()).format('DD-MM-YYYY'),}];

const User = {
  
  constructor() {
    // this.users = [];
  },
  create(data) {
    // this.users = [];
    const newUser = {
      // 
      message: data.success || 'You have signed up successfully',
      data: {
        id: users.length+1,
        token: data.token,
        email: data.email || '',
        password: data.password || '',
        first_name: data.first_name || '',
        last_name: data.last_name || '',
        is_admin: false,
        createdDate: moment(moment.now()).format('DD-MM-YYYY')
      }
    };

    // bcrypt.hash('password',10,(err, hash) =>{});
    // bcrypt.compare('comparePassword', hash, (err, res) =>{
    //   if(res)  {

    //   } else {

    //   } 
    // });
    
    // if (this.users.find(user => user.email === email)){
    //   message = 'User already exists'
    // }else{
      
      users.push(newUser.data);
      return newUser;
    // }
  },
  signin({email,password}) {
    for(let i;i<=users.length; i++){
      if(users[i].email==={email} && users[i].password==={password}){
        return users[i];
      }
    }
  },
  findOne(id) {
    for( let i;i<=users.length;i++){
      if(users[i].id===id){
        return users[i];
      }
    }

  },
  findAll() {return users;},
  update(id, data) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index].success = data['success'] || user.success;
    this.users[index].email = data['email'] || user.email;
    this.users[index].password = data['password'] || user.password;
    this.users[index].first_name = data['first_name'] || user.first_name;
    this.users[index].last_name = data['last_name'] || user.last_name;
    this.users[index].modifiedDate = moment.now();
    return this.users[index];
  },
  delete(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return {};
  }
}

export default  User;