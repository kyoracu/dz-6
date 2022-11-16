let mass = [1,2,41,5,25,55,22,55].map(item => item **2 )
console.log(mass);

let filerMassive = [33,12,331,35,25,55,22,55]
let moreTen = []
for(let i=0; i< filerMassive.length; i++){
    if (filerMassive[i]>=10){
        moreTen.push(filerMassive[i])
    }
}

console.log (filerMassive);

let strlgns = ['reactjs', 'vuejs', 'angularjs', 'nodejs']
function findLongestWord (input) {
    return input
      .reduce(
        function (longest, word) {
          return word.length > longest.length
            ? word
            : longest;
        }, 
        ''
      );
  }

  console.log (strlgns)

 