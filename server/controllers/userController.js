// import 'dotenv/config';

import User from '../data/User';
import jwt from 'jsonwebtoken';

export default class controller {
  static async postUser(req, res) {
    const { body } = req;
    try {
      const user = await User.create(body);
      const status = 201;
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

  static async checkUser(req, res) {
    const { email, password } = req.params;
    let status = 200;
    try {
      const user = await User.signin({
        where: {
          email,
          password
        }
      });
      jwt.sign({user}, 'secretkey', (err, token) => {
        res.status().json({
          token,
        });
      });
      if (!user) {
        status = 404;
        return res.status(status).json({
          status,
          message: 'Invalid Email or Password'
        });
      }
      return res.status(status).json({
        status,
        token,
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

  static async getUsers(req, res) {
    const { body } = req;
    try {
      const users = await User.findAll({body});
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
