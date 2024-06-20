import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white p-4 rounded-lg text-sm flex justify-between items-center ${className}`}
    >
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-600 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-black w-full mx-1 py-1.5 px-2 bg-gray-300 rounded-md"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-1/2 ml-5">
        <label
          htmlFor="currencySelect"
          className="text-gray-600 mb-2 inline-block w-full"
        >
          Currency Type
        </label>
        <select
          id="currencySelect"
          className="rounded-md px-2 py-1.5 bg-gray-300 cursor-pointer outline-black w-full"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
