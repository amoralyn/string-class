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

      describe('A suite to the toLower function',function() {
        it('should return string in lower case letters',function() {
          expect('GERONIMO'.toLower()).toEqual('geronimo');
          expect('Finally, the RABBIT went into the hole.'.toLower())
            .toEqual('finally, the rabbit went into the hole.');
        });
      });

      describe('', function () {
        it('',function () {

        });
      });
    });
}());
