const mongoose = require('mongoose')

const surveyModel = new mongoose.Schema({
  a: {
    type: String,
    required: false
  },
  b: {
    type: String,
    required: false
  },
  c: {
    type: String,
    required: false
  },
  d: {
    type: String,
    required: false
  },
  e: {
    type: Array,
    required: false
  },
  f: {
    type: String,
    required: false
  },
  g: {
    type: String,
    required: false
  },
  h: {
    type: String,
    required: false
  },
  i: {
    type: String,
    required: false
  },
  j: {
    type: String,
    required: false
  },
  k: {
    type: String,
    required: false
  },
  l: {
    type: String,
    required: false
  },
  m: {
    type: String,
    required: false
  },
  n: {
    type: String,
    required: false
  },
  o: {
    type: String,
    required: false
  },
  p: {
    type: String,
    required: false
  },
  q: {
    type: String,
    required: false
  },
  r: {
    type: String,
    required: false
  },
  s: {
    type: String,
    required: false
  },
  t: {
    type: String,
    required: false
  },
  u: {
    type: String,
    required: false
  },
  v: {
    type: String,
    required: false
  },
  w: {
    type: String,
    required: false
  },
  x: {
    type: String,
    required: false
  },
  y: {
    type: String,
    required: false
  },
  z: {
    type: Array,
    required: false
  },
  aa: {
    type: String,
    required: false
  },
  ab: {
    type: String,
    required: false
  },
  ac: {
    type: String,
    required: false
  },
  ad: {
    type: String,
    required: false
  },
  ae: {
    type: String,
    required: false
  },
  af: {
    type: String,
    required: false
  },
  ag: {
    type: String,
    required: false
  },
  ah: {
    type: String,
    required: false
  },
  ai: {
    type: String,
    required: false
  },
  aj: {
    type: String,
    required: false
  },
  ak: {
    type: String,
    required: false
  },
  al: {
    type: String,
    required: false
  },
  am: {
    type: String,
    required: false
  },
  an: {
    type: String,
    required: false
  },
  ao: {
    type: String,
    required: false
  },
  ap: {
    type: String,
    required: false
  },
  aq: {
    type: String,
    required: false
  },
  ar: {
    type: String,
    required: false
  },
  as: {
    type: String,
    required: false
  },
  at: {
    type: String,
    required: false
  },
  au: {
    type: Array,
    required: false
  },
  av: {
    type: String,
    required: false
  },
  aw: {
    type: String,
    required: false
  },
  ax: {
    type: String,
    required: false
  },
  ay: {
    type: String,
    required: false
  },
})

module.exports = mongoose.model('mytable', surveyModel)