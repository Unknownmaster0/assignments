import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here
  const expensiveValue = useMemo(function () {
    // return the exponent of the number input by the user.
    let mul = 1;
    for (let i = 2; i <= input; i++) {
      mul *= i;
    }
    return input == 0 ? 0 : mul;
  }, [input]);
  // Your solution ends here

  return (
    <div>
      <input type="number" onChange={(e) => setInput(Number(e.target.value))} />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}