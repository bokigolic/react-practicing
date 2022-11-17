import { SassString } from "sass"


export const miliSecondsToLongTime = (ms) => {
  // konvertujemo milisekunde u format HH:mm:ss.SSS
  // za sada bez HH

  const d = new Date(ms); // instanca Date clase

  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const _ms = d.getMilliseconds();

  /*
  treba da dobijemo
  HH
  mm
  ss
  SSS
  */

  let HH = "" + h;
  HH = "00" + h;
  HH = HH.slice(-2);

  let mm = "" + m;
  mm = '00' + mm;
  mm = mm.slice(-2);

  let ss = "" + s;
  ss = '00' + ss;
  ss = ss.slice(-2);

  let SSS = "" + _ms;
  SSS = '000' + SSS;
  SSS = SSS.slice(-3);

  const longTime = HH + ':' + mm + ':' + ss + '.' + SSS;
  return longTime
}


export const miliSecondsToLongTimeWithoutHours = (ms) => {
  // konvertujemo milisekunde u format HH:mm:ss.SSS
  // za sada bez HH

  const d = new Date(ms); // instanca Date clase

  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const _ms = d.getMilliseconds();

  /*
  treba da dobijemo
  mm
  ss
  SSS
  */

  let mm = "" + m;
  mm = '00' + mm;
  mm = mm.slice(-2);

  let ss = "" + s;
  ss = '00' + ss;
  ss = ss.slice(-2);

  let SSS = "" + _ms;
  SSS = '000' + SSS;
  SSS = SSS.slice(-3);

  const longTime = mm + ':' + ss + '.' + SSS;
  return longTime
}