import React, { useCallback, useEffect, useState } from "react";

import Ingredient from "./ingredient";

function Recipe() {
  //   hooks for recipe name
  const [name, setName] = useState("");

  //   hooks for Notes
  const [notes, setNotes] = useState("");

  //   hooks for Original Serves
  const [originalServe, setOriginalServe] = useState("");

  //   hooks for Need to  Serves
  const [needServe, setneedServe] = useState("");

  //hook for Radio imperial
  const [imperial, setImperial] = useState(false);

  //hook for Radio imperial
  const [metric, setMetric] = useState(false);

  // State for ingredients
  const [ingredients, setIngredients] = useState([
    { qty: "", type: "", name: "" },
    { qty: "", type: "", name: "" },
    { qty: "", type: "", name: "" },
    { qty: "", type: "", name: "" },
  ]);

  function handleQtyChange(index, newQty) {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].qty = newQty;
    setIngredients(updatedIngredients);
  }

  function handleTypeChange(index, newType) {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].type = newType;
    setIngredients(updatedIngredients);
  }

  function handleNameChange(index, newName) {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index].name = newName;
    setIngredients(updatedIngredients);
  }

  

  // Function to handle click
  const handleClick = () => {
    console.log("Ingredients:");
    ingredients.forEach((item) => {
      console.log("Name:", item.name);
      console.log("Qty:", item.qty);
      console.log("Type:", item.type);
    });
  };
  function resize() {
    setIngredients((prevIngredients) =>
      prevIngredients.map((item) => ({


        qty: Number(item.qty) * Number(needServe),
        type: ((item.type==="Ounces") || item.qty>1 )?(item.type="Tablespoons"):
        (item.qty%8===0)?(item.type="Cups"):"" ,
        name: item.name,
      }))
    );
  }
  function clear() {
    setIngredients([
      { qty: "", type: "", name: "" },
      { qty: "", type: "", name: "" },
      { qty: "", type: "", name: "" },
      { qty: "", type: "", name: "" },
    ]);
  }

  function addIngredients() {
    setIngredients([...ingredients, { qty: "", type: "", name: "" }]);
  }
  return (
    <>
      <section className="flex justify-center bg-black ">
        <div className="w-[50%] bg-white  my-5 py-10">
          <div className="flex-col flex">
            <div className="px-10">
              <h1 htmlFor="" className="text-2xl font-bold">
                Resize Your Recipe
              </h1>
              <p htmlFor="" className="py-2">
                Multiply your recipes easily using our recipe convertor tool.
                Fill out the information below and Click Resize to Get Started.
              </p>

              {/* html for recipe name */}
              <fieldset className="flex-col flex">
                <label htmlFor="" className="pb-2 pt-3">
                  Recipe Name
                </label>
                <input
                  type="text"
                  className="border-2 py-2 border-slate-700 px-5"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </fieldset>

              {/* html for notes */}
              <fieldset className="flex-col flex pt-5">
                <label htmlFor="" className="pb-2 pt-3">
                  Notes
                </label>
                <textarea
                  cols="30"
                  rows="4"
                  className="border-2 py-3 border-slate-700 px-5"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </fieldset>

              {/* html for serves */}
              <div className="flex justify-between items-center w-100">
                <fieldset className="flex-col flex mt-4 w-1/2">
                  <label htmlFor="" className="">
                    Original Recipe Serves
                  </label>
                  <input
                    type="text"
                    className="border-2 py-2 border-slate-700 w-[320px] px-5"
                    value={originalServe}
                    onChange={(e) => setOriginalServe(e.target.value)}
                  />
                 
                </fieldset>
                <div className="flex items-center">
                    <span className="text-3xl mt-8">{">"}</span>
                  </div>
                <fieldset className="flex-col flex mt-4 ">
                  <label htmlFor="" className="">
                    Needs to Serve
                  </label>
                  <input
                    type="text"
                    className="border-2 py-2 border-slate-700 w-100 px-5"
                    value={needServe}
                    onChange={(e) => setneedServe(e.target.value)}
                  />
                </fieldset>
              </div>

              {/* html for ingredients */}
              <div className="py-5">
                <h3 className="text-xl font-bold">Ingredients</h3>
                <p>Enter the Ingredients of Your original Recipe</p>
              </div>

              {/* html for radio button of imperial and metrics */}
              <div className="flex justify-between">
                <div>
                  <input
                    type="radio"
                    checked={imperial}
                    onChange={() => {
                      setImperial(true);
                      setMetric(false);
                    }}
                  />
                  <label>Imperial</label>
                  <input
                    type="radio"
                    checked={metric}
                    onChange={() => {
                      setImperial(false);
                      setMetric(true);
                    }}
                  />
                  <label>Metric</label>
                </div>
                <div>
                  <p className="text-teal-900 text-xl font-bold">
                    Conversion Chart
                  </p>
                </div>
              </div>
            </div>

            {/* html for table */}

            <div className="">
              <table className="flex flex-col px-10">
                <tbody className="flex justify-start">
                  <tr>
                    <th className="uppercase w-20 text-start text-slate-400">
                      QTY.
                    </th>
                    <th className="uppercase w-[200px] text-start text-slate-400">
                      Measurement
                    </th>
                    <th className="uppercase w-[400px] text-start text-slate-400">
                      Ingredient
                    </th>
                  </tr>
                </tbody>
              </table>
              {/* ingredients boxes */}
              {ingredients.map((item, index) => (
                <Ingredient
                  key={index}
                  qty={item.qty}
                  type={item.type}
                  name={item.name}
                  onQtyChange={(newQty) => handleQtyChange(index, newQty)}
                  onTypeChange={(newType) => handleTypeChange(index, newType)}
                  onNameChange={(newName) => handleNameChange(index, newName)}
                />
              ))}
            </div>

            <div className="w-100 flex justify-center pb-3py-3 ">
              <button
                className="w-[100%] border-2 py-3"
                onClick={addIngredients}
              >
                +Add Ingredient
              </button>
            </div>

            {/* div for button  */}
            <div className="flex justify-between px-10 py-3 w-100">
              <button
                className="w-3/4 border-2 py-3 bg-blue-600 text-white font-bold"
                onClick={resize}
              >
                Resize Recipe
              </button>
              <button
                className="w-1/5 border-2 py-3 bg-slate-200"
                onClick={clear}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recipe;  