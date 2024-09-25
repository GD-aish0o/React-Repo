import { useState, useCallback, useEffect } from "react";

function PasswordGenerator() {
  const [Charlength, SetLength] = useState(8);
  const [inputNumbers, AllowNumbers] = useState(false);
  const [SpecialChars, AllowSpChars] = useState(false);
  const [Password, SetPassword] = useState("");


  const PwdGen = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (inputNumbers) string += "1234567890"
    if (SpecialChars) string += ".,/?!@#$%^&*()_+=-[]}{';:><~"
    // all symbols in my keyboard.

    for (let i = 1; i <= Charlength; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(char);
    }

    SetPassword(password);

  }, [Charlength, inputNumbers, SpecialChars, SetPassword]);

  useEffect(() => {
    PwdGen()
  }, [Charlength, inputNumbers, SpecialChars, PwdGen])

  
  return (
    <div className=" rounded-sm bg-slate-300 h-auto w-full max-w-lg shadow-lg px-4  mx-auto py-8 shadow-sky-950 my-8 text-sky-900">
      <h1 className="text-3xl text-center text-white bg-sky-900 px-2 py-4 rounded-full font-semibold">
        Random Password Generator
      </h1>

      <div className="flex shadow rounded-sm my-4 overflow-hidden ">
        <input
            type="text"
            value={Password}
            className="center py- px-3  mx-3 my-3 py-2 rounded-bl-sm rounded-tl-sm rounded-sm content-center mr-0 text-sky-900 w-full"
            placeholder="Password"
            readOnly
        />
        <br/>
        <button className="outline-none bg-blue-900 text-white px-3 my-2 rounded-br-xl rounded-tr-xl ml-0 shrink-0">Copy</button>
      </div>

      <div className="Flex text-md  gap-x-2">
          <div className="Flex text-md items-center gap-x-1 justify-center ">
          <input
            name="Range"
            type="range"
            className="cursor-pointer appearance-none w-6/12 h-3 bg-sky-900 rounded-lg border-spacing-1 border-white ml-20"
            min={8}
            max={36}
            value={Charlength}
            onChange={(e) => {SetLength(e.target.value)}}
            
          />

              <label htmlFor="Range" className="font-semibold"> Length: {Charlength}</label>
          </div>
          <div className="flex justify-between px-20 py-3 font-semibold">
             <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={AllowNumbers}
              id="numberInput"
              onChange={() => {
                AllowNumbers((prev) => !prev )
              }} />
              <label htmlFor="numberInput">Numbers</label>
              
             </div>

             <div className="flex items-center gap-x-1">
                {/* ------------------------------------------ */}

              <input 
              type="checkbox"
               defaultChecked={AllowSpChars}
               id="SpecialCharacters"
               onChange={()=> {
                SpecialChars((prev) => !prev);
               }} />
               <label htmlFor="SpecialCharacters">Special Characters</label>
             </div>

          </div>

      </div>
    </div>
  );
}

export default PasswordGenerator;

