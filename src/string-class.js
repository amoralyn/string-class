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
      // Convert to uppercase by converting to and from ASCII subtract 32
      return this.replace(/[a-z]/g, function (letter){
        return String.fromCharCode(letter.charCodeAt() - 32);
      });
    };

    /**
     * Turns the String to LowerCase
     * returns The LowerCased string
     */
    String.prototype.toLower = function() {
      // Convert to uppercase by converting to and from ASCII add 32
      return this.replace(/[A-Z]/g, function (letter){
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
     * returns The splitted words
     */
    String.prototype.words = function() {
      return this.replace(/[^A-z\s]/gi, '').replace(/ +/g, ' ').split(/\s/);
    };

    /**
     * Count the number of words in the string
     * returns The number of words in string
     */
    String.prototype.wordCount = function(){
      return this.words().length;
    };

    /**
     * Format a string to Currency
     * returns String representation of currency
     */
    String.prototype.toCurrency = function() {
      if (!/^[\d,.]+$/g.test(this)) {
        return NaN;
      }
      if (!this.match(/\./g)){
        return this.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }else {
        var number = this.split('.');
        return [number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','), number[1]].join('.');
      }
    };

    /**
     * Turns a String Currency to a number
     * returns Int or Float of Currency
     */
    String.prototype.fromCurrency = function() {
      if (!/^[\d,.]+$/g.test(this)) {
        return NaN;
      }
      return this.replace(/[$,]/g, '');
    };

  }());
