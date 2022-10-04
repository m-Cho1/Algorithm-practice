/**
 * Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.} dna

 */

function convertDNA(dna) {
  if (dna.includes('T')) {
    return dna.replaceAll('T', 'U');
  }
}

console.log(`convertDNA (GCCTATCGG) => : ${convertDNA('GCCTATCGG')}`);
