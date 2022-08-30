export const izracunajProsecnuOcenu = (nizOcena) => {
  let brojac = 0;
  let zbir = 0;
  nizOcena.forEach((ocena) => {
    brojac++;
    zbir += ocena;
  });
  if (brojac === 0) {
    // ne sme da se deli sa nolom
    return 0;
  }
  const prosek = zbir / brojac; // prosek decfimalni broj na priemr 3.25
  const prosecnaOcena = Math.round(prosek); // prosecna ocena na primer 3
  return prosecnaOcena;
};

