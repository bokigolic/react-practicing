# BELEŠKE JAVASCRIPT


# CRUD OPERACIJA NA NZIOVIMA
crete nove stavke u nizu
delete nove stave u nizi
update nove stavke u nizi
selektovanje (read) trazene stavke u nizu


## DELETE satvke iz niza pomocu .filter metoda
Ovo je prema principa funkcionalnog programiranaj gde se ulazni podaci ne diraju. Nisat se ne brise iz postojeceg niza nego se pravi novi niz na osnovu starog. A u tom novom jednostavno izostavimo stavku koju smo zeleli da obrisemo.

const noviNiz = niz.filter((item)=>{
  if (item.id === trazeniId) {
    // ako je taj kojeg zelim oda obrisemo
    return false; // false u .filter znaci da nece u sastav novog niza
  }
  // svi ostali ostaju u nizu
  return true; // return true u .filter znaci da ulazi u sastav novog niza
});
// na ovoj liniji koda noviNiz je vec popunjen...


## DELETE stavke iz niza pomocu forEach
let noviNiz = [];
niz.forEach((item)=>{
  if (item.id === trazeniId) {
    // nista ne radimo jer ga ne zelimo u novom nizu
  }
  // sve ostale
  noviNiz.push(item); // guramo ga u novi niz
});
// na ovoj liniji koda noviNiz je vec popunjen...



##
