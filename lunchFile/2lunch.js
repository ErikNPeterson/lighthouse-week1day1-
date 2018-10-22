


function whatToDoForLunch(hungry, availableTime) {
    var response = "Pick something up and eat it in the lab";
        if (!hungry){
            response = "Get back to work!";
        } else if (availableTime > 30){
            response = "I would like to remind you that we're in a bootcamp and that you should reconsider how much time you have to spare.";
        } else if (availableTime >= 20){
            response = "Lets try a place near by."
        }
    console.log(response);
  }


//   *
//  * Modify the contents of the function below, such that:
//  *
//  * If we're not hungry, we want to tell ourselves to get back to work.
//  * Otherwise, we want to pick something up and eat it in the lab when
//  * we've got less than 20 minutes or to try a place nearby if we've
//  * got between 20 and 30 minutes. If we have any more time than that,
//  * we want to remind ourselves that we're in a bootcamp and that we
//  * should reconsider how much time we actually have to spare.
//  *
//  * hungry is a Boolean, representing if you're hungry or not.
//  * availableTime is a Number representing the time you have for lunch,
//  * in minutes.
//  */




console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);