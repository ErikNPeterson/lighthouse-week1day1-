var args = process.argv;
var originalPassword = process.argv[2];

function obfuscate(password){
  var passwordInArray = password.split('');
  var obfuscatedPassword = "";
  passwordInArray.forEach(function (item,index){
    switch (item.toLowerCase()){
      case 'a':
        obfuscatedPassword += "4";
        break;
      case 'e':
        obfuscatedPassword += "3";
        break;
      case 'o':
        obfuscatedPassword += "0";
        break;
      case 'l':
        obfuscatedPassword += "1";
        break;
      default:
        obfuscatedPassword += item;
    }
    return obfuscatedPassword
  });
  console.log(obfuscatedPassword);
}

obfuscate(originalPassword);