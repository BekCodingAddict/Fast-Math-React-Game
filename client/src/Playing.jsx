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

function Playing() {
  const [level, setLevel] = useState(1);
  const [operator, setOperator] = useState(1);
  const [values, setValues] = useState({
    value1: 0,
    value2: 0,
  });

  useEffect(() => {
    setOperator(Math.floor(Math.random() * 4) + 1);
    setValues({
      ...values,
      value1: Math.floor(Math.random() * 100) + 1,
      value2: Math.floor(Math.random() * 100) + 1,
    });
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
        <p className="font-serif text-[2rem] font-extrabold text-green-950 md:text-[5rem]">
          {values.value1} {handleSelectOperator(operator)}
          {values.value2} =
          {canculateSum(Number(values.value1), operator, Number(values.value2))}
        </p>
      </div>
    </div>
  );
}

export default Playing;
