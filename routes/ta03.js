//TA03 PLACEHOLDER
const express = require('express');
const fs = require('fs');

const router = express.Router();
let items = [];
//let updateItems = [];

const getData = (tagFilter, cb) => {
    fs.readFile('./data/data.json', (err, data) => {
    if (!err) {
      items = JSON.parse(data);
    } 
    if (tagFilter !== '') {
      items = items.filter(item => item.tags.indexOf(tagFilter) > -1);
      console.log(tagFilter);
      //console.log(items);
    };
    cb(items);
  });
};

router.get('/', (req, res, next) => {
  getData('', (items) => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03', // For pug, EJS
      items: items
    });
  });
});

router.post('/results', (req, res, next) => {
  let search = req.body.search;
  //console.log(search);
  getData(search, (items) => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      path: '/ta03', // For pug, EJS
      items: items
    })
  })
  
  // updateItems = items.filter(item => {
  //   item.tag.indexof(search) > -1;
  // });
  // console.log(updateItems);
  // //res.redirect('ta03');
});




module.exports = router;
