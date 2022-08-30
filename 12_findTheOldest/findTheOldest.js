const findTheOldest = function(people) {
    let dt = new Date();
    let ndt = dt.getFullYear();
    
    for(let i=0;i<people.length;i++){
      let obj = people[i];
      
        if(!('yearOfDeath' in obj)){
          obj['yearOfDeath'] = ndt;
          console.log(`Defining year for ${obj['name']}`);
        }       
    }
    
    const oldestName = people.sort((a,b) => {
        const lastInventor = a.yearOfDeath - a.yearOfBirth;
        const nextInventor = b.yearOfDeath - b.yearOfBirth;
        return lastInventor > nextInventor ? -1 : 1;
    });
    console.log(oldestName);
    let oldestPerson = oldestName[0];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
