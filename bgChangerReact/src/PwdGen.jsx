import { useState, useCallback } from "react";

function PasswordGenerator() {
  const [Charlength, SetLength] = useState(8);
  const [inputNumbers, AllowNumbers] = useState(false);
  const [SpecialChars, AllowSpChars] = useState(false);
  const [Password, SetPassword] = useState("");

  const PwdGen = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (inputNumbers) {
      str += "0123456789";
    }
    if (SpecialChars) {
      str += `.,/?!@#$%^&*()_+=-[]}{'";:><~`;
    }
    // all symbols in my keyboard.

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass = string.charAt(char);
    }

    SetPassword(pass);
  }, [Charlength, inputNumbers, SpecialChars, SetPassword]);

  return (
    <div className=" rounded-sm bg-slate-300 h-auto w-full max-w-lg shadow-lg px-4  mx-auto py-8 shadow-sky-950 my-8">
      <h1 className="text-3xl text-center text-white bg-sky-900 px-2 py-4 rounded-full font-semibold">
        Random Password Generator
      </h1>

      <div className="flex shadow rounded-sm my-4 overflow-hidden ">
        <input
            type="text"
            value={Password}
            className="center py- px-3  mx-3 my-3 py-2 rounded-bl-sm rounded-tl-sm rounded-sm content-center mr-0 text-white w-full"
            placeholder="Password"
            readOnly
        />
        <br/>
        <button className="outline-none bg-blue-900 text-white px-3 my-2 rounded-br-xl rounded-tr-xl ml-0 shrink-0">Copy</button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
