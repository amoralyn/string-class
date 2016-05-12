(function () {
    'use strict';
    String.prototype.hasVowels = function () {
      var vowels = /[aeiou]/gi;
      return vowels.test(this);
    };

    String.prototype.toUpper = function () {
      var i,
        regex = /[a-z]/,
        letters = this.split('');

        for(i = 0; i < letters.length; i++) {
          if (letters[i].match(regex)) {
            letters[i] = String.fromCharCode(letters[i].charCodeAt() - 32);
          }
        }
        return letters.join('');
    };

    String.prototype.toLower = function () {
      var i,
        regex = /[A-Z]/,
        letters = this.split('');

        for(i = 0; i < letters.length; i++) {
          if (letters[i].match(regex)) {
            letters[i] = String.fromCharCode(letters[i].charCodeAt() + 32);
          }
        }
        return letters.join('');
    };

    String.prototype.ucFirst = function () {
      return this[0].toUpper() + this.substring(1).toLower();
    };

    String.prototype.isQuestion = function () {
      if (this[this.length-1] == '?'){
        return true;
      } else {
        return false;
      }
    };

    String.prototype.words = function () {

    };
  }());
