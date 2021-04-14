import React, { useState, useCallback } from 'react';
import Mysurvey from '../components/ebuSurveyone';
import axios from 'axios';

function SurveyOne() {

  const [showCompletedPage, setshowCompletedPage] = useState(true)
  const onCompletepage = useCallback((data) => {
    axios({
      method: "post",
      url: "http://localhost:30844/api/sendSurvey",
      data: {
        a: data.a,
        b: data.b,
        c: data.c,
        d: data.d,
        e: data.e,
        f: data.f,
        g: data.g,
        h: data.h,
        i: data.i,
        j: data.j,
        k: data.k,
        l: data.l,
        m: data.m,
        n: data.n,
        o: data.o,
        p: data.p,
        q: data.q,
        r: data.r,
        s: data.s,
        t: data.t,
        u: data.u,
        v: data.v,
        w: data.w,
        x: data.x,
        y: data.y,
        z: data.z,
        aa: data.aa,
        ab: data.ab,
        ac: data.ac,
        ad: data.ad,
        ae: data.ae,
        af: data.af,
        ag: data.ag,
        ah: data.ah,
        ai: data.ai,
        aj: data.aj,
        ak: data.ak,
        al: data.al,
        am: data.am,
        an: data.an,
        ao: data.ao,
        ap: data.ap,
        aq: data.aq,
        ar: data.ar,
        as: data.as,
        at: data.at,
        au: data.au,
        ay: data.ay,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });


    setshowCompletedPage(!showCompletedPage)
  }, [showCompletedPage])

  const setFinalPage = () => {
    return (
      <div className="setFinalPage">
        <h1>THANK YOU FOR TAKING THE SURVEY</h1>
      </div>
    )
  }

  return (
    <main className="App">
      {
        showCompletedPage ?
          <Mysurvey showCompletePage={data => onCompletepage(data)} /> :
          setFinalPage()
      }
    </main>
  );
}

export default SurveyOne;