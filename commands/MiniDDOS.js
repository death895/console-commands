/**
 * Function to print 3x+1 for a given number n
 * @param {number} n - The starting integer
 * also n is x here because im stupid :P
 */
function collatzConjecture(n) {
    // Print the initial value of n
    console.log(n);
    
    // Continue the loop until n becomes 1
    while (n > 1) {
      if (n % 2 === 0) {
        // If n is even, do n/2
        n = n / 2;
      } else {
        // If n is odd, do 3x+1
        n = 3 * n + 1;
      }
      // Print the current value of n
      console.log(n);
    }
  }

//litrally all the logic we need to execute the code
collatzConjecture(parseInt(window.prompt('enter a number')));
//PLEASE DON"T PUT NEGATIVES OR 0 OR 1 PLEASSSEESEESESEESESE I BEGGG UWU
