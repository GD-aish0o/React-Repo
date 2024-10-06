import { useState } from "react";
import useCurrencyInfo from "./CustomHooks/currencyInfo";
import InputBox from "./components/InputBox";

export default function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const Options = Object.keys(currencyInfo);

  const Swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
    setConvertedAmount((convertedAmount) =>
      parseFloat(convertedAmount).toFixed(2)
    );
  };

  return (
    <main className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-[#118ab2] to-[#06d6a0]">
      <div
        className="w-full max-w-md mx-auto p-8 rounded-2xl bg-[#f2f2f2] shadow-lg shadow-gray-500"
        
      >

          <h1 className="text-3xl font-bold text-center mb-6 shadow-lg  shadow-[#073b4c] text-[#073b4c] px-6 py-3 bg-white rounded-md  ">
          Currency Swap
          </h1>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                convert();
              }}

              className="space-y-6"
            >
                <InputBox
                  label="From"
                  amount={amount === 0 ? "" : amount}
                  currencyOptions={Options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
            

              <div className="flex justify-center my-4">
                <button
                  type="button"
                  className="bg-[#073b4c] text-white px-4 py-2 rounded-full active:bg-[#073b4c75]  transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-none font-medium"
                  onClick={Swap}
                >
                  Switch Currencies &#x21BB;
                </button>
              </div>

              <div className="w-full mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={Options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  onAmountChange={() => {}}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-tr from-[#118ab2] to-[#06d6a0] text-white px-4 py-3 rounded-lg hover:bg-[#118ab2] active:bg-[#073b4c] transition-all duration-300 transform hover:scale-102 focus:outline-none focus:ring-2 focus:ring-[#EF476f] font-semibold text-lg shadow-md"
                
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
        </div>
        
    
    </main>
  );
}
