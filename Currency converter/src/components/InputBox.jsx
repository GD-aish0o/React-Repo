import React, {useId} from "react";

export default function 
InputBox (
    
    {
    label,  //from -to
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    className = "",
})

{
   const amountInputId = useId()

    return (
        <div className={`bg-white p-4 rounded-lg text-sm flex flex-col sm:flex-row shadow-md ${className}`}>
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <label htmlFor={amountInputId}  className="text-[#073b4c] font-semibold mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-2 border-b-2 border-[#118ab2]focus:border-[#06d6a0] transition-colors"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(event) => onAmountChange && onAmountChange(Number(event.target.value))}
                />
            </div>
            <div className="w-full sm:w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-[#073b4c] font-semibold mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-3 py-2 bg-[#ffd166] text-[#073b4c] cursor-pointer outline-none w-full sm:w-auto hover:bg-[#f78c6b] focus:ring-2 focus:ring-[#ef476f] transition-colors
                    active:bg-[#f78c6b]"
                    value={selectCurrency}
                    onChange={(event) => onCurrencyChange && onCurrencyChange(event.target.value)}
                    
                >
                    
                        {currencyOptions.map((c) => (
                            <option key={c} value={c}>
                            {c}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    )
}