(function () {
    'use strict';
    describe('Tests the methods being added into the String class', function() {
      describe('A suite to test the hasVowels function', function(){
        it('should return truthy', function(){
          expect('School'.hasVowels()).toBeTruthy();
          expect('I love Javascript'.hasVowels()).toBeTruthy();
          expect('Smmt'.hasVowels()).not.toBeTruthy();
        });

        it('should return falsy', function(){
          expect('myth'.hasVowels()).toBeFalsy();
          expect('tryst'.hasVowels()).toBeFalsy();
          expect('small'.hasVowels()).not.toBeFalsy();
        });

        it('should return boolean data type',function () {
          expect(typeof 'juices'.hasVowels()).toEqual('boolean');
          expect(typeof 'pillow'.hasVowels()).toEqual('boolean');
        });
      });

      describe('A suite to test the toUpper function', function(){
        it('should return string in upper case letters', function(){
          expect('Lovelyn'.toUpper()).toEqual('LOVELYN');
          expect('This is the end!'.toUpper()).toEqual('THIS IS THE END!');
          expect('bazinga'.toUpper()).toEqual('BAZINGA');
          expect('TIA'.toUpper()).toEqual('TIA');
        });
      });

      describe('A suite to test the toLower function',function() {
        it('should return string in lower case letters',function() {
          expect('GERONIMO'.toLower()).toEqual('geronimo');
          expect('Finally, the RABBIT went into the hole.'.toLower())
            .toEqual('finally, the rabbit went into the hole.');
        });
      });

      describe('A suite to test the ucFirst function ', function () {
        it('should return Capitalized string ',function () {
          expect('food'.ucFirst()).toEqual('Food');
          expect('BICYCLE'.ucFirst()).toEqual('Bicycle');
          expect('Capital'.ucFirst()).toEqual('Capital');
        });
      });

      describe('A suite to test the isQuestion function', function () {
        it('should return a boolean if string ends question mark ', function () {
          expect('Are you mad?'.isQuestion()).toBeTruthy();
          expect('My name is Lovelyn'.isQuestion()).toBeFalsy();
          expect('? Who are you'.isQuestion()).toBeFalsy();
        });
      });

      describe('A suite to test the words function', function () {
        it('should return a list of the words in the string, as an Array', function () {
          expect('I am pissed!!!'.words()).toEqual(['I','am','pissed']);
          expect('Do not be rash'.words()).toEqual(['Do','not','be','rash']);

        });
      });
    });
}());
