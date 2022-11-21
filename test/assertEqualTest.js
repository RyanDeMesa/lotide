const assertEqual = require('../assertEqual');


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //fail
assertEqual(1, 1); // pass
assertEqual(1, 1.1); // fail
assertEqual("hi", "hi"); // pass