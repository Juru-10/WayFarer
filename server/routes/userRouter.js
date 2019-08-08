import { celebrate } from 'celebrate';
import { Router } from 'express';
import controller from '../controllers/userController';

import * as validator from './validators/userValidators';

const router = Router();

router.post(
  '/auth/signup',
  // celebrate({
  //   body: validator.postUser,
  // }),
  controller.postUser
);

router.post(
  '/auth/signin',
  // celebrate({
  //   body: validator.checkUser,
  // }),
  controller.checkUser
);

router.get('/users', controller.getUsers);

router.get(
  '/users/id',
  celebrate({
    params: validator.getUser
  }),
  controller.getUser
);

router.delete(
  '/users/id',
  celebrate({
    params: validator.getUser
  }),
  controller.deleteUser
);

router.put(
  '/users/id',
  // celebrate({
  //   params: validator.getUser,
  //   body: validator.putUser
  // }),
  controller.updateUser
);

export default router;