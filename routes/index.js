var express = require('express');
var router = express.Router();

const team = {
  brody: {
    name: 'Brody Billings',
    role: 'Project Manager',
    desc: 'Hello my name is Brody, iam the Project Manager for our Final Integrated Project, the cambaign on Bullying In Sports.',
    avatar: '/images/brody.jpg'
  },

  Roy:{
    name: 'Roy',
    role: 'Motion Graphics',
    desc: 'Front-End Development',
    avatar: '/images/.jpg'
  },

  Evan:{
    name: 'Evan',
    role: 'Front-End Development',
    desc: 'Front-End Development',
    avatar: '/images/.jpg'
  },

  Matt:{
    name: 'Matt',
    role: 'Graphic Design',
    desc: 'Front-End Development',
    avatar: '/images/.jpg'

  },
  Gio:{
    name: 'Gio ',
    role: 'Back-End',
    desc: 'Front-End Development',
    avatar: '/images/.jpg'
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Our Team Page' });
});

router.get('/team/:member', function(req, res) {
  console.log('req.params.member');
  res.render('team', { person: team [req.params.member]});
})

module.exports = router;
