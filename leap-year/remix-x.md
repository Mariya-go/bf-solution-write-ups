# Remix x

<!--
  GoldenHomer solutions inspired me to do my solution.
  I just add condition to check if year is a number.

-->

```js
const leapYear = (year) => {
  if (typeof year !== 'number') {
    return 'year is not a number';
  }

  return (
    (year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 400 === 0)
  );
};
```

## Strategy

<!--
  I need to check if the year is / by 4 and if the year is not / by 100 or is the year / by 4 and year / by 400.
-->

## Implementation

<!--
  I use the % operator to check if year / 4 = 0 and he use && to check if year not / by 100.
  I use === operator to check a conditions.
-->

## Possible Refactors

<!--
  We can use another if else conditions.

-->

## References
