// This function alizrs our array and gives us 
// -average value,
// -minimun value,
// -maximum value and 
// -length of our array in an object.
function analyzeArray(array){
    //This function calculates average of a given array of numbers.
    const averageFun=function(array){
        let sum=0;
        //first we iterate through the array using loop while adding 
        // each value to our sum variable.
        for (let i of array){
            sum+=i;
        }
        // We finally divide the sum to the number of items in the array 
        // using length().
        return (sum/array.length);
    }
    
    //This function returns the minimun value from the array using javascript's
    // built in Math.min() function.
    const minFun=function(array){
        return Math.min(...array);
    }
    
    //This function returns the minimun value from the array using javascript's
    // built in Math.max() function.
    const maxFun=function(array){
        return Math.max(...array);
    }
    // We then pass our argument 'array' into our functions
    //and assign it to a variable.
   const average=averageFun(array);
   const min=minFun(array);
   const max=maxFun(array);
   const length=array.length;

   // We finally return our values in an object.
    return {'average':average,'min':min,'max':max,'length':length};
}
module.exports=analyzeArray;