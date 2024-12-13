// Finally clause: is added after try catch clauses. it ALWAYS RUNS. it is used to clearup
const f = () => {
  try {
    let a = 0;
    // console.log(program) //wrote this to throw an err
    console.log("Program ran successfully");
    return; //added this to see if finally works in this case nd it works jst after this return nd as return is used nd there's no err in try so catch wont work
  } catch (err) {
    console.log("This is an error");
    console.log(p); //wrote this to throw err so that we can see if both try nd catch get err how the err in catch will be handled
  } finally {
    //if i remove this finally nd jst write simple log statement nd there r err in try nd catch both, remember that log statememnt wont be executed as err of catch wont let upcoming src to load
    console.log("I am a good boy");
    // Close the file
    // Exit the Loop
    // Write to the log file
  }
};

f();
console.log("End"); //finally runs before this outer code jst after try's return
