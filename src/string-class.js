(function () {
    'use strict';
    /**
     * This method checks if the String has vowels in it
     * returns a boolean value
     */
    String.prototype.hasVowels = function() {
      return /[aeiou]/ig.test(this);
    };

    /**
     * Turns the String to upperCase
     * returns The UpperCased string
     */
    String.prototype.toUpper = function() {
      var regex = /[a-z]/g;
      // Convert to uppercase by converting to and from ASCII subtract 32
        return this.replace(regex, function (letter){
          return String.fromCharCode(letter.charCodeAt() - 32);
        });

    };

    /**
     * Turns the String to LowerCase
     * returns The LowerCased string
     */
    String.prototype.toLower = function() {
      var regex = /[A-Z]/g;
      // Convert to uppercase by converting to and from ASCII add 32
        return this.replace(regex, function (letter){
          return String.fromCharCode(letter.charCodeAt() + 32);
        });
    };

    /**
     * Uppercase on only the First Character
     * returns The Capitalized String
    */
    String.prototype.ucFirst = function() {
      return this[0].toUpper() + this.substring(1).toLower();
    };

    /**
      * Checks if the String is a question by checking the last character if '?'
      * If Question return apprioprate Boolean
    */
    String.prototype.isQuestion = function() {
      return /.+\?$/.test(this.trim());
    };

    /**
     * Get the words in the string in form of Array
     * return The splitted words
     */
    String.prototype.words = function() {
      var words = this.replace(/[+-=?<>)(*&^!@#$%"'{})]/g, '');
      words = words.replace(/ +/g, ' ').split(/\s/);
      return words;
    };

    /**
     * Count the number of words in the string
     * return The number of words in string
     */
    String.prototype.wordCount = function(){
      return this.words().length;
    };

    /**
     * Format a string to Currency
     * return String representation of currency
     */
    String.prototype.toCurrency = function() {
      if (!/^[\d,.]+$/.test(this)) {
        return NaN;
      }
      var number = parseFloat(this).toString();
      number = number.split('.');
      number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      console.log(number[0] , "number");
      return number.join('.');
    };

    /**
     * Turns a String Currency to a number
     * return Int or Float of Currency
     */
    String.prototype.fromCurrency = function() {
      var amount;
      amount = parseFloat(this.replace(/[$,]/g, ''));
      return amount;
    };

  }());
