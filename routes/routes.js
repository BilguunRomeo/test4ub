const express = require('express');
const router = express.Router();
const surveyModel = require('../models/surveyModel')

router.post('/sendSurvey', (request, response) => {
  const survey = new surveyModel({
    a: request.body.a,
    b: request.body.b,
    c: request.body.c,
    d: request.body.d,
    e: request.body.e,
    f: request.body.f,
    g: request.body.g,
    h: request.body.h,
    i: request.body.i,
    j: request.body.j,
    k: request.body.k,
    l: request.body.l,
    m: request.body.m,
    n: request.body.n,
    o: request.body.o,
    p: request.body.p,
    q: request.body.q,
    r: request.body.r,
    s: request.body.s,
    t: request.body.t,
    u: request.body.u,
    v: request.body.v,
    w: request.body.w,
    x: request.body.x,
    y: request.body.y,
    z: request.body.z,
    aa: request.body.aa,
    ab: request.body.ab,
    ac: request.body.ac,
    ad: request.body.ad,
    ae: request.body.ae,
    af: request.body.af,
    ag: request.body.ag,
    ah: request.body.ah,
    aj: request.body.aj,
    ak: request.body.ak,
    al: request.body.al,
    am: request.body.am,
    an: request.body.an,
    ao: request.body.ao,
    ap: request.body.ap,
    aq: request.body.aq,
    ar: request.body.ar,
    as: request.body.as,
    at: request.body.at,
    au: request.body.au,
    av: request.body.av,
    aw: request.body.aw,
    ax: request.body.ax,
    ay: request.body.ay,
  })
  survey.save()
    .then(data => {
      response.json(data)
    })
    .catch(error => {
      response.json(error)
    })
})

router.get('/getSurvey', async (req, res) => {
  const survey = await surveyModel.find({})
  return res.json(survey)
})

module.exports = router;