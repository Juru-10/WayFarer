import moment from 'moment';
import uuid from 'uuid';

const User = {
  constructor() {
    this.users = [];
  },
  create(data) {
    const newUser = {
      id: uuid.v4(),
      success: data.success || 'success',
      data: {
        email: data.email || '',
        password: data.password || '',
        first_name: data.first_name || '',
        last_name: data.last_name || '',
        createdDate: moment.now(),
        modifiedDate: moment.now()
      }
    };
    this.users = [];
    this.users.push(newUser);
    return newUser;
  },
  signin(email,password) {
    return users.find(user => user.email === email, user.password === password);
  },
  findOne(id) {
    return this.users.find(user => user.id === id);
  },
  findAll() {return this.users;},
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