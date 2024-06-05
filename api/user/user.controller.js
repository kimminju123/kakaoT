import { User } from './user.model.js';

export function getAll(req, res, next) {
  return User.find().then((userlist) => {
    res.render('userlist', { data: userlist });
  });
}

export function create(req, res, next) {
  return User.create(req.body)
    .then(function (user) {
      return user;
    })
    .then((entity) => {
      if (entity) {
        res.status(201).json(entity);
      }
    });
}
function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}
export function login(req, res, next) {
  const { email, password } = req.body || {};
  return User.findOne({ email, password })
    .then((user) => {
      return user;
    })
    .then(responseWithResult(res));
}

export function available(req, res) {
  const { email, latitude, longitude } = req.body || {};
  return User.available(email, { latitude, longitude })
    .then((user) => {
      return '야휴 이제, 손님좀 받아보자';
    })
    .then(responseWithResult(res));
}
