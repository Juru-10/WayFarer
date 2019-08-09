// import 'dotenv/config';

import User from '../data/User';
import {tokenGenerator} from '../helpers/jwt';


export default class controller {
  static async postUser(req, res) {
    const { body } = req;
    try {
      const { message, data, email, password, is_admin} = await User.create(body);
      const status = 201;
      data.token = tokenGenerator({email, password, is_admin});
      return res.status(status).json({
        // status,
        // message,
        data
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async checkUser(req, res) {
    const { email, password } = req.body;
    let status = 200;
    try {
      const data = await User.signin(email,password
        // where: {
        //   email,
        //   password
        // }
      );
      
      if (!data) {
        status = 404;
        return res.status(status).json({
          status,
          message: 'Invalid Email or Password'
        });
      }
      
      return res.status(status).json({
        status,
        message: 'Logged in successfully',
        data    
      });
      
      
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async getUsers(req, res) {
    
    try {
      const users = await User.findAll({});
      const status = 200;
      return res.status(status).json({
        status,
        users
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async getUser(req, res) {
    const { id } = req.params;
    let status = 200;

    try {
      const user = await User.findOne({
        where: {
          id
        }
      });

      if (!user) {
        status = 404;
        return res.status(status).json({
          status,
          message: 'User not found'
        });
      }
      return res.status(status).json({
        status,
        user
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    let status = 200;

    try {
      const user = await User.findOne({
        where: {
          id
        }
      });

      if (!user) {
        status = 404;
        return res.status(status).json({
          status,
          message: 'User not found'
        });
      }
      await user.destroy();
      return res.status(status).json({
        status,
        message: 'The User deleted successfully'
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }

  static async updateUser(req, res) {
    const { body } = req;
    const { id } = req.params;
    let status = 200;

    try {
      const user = await User.findOne({
        where: {
          id
        }
      });

      if (!user) {
        status = 404;
        return res.status(status).json({
          status,
          message: 'User not found'
        });
      }
      await user.update(body);
      return res.status(status).json({
        status,
        message: 'The User record updated successfully',
        user
      });
    } catch (err) {
      const status = 500;
      return res.status(status).json({
        status,
        message: err.message || 'Server error'
      });
    }
  }
}