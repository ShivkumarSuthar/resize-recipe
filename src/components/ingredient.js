import React, { useEffect, useState } from "react";
import PickType from "./pickType.json";

function Ingredient({ qty, type, name, onQtyChange, onTypeChange, onNameChange }) {

    // hook for pick types
  const [pickTypes, setPickTypes] = useState([]);
  const [selectedPick, setSelectedPick] = useState("");

  // //hook for Qty
  // const [, setQty] = useState("")

  //   //hook for Ingredients
  //   const [Ingredient, setIngredients] = useState("")

  useEffect(() => {
    const data = PickType["Pick Type"];
    setPickTypes(data); // Set the state with the received data
  }, []);


  return (
    <table className="flex flex-col items-center py- border-t-2">
      <tbody className="py-3">
        <tr>
          <td>
            <input
              type="text"
              className="border-2 border-slate-700 w-16 py-2 px-2"
              placeholder="QTY"
              value={qty} 
              onChange={(e)=>onQtyChange(e.target.value)}
            //   pattern=".*\d+.*" i will do later
            />
          </td>
          <td>
            <select
              value={type}
              onChange={(e) => onTypeChange(e.target.value)}
              className="border-2 border-slate-700 py-2 mx-2 w-[200px] "
            >
              <option value="">Select Type</option>

              {Object.keys(pickTypes).map((item, index) => (
                <optgroup key={index} label={item}>
                  {Array.isArray(pickTypes[item]) ? (
                    pickTypes[item].map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))
                  ) : (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  )}
                </optgroup>
              ))}
            </select>
          </td>
          <td>
            <input
              type="text"
              className="border-2 border-slate-700 w-[400px] py-2 px-2"
              placeholder="Ingredient Name"
              value={name}
              onChange={(e)=>onNameChange(e.target.value)}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}


export default Ingredient;