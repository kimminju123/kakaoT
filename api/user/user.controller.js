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
  console.log(req.body.email);
  return User.available(email, { latitude, longitude })
    .then((user) => {
      return '야휴 이제, 손님좀 받아보자';
    })
    .then(responseWithResult(res));
}


export function unavailable(req, res) {
  return User.available(email)
    .then((user) => {
      return '저 이제 손님 못받아유...';
    })
    .then(responseWithResult(res)); 
  }