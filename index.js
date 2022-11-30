// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(num , arr){
  return {
    _specimenNum : num ,
    _dna : arr,
    mutate(){
      let randomNum = Math.floor(Math.random() * this._dna.length);
  this._dna[randomNum] = returnRandBase();},

  compareDNA(arr){
    let sameDna = 0;
    for(let i=0; i<arr.length; i++){
      if(arr[i] === this._dna[i]){
        sameDna++ ;
      };
      console.log((sameDna / arr.length) * 100)
    }
  },

  willLikelySurvive(){
    let goodDna = 0;
    for(let j = 0; j<this._dna.length; j++){
      if(this._dna[j] === 'C' || this._dna[j] === 'G'){goodDna++ ;}
    };
   // console.log(goodDna / this._dna.length * 100);
    if((goodDna / this._dna.length * 100) >= 60){ return true;}
    else{return false;}
  }  

  };
}

let pAequorSurviveDna = [];
let k = 0;
while(pAequorSurviveDna.length < 30){
  let temp = pAequorFactory(k , mockUpStrand())
  if(temp.willLikelySurvive() === true){
    pAequorSurviveDna.push(temp);
    k++ ;}

}

console.log(pAequorSurviveDna)

/*let thisThing = pAequorFactory(1 , mockUpStrand());

console.log(thisThing._dna)
thisThing.mutate()
console.log(thisThing._dna)
console.log(thisThing.willLikelySurvive())*/



