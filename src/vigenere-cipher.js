const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.latinAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  encrypt() {
    if (arguments.length < 2 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') {
      throw Error ('Incorrect arguments!')
    }
    const secretKeysStream = [];
    const phrase = arguments[0];
    const secretWord = arguments[1];
    let j = 0;
    const secretKeys = secretWord.split('').map((char) => {
      return this.latinAlphabet.indexOf(char.toUpperCase());
      });
    const phraseKeys = phrase.split('').map((char) => {
      if (!this.latinAlphabet.includes(char.toUpperCase())) {
        return char;
        }
        return this.latinAlphabet.indexOf(char.toUpperCase());
      });
      for (let i = 0; i < phraseKeys.length; i += 1) {
        if (typeof phraseKeys[i] === 'number'){
        if (j === secretKeys.length) {
            j = 0;
            }
      let currentKey = secretKeys[j];
      secretKeysStream.push((phraseKeys[i] + currentKey) % 26);
          j += 1;
          } else {
            secretKeysStream.push(phraseKeys[i]); 
          }
      }
      let result = secretKeysStream.map((key) => {
        if (typeof key !== 'number') {
          return key;
          }
          return this.latinAlphabet[key];
        })
      if (this.mode === false) {
        result = result.reverse();
      }
  return result.join('');
  }
  decrypt() {
    if (arguments.length < 2 || typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string') {
      throw Error ('Incorrect arguments!')
    }
    const phrase = arguments[0];
    const secretWord = arguments[1];
    const secretKeysStream = [];
    let j = 0;
    const secretPhraseKeys = phrase.split('').map((char) => {
        if (!this.latinAlphabet.includes(char.toUpperCase())) {
          return char;
          }
          return this.latinAlphabet.indexOf(char.toUpperCase());
        });
    const secretWordKeys = secretWord.split('').map((char) => {
        return this.latinAlphabet.indexOf(char.toUpperCase());
        });
        
        for (let i = 0; i < secretPhraseKeys.length; i += 1) {
          if (typeof secretPhraseKeys[i] === 'number'){
          if (j === secretWordKeys.length) {
              j = 0;
              }
        let currentKey = secretWordKeys[j];
        let keyMod26 = secretPhraseKeys[i] - currentKey;
        if (keyMod26 < 0) {
          keyMod26 += 26;
          }
        secretKeysStream.push(keyMod26 % 26);
            j += 1;
            } else {
              secretKeysStream.push(secretPhraseKeys[i]); 
            }
        }
        let result = secretKeysStream.map((key) => {
          if (typeof key !== 'number') {
            return key;
            }
            return this.latinAlphabet[key];
          });
          if (this.mode === false) {
            result = result.reverse();
          }
      return result.join('');
    }
}

module.exports = {
  VigenereCipheringMachine
};
