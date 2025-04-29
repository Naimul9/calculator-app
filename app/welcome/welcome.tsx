import { useState } from "react";

export function Welcome() {
  const [singleValue, setSingleValue] = useState("");
  const [singleResult, setSingleResult] = useState<number | null>(null);

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [multiResult, setMultiResult] = useState<number | null>(null);

  const [modifiedValue, setModifiedValue] = useState("");
  const [extraMultiplier, setExtraMultiplier] = useState("");
  const [finalResult, setFinalResult] = useState<number | null>(null);

  const [increasedResult, setIncreasedResult] = useState<number | null>(null);
  const [finalSumWith70, setFinalSumWith70] = useState<number | null>(null);

  const handleSingleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseFloat(singleValue);
    if (!isNaN(num)) {
      setSingleResult(num * 20);
    } else {
      setSingleResult(null);
    }
  };

  const handleMultiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);
    if (!isNaN(num1) && !isNaN(num2)) {
      const result = num1 * num2;
      setMultiResult(result);
      setModifiedValue(result.toString());
      setFinalResult(null);
      setExtraMultiplier("");
      setIncreasedResult(null);
      setFinalSumWith70(null);
    } else {
      setMultiResult(null);
      setModifiedValue("");
      setFinalResult(null);
      setIncreasedResult(null);
      setFinalSumWith70(null);
    }
  };

  const handleFinalMultiply = () => {
    const modified = parseFloat(modifiedValue);
    const extra = parseFloat(extraMultiplier);
    const price20 = singleResult ?? 0;

    if (!isNaN(modified) && !isNaN(extra)) {
      const product = modified * extra;
      const total = product + price20;
      setFinalResult(total);
      setIncreasedResult(null);
      setFinalSumWith70(null);
    } else {
      setFinalResult(null);
    }
  };

  const handleIncreaseBy60 = () => {
    if (finalResult !== null) {
      const increased = finalResult + finalResult * 0.6;
      setIncreasedResult(increased);
      setFinalSumWith70(null);
    }
  };

  const handleAdd70 = () => {
    if (increasedResult !== null) {
      setFinalSumWith70(increasedResult + 70);
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl font-bold uppercase italic mb-10 text-center">
        Calculator
      </h1>

      <div className="w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* Step 1 */}
        <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold italic mb-4">
            Step 1: Price × 20
          </h2>
          <form onSubmit={handleSingleSubmit} className="flex flex-col gap-4">
            <input
              className="bg-white text-black px-4 py-2 rounded-lg"
              type="text"
              value={singleValue}
              onChange={(e) => setSingleValue(e.target.value)}
              placeholder="Enter price"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
            >
              Calculate
            </button>
            {singleResult !== null && (
              <div className="bg-white text-black rounded-lg px-4 py-2">
                Result: {singleResult}
              </div>
            )}
          </form>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-md">
          <h2 className="text-xl sm:text-2xl font-semibold italic mb-4">
            Step 2: Multiply Two Values
          </h2>
          <form onSubmit={handleMultiSubmit} className="flex flex-col gap-4">
            <input
              className="bg-white text-black px-4 py-2 rounded-lg"
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="Enter Product Weight"
            />
            <input
              className="bg-white text-black px-4 py-2 rounded-lg"
              type="text"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              placeholder="Enter Product Quantity"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
            >
              Multiply
            </button>
            {multiResult !== null && (
              <div className="bg-white text-black rounded-lg px-4 py-2">
                Result: {multiResult}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-md w-full max-w-screen-lg mt-8 flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold italic">
          Step 3: Modify and Finalize
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="bg-white text-black px-4 py-2 rounded-lg"
            type="text"
            value={modifiedValue}
            onChange={(e) => setModifiedValue(e.target.value)}
            placeholder="Modified value"
          />
          <input
            className="bg-white text-black px-4 py-2 rounded-lg"
            type="text"
            value={extraMultiplier}
            onChange={(e) => setExtraMultiplier(e.target.value)}
            placeholder="Multiply with 1 or 3"
          />
        </div>

        <button
          type="button"
          onClick={handleFinalMultiply}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
        >
          Final Multiply + Add Price × 20
        </button>

        {finalResult !== null && (
          <>
            <input
              readOnly
              className="bg-white text-black px-4 py-2 rounded-lg"
              value={finalResult}
            />
            <button
              type="button"
              onClick={handleIncreaseBy60}
              className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg"
            >
              Increase by 60%
            </button>
          </>
        )}

        {increasedResult !== null && (
          <>
            <input
              readOnly
              className="bg-white text-black px-4 py-2 rounded-lg"
              value={increasedResult}
            />
            <button
              type="button"
              onClick={handleAdd70}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
            >
              Add 70
            </button>
          </>
        )}

        {finalSumWith70 !== null && (
          <input
            readOnly
            className="bg-white text-black px-4 py-2 rounded-lg"
            value={finalSumWith70}
          />
        )}
      </div>
    </main>
  );
}
