
// Do NOT use JavaScript's Array.prototype.reverse or Array.prototype.join 
// functions to solve this problem.

var args = process.argv;
process.argv.splice(0,2);
var arrayOfInputs = process.argv;

function reverseWords(wordsArray){
  wordsArray.forEach(function(item) {
    var newString = "";
    for (let i = (item.length -1); i >= 0; i--){
      newString += item[i];
    }
    console.log(newString);
  });
}
reverseWords(arrayOfInputs);




