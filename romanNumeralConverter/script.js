const numberInput = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", () => {
  if (numberInput.value === "" || numberInput.value === "0") {
    output.innerText = "Please enter a valid number";
  } else if (Number(numberInput.value) < 0) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (Number(numberInput.value) >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    const romanNumber = convertToRoman(Number(numberInput.value));
    output.innerText = romanNumber;
  }
});

const convertToRoman = (number) => {
  let M = 0;
  let CM = 0;
  let D = 0;
  let CD = 0;
  let C = 0;
  let XC = 0;
  let L = 0;
  let XL = 0;
  let X = 0;
  let IX = 0;
  let V = 0;
  let IV = 0;
  let I = 0;

  M = Math.floor(number / 1000);
  let modM = number % 1000;

  if (modM !== 0) {
    if (modM >= 900) {
      CM = 1;
      modM -= 900;
    }
    D = Math.floor(modM / 500);
    let modD = modM % 500;

    if (modD !== 0) {
      if (modD >= 400) {
        CD = 1;
        modD -= 400;
      }
      C = Math.floor(modD / 100);
      let modC = modD % 100;

      if (modC !== 0) {
        if (modC >= 90) {
          XC = 1;
          modC -= 90;
        }
        L = Math.floor(modC / 50);
        let modL = modC % 50;

        if (modL !== 0) {
          if (modL >= 40) {
            XL = 1;
            modL -= 40;
          }
          X = Math.floor(modL / 10);
          let modX = modL % 10;

          if (modX !== 0) {
            if (modX >= 9) {
              IX = 1;
              modX -= 9;
            }
            V = Math.floor(modX / 5);
            let modV = modX % 5;

            if (modV !== 0) {
              if (modV >= 4) {
                IV = 1;
                modV -= 4;
              }
              I = modV;
            }
          }
        }
      }
    }

    return getRoman([
      { num: M, str: "M" },
      { num: CM, str: "CM" },
      { num: D, str: "D" },
      { num: CD, str: "CD" },
      { num: C, str: "C" },
      { num: XC, str: "XC" },
      { num: L, str: "L" },
      { num: XL, str: "XL" },
      { num: X, str: "X" },
      { num: IX, str: "IX" },
      { num: V, str: "V" },
      { num: IV, str: "IV" },
      { num: I, str: "I" },
    ]);
  }

  return getRoman([{ num: M, str: "M" }]);
};

// M    1000
// D    500
// C    100
// L    50
// X    10
// V    5
// I    1

const getRoman = (numbers) => {
  let roman = "";
  for (let i = 0; i < numbers.length; i++) {
    const numbersToPad = numbers[i].num * numbers[i].str.length;
    roman = roman.padEnd(numbersToPad + roman.length, numbers[i].str);
    // console.log(numbers[i].num + " : " + numbers[i].str);
  }
  return roman;
};
