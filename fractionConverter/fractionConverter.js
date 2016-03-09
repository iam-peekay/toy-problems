/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

 function fractionConverter(fraction) {
   var isNegative = fraction < 1;
   if (isNegative) {
     fraction = fraction * -1;
   }
   var fractionString = fraction.toString();
   var decimal = fractionString.split('.')[1];
   var whole = fractionString.split('.')[0];
   var output;
   // If we have a decimal value of 0, just return it formatted
   // properly as a fraction string
   if (decimal === undefined) {
     return `${whole}/1`;
   }

   // Helper function to simplify a fraction to it's least value
   function reduce(numerator, denominator) {
     var lowerNum = Math.min(numerator, denominator);
     for (var i = lowerNum; i > 0; i--) {
       if (i > numerator || i > denominator) {
         return [numerator, denominator];
       }

       if (numerator % i === 0 && denominator % i === 0) {
         numerator = numerator / i;
         denominator = denominator / i;
       }
     }
     return [numerator, denominator];
   }

   var length = decimal.length;
   var denom = Math.pow(10, length);
   var reduced = reduce(+decimal, denom);
   var top = +whole * reduced[1] + +reduced[0];
   var bottom = reduced[1];
   output = isNegative ? `-${top}/${bottom}` : `${top}/${bottom}`
   return output;
 }
