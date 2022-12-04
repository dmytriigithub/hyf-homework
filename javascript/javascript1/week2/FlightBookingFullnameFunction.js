const fullname1 = 'Anna',
      fullname2 = 'Datskevych';


function getFullname(firstname='Type your firstname', surname='Type your surname', useFormalName=false, male=true) {
    if (useFormalName & male) {
        return `Lord ${firstname} ${surname}`;
    }else if (useFormalName & male == false) {
        return `Ms ${firstname} ${surname}`;
    }
    return `${firstname} ${surname}`;
}

console.log(getFullname(fullname1, fullname2, true, false));
console.log(getFullname());