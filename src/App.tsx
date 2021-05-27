/// <reference path="./replacements.ts" />

const App: React.FC = () => {
   const [input, setInput] = React.useState('');
   const [keyboard, setKeyboard]: [boolean, any] = React.useState(true);

   const handleChange = (event): void => {
      const value = event.target.value;
      if(keyboard){ // azerty to qwerty
         const newValue = value.split("").map(elem => AZERTY[elem] ? AZERTY[elem] : "~").join("");
         return setInput(newValue);
      } // qwerty to azerty
      const newValue = value.split("").map(elem => QWERTY[elem] ? QWERTY[elem] : "~").join("");
      return setInput(newValue)
   };

   const format = (bool: boolean): string => bool ? "Azerty" : "Qwerty"; // return azerty or qwerty based upon the boolean

   return (
      <div className="App">
         {/* info  */}
         <p style={{textAlign: "center"}}>{"Missing  AZERTY characters: <, >"}</p>
         <br />
         <p style={{textAlign: "center"}}>{"If you see a tilde (~) it means that the character is not found (except for the tilde itself of course)"}</p>
         {/* the actual converter  */}
         <p className="title">{`Input: ${format(keyboard)}`}</p>
         <textarea id="input" rows={5} onChange={handleChange}/>
         <p className="title">{`Output: ${format(!keyboard)}`}</p>
         <textarea id="output" rows={5} value={input} />
         <button id="switch" onClick={() => setKeyboard(!keyboard)}>Switch</button>
      </div>
   );
};

ReactDOM.render(<App />, document.querySelector("#root"));