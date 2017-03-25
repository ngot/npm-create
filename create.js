'use strict';

const fetch = require('node-fetch');
const FormData = require('form-data');

const avs = require('./av.json');

for (let name of avs) {
  createOrg(name);
}

function createOrg(name) {
  const form = new FormData();

  form.append('crumb', '');// 根据控制台实际的值替换
  form.append('amount', 0); //根据控制台实际的值替换
  form.append('orgScope', name);// org名字
  form.append('org-plan-type', 'free');// 保持不变

  // cookie 替换成自己 
  const headers = {
    cookie: "",
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
  }

  return fetch('https://www.npmjs.com/org/create',
    {
      method: 'POST',
      body: form,
      headers
    })
    .then(function (res) {
      console.log(name, ':', res.ok);
    });
}
