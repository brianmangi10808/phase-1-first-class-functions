function receivesAFunction(callback) {
    // Your implementation here
    callback(); // Call the provided function
  }
  function returnsANamedFunction() {
    return function namedFunction() {
      // Function body (could be empty for simplicity)
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // Function body (could be empty for simplicity)
    };
  }
  