
var args = process.argv;
process.argv.splice(0,2);
var arrayOfInputs = process.argv;


function pigLatinTransformation(arrayOfWords){
  var ourNewSentence = "";
  arrayOfWords.forEach(function(item,index) {
    var transformedWord = "";
    for (let i = 1; i < item.length; i++){
      transformedWord += item[i];
    }
    var newWord = transformedWord + item[0] + "ay";
    if(index === (arrayOfWords.length -1)){
      ourNewSentence += newWord + ".";
    } else {
      ourNewSentence += newWord + " ";
    }
  });
  console.log(ourNewSentence);
}

pigLatinTransformation(arrayOfInputs);