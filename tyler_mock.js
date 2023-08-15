// Input: forts = [1,0,0,-1,0,0,0,0,1]
// Output: 4
// Explanation:
// - Moving the army from position 0 to position 3 captures 2 enemy forts, at 1 and 2.
// - Moving the army from position 8 to position 3 captures 4 enemy forts.
// Since 4 is the maximum number of enemy forts that can be captured, we return 4.

// itr through array, forts capped, if forts capped is 4 then return
// it will return 0 if no forts 
// if element = 0 => capped++
// after loop, return capped
// if 1 then 

// start, end pointer
// 

var captureForts = function(forts) {
   let capturedEnemy = 0;
   const captured = [];
   for(const el of forts){
        // if(el === 1){
        //     while(el!==-1){
        //         if(el === 0)
        //             capped+=1;
        //     }
    }
   }

   return capped;
};

console.log(captureForts([1,0,0,-1,0,0,0,0,1]));
