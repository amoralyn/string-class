(function () {
    'use strict';
    String.prototype.hasVowels = function () {
      var vowels = /[aeiou]/gi;
      return vowels.test(this);
    };

    String.prototype.toUpper = function () {
      var regex = /[a-z]/g;
        return this.replace(regex, function (letter){
          return String.fromCharCode(letter.charCodeAt() - 32);
        });

    };

    String.prototype.toLower = function () {
      var regex = /[A-Z]/g;
        return this.replace(regex, function (letter){
          return String.fromCharCode(letter.charCodeAt() + 32);
        });
    };

    String.prototype.ucFirst = function () {
      return this[0].toUpper() + this.substring(1).toLower();
    };

    String.prototype.isQuestion = function () {
      return /.+\?$/.test(this.trim());
    };

    String.prototype.words = function () {
      var words = this.replace(/[+-=?<>)(*&^!@#$%"'{})]/g, '');
      words = words.replace(/ +/g, ' ').split(/\s/);
      return words[0] ? words : [];
    };

    String.prototype.wordCount = function(){
      return this.words().length;
    };
  }());
