const user = require("./user");
let val;
let updater = (newupdater) =>{
    val = newupdater;
}
user(updater);

val = "Str" && console.log("Str");
val = "Str" && console.log("Str");
val = "Str" && console.log("Str");
