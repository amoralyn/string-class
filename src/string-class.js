(function () {
    'use strict';
    String.prototype.hasVowels = function() {
      return /[aeiou]/ig.test(this);
    };

    String.prototype.toUpper = function() {
      var regex = /[a-z]/g;
        return this.replace(regex, function (letter){
          return String.fromCharCode(letter.charCodeAt() - 32);
        });

    };

    String.prototype.toLower = function() {
      var regex = /[A-Z]/g;
        return this.replace(regex, function (letter){
          return String.fromCharCode(letter.charCodeAt() + 32);
        });
    };

    String.prototype.ucFirst = function() {
      return this[0].toUpper() + this.substring(1).toLower();
    };

    String.prototype.isQuestion = function() {
      return /.+\?$/.test(this.trim());
    };

    String.prototype.words = function() {
      var words = this.replace(/[+-=?<>)(*&^!@#$%"'{})]/g, '');
      words = words.replace(/ +/g, ' ').split(/\s/);
      return words;
    };

    String.prototype.wordCount = function(){
      return this.words().length;
    };

    String.prototype.toCurrency = function() {
      if (!/^[\d,.]+$/.test(this)) {
        return NaN;
      }
      var number = parseFloat(this).toString();
      number = number.split('.');
      number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return number.join('.');
    };

    String.prototype.fromCurrency = function() {
      var amount;
      amount = parseFloat(this.replace(/[$,]/g, ''));
      return amount;
    };

  }());
