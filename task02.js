'use strict';

const foo = (n) => {
  for (let j=2; j < n; j++) {
    if ((n % j === 0)) {
      console.log(false);
      return;
    };
  };
  console.log(true);
};
foo(151);


