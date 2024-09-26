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

///New code
//console.log(returnRandBase());


 //let specimenNum = Math. floor(Math. random() * 100);
  //console.log(specimenNum);
// let dna = mockUpStrand();
 // let dnaSample = ['G', 'A', 'A', 'T', 'G', 'T', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T'];


const pAequorFactory = (specimenNum,dna) => {
    return {
        specimenNum: specimenNum,
        dna: dna,
        get test() {
          return this.dna;
        },
        mutate() {
           let randomItem = dna[Math.floor(Math.random() * dna.length)];
           //console.log(dna.indexOf(randomItem));
           //console.log(randomItem);

        for(let i = 0; i < 1; i++) {
          if (randomItem === 'A') {
            //dna.splice(randomItem[i],1,'T');
            dna.splice(dna.indexOf(randomItem),1,'T');
          }
          else if (randomItem === 'T') {
            //dna.splice(randomItem[i],1,'A');
            dna.splice(dna.indexOf(randomItem),1,'A');
          }
          else if (randomItem === 'C') {
            //dna.splice(randomItem[i],1,'G');
            dna.splice(dna.indexOf(randomItem),1,'G');
          }
          else if (randomItem === 'G') {
            //dna.splice(randomItem[i],1,'C');
            dna.splice(dna.indexOf(randomItem),1,'C');
          }
          else {
            return 'no valid item';
          }
          //console.log(dna);
         let mutatedDNA = dna;
          return mutatedDNA;
        }
      },
      compareDNA(arr) {
        //let dna = this.dna;
        let dna = ['G', 'A', 'A', 'T', 'G', 'T', 'A', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T'];
        let count = 0;

        for(let i = 0; i < arr.length; i++) {
          //console.log('now processing i = ' + i);
              if (arr[i] === dna[i]) {
                count++;
          }
       }
       //console.log(count);
       let percentage = ((count/15)*100).toFixed(0);
        //console.log('These two DNA sets have ' + percentage + '% in common with each other. Thanks for joining, and remember to tune in next week!');
      },
      willLikelySurvive() {
        //let dna = ['G', 'A', 'A', 'T', 'G', 'T', 'A', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T'];
        let count = 0;
        for(let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'G') {
            count++;
        }
          if (this.dna[i] === 'C') {
            count++;
        }
      }
      let percentage = ((count/15)*100).toFixed(0);
      //console.log(percentage);
        if (percentage == 60 || percentage > 60) {
          return true;
        }
        else {
          return false;
        }
      }
    }
    };

      let newOrganismArray = [];
      let newOrganismCount = 1;
      const makeNewInstances = () => {
      while (newOrganismArray.length < 30) {
        let newOrganism = pAequorFactory(newOrganismCount,mockUpStrand());
        //console.log(newOrganism);

        if (newOrganism.willLikelySurvive()) {
          newOrganismArray.push(newOrganism);
        }
        newOrganismCount++;
        //console.log(newOrganismCount);
        //return newOrganismArray;
        //console.log(newOrganismArray);
      }
      console.log(newOrganismArray);
      }



  makeNewInstances();




//testing

//console.log(pAequorFactory(1,mockUpStrand()).mutate());
//console.log(pAequorFactory(1,mockUpStrand()).test);

//console.log(pAequorFactory(1,['G', 'A', 'A', 'T', 'G', 'T', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T']).mutate());

//console.log(pAequorFactory(1,['G', 'A', 'A', 'T', 'G', 'T', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T']).compareDNA(['G', 'A', 'T', 'T', 'G', 'T', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T']));
//pAequorFactory(1,['G', 'A', 'A', 'T', 'G', 'T', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T']).compareDNA(['G', 'A', 'T', 'T', 'G', 'T', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T']);
//pAequorFactory(1,['G', 'A', 'A', 'T', 'G', 'T', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T']).willLikelySurvive(['G', 'C', 'G', 'T', 'G', 'C', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T']);

/*
['G', 'A', 'A', 'T', 'G', 'T', 'A', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T']
['G', 'A', 'T', 'T', 'G', 'T', 'T', 'C', 'C', 'G', 'A', 'T', 'C', 'T', 'T']
*/







