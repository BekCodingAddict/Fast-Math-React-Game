import { useEffect, useState } from "react";

const handleSelectOperator = (operator) => {
  return operator === 1
    ? "+"
    : operator === 2
      ? "-"
      : operator === 3
        ? "*"
        : "/";
};

const canculateSum = (a, operator, b) => {
  return operator === 1
    ? a + b
    : operator === 2
      ? a - b
      : operator === 3
        ? a * b
        : (a / b) % 1 === 0
          ? a / b
          : (a / b).toFixed(2);
};

function getRandomUniqueArray(min, max, count) {
  // Create an array with values from min to max
  let arr = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  // Shuffle the array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }

  // Return the first 'count' elements from the shuffled array
  return arr.slice(0, count);
}

function Playing() {
  const [level, setLevel] = useState(1);
  const [operator, setOperator] = useState(1);
  const [values, setValues] = useState({
    value1: 0,
    value2: 0,
  });
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOperator(Math.floor(Math.random() * 4) + 1);
    setValues({
      ...values,
      value1: Math.floor(Math.random() * 100) + 1,
      value2: Math.floor(Math.random() * 100) + 1,
    });
    const faceOptions = [];
    const unique = getRandomUniqueArray(1, 10, 4);
    const unique2 = getRandomUniqueArray(1, 4, 4);

    const handleSetOptions = () => {
      for (let i = 0; i < 4; i++) {
        faceOptions.push(
          canculateSum(
            canculateSum(
              Number(values.value1),
              operator,
              Number(values.value2),
            ),
            operator,
            unique[i],
          ),
        );

        //3 ta hato 1 ta tori varyanitni arrayga solish kerak!
      }
      console.log(faceOptions);
    };

    handleSetOptions();
  }, []);

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-start bg-[#ede7e9]">
      <div className="flex w-full items-center justify-between bg-green-700 pb-4 pt-4">
        <div className="ml-4">
          <h5 className="font-semibold text-stone-200 sm:text-[25px]">Name:</h5>
        </div>
        <div>
          <p className="text-stone-200 sm:text-[20px]">Max Score:X</p>
        </div>
        <div className="mr-4">
          <p className="text-stone-200 sm:text-[20px]">History</p>
        </div>
      </div>

      <div className="flex h-2/5 w-full items-center justify-center bg-slate-400">
        <p className="text-[3rem] font-extrabold text-green-950 md:text-[5rem]">
          {values.value1} {handleSelectOperator(operator)}
          {values.value2} =?
          {/* {canculateSum(Number(values.value1), operator, Number(values.value2))} */}
        </p>
      </div>

      <div className="flex h-3/5 w-full items-center justify-center bg-teal-400">
        <div className="ml-4 mr-4 flex w-3/4 flex-col items-center justify-center gap-10">
          {options.map((option, index) => (
            <button
              key={index}
              className="flex w-full cursor-pointer items-center justify-center rounded-full bg-green-900 pb-3 pt-3 text-[1.3rem] font-semibold"
            >
              {option}
            </button>
          ))}
          {/* {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              className="flex w-full cursor-pointer items-center justify-center rounded-full bg-green-900 pb-3 pt-3 text-[1.3rem] font-semibold"
            >
              {canculateSum(
                Number(values.value1),
                operator,
                Number(values.value2),
              )}
            </button>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Playing;
