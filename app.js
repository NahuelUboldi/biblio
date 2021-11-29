function DNAStrand(dna){
    const dnaLetter = dna.split("");
    let dnaArr = [];

    for (let i = 0; i < dnaLetter.length;i++) {
        if (dnaLetter[i] == "A") {
            dnaArr.push("T")
        } else if (dnaLetter[i] == "T") {
            dnaArr.push("A")
        } else if (dnaLetter[i] == "G") {
            dnaArr.push("C")
        } else if (dnaLetter[i] == "C") {
            dnaArr.push("G")
        }
    }

    return dnaArr.join("");
  }
  
  let res = DNAStrand ("ATTGC") // return "TAACG"
  console.log(res);
