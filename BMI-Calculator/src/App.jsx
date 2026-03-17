import React, { useState } from 'react'
import { Mars, Minus, Plus, Venus } from 'lucide-react'

const App = () => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(162);
  const [weight, setWeight] = useState(58);
  const [age, setAge] = useState(22);
  const [result, setResult] = useState('');
  const handleCalculate = () => {
    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);

    let category = "";
    let advice = "";

    if (bmi < 18.5) {
      category = "Underweight";
      advice = "You may need a calorie surplus diet.";
    } else if (bmi < 25) {
      category = "Normal";
      advice = "You are in a healthy range.";
    } else if (bmi < 30) {
      category = "Overweight";
      advice = "Try regular exercise and balanced food.";
    } else {
      category = "Obese";
      advice = "A calorie deficit and exercise are recommended.";
    }

    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const calories = Math.round(bmr * 1.2);

    setResult({
      bmi: bmi.toFixed(1),
      category,
      bmr: Math.round(bmr),
      calories,
      advice,
    });
  };


  const ValueCard = ({title, value, setValue, unit, min = 1}) =>(
    <div className='bg-slate-800 rounded-3xl p-4 text-center shadow-md'>
      <p className='text-sm text-slate-400'>{title}</p>
      <h2 className="text-3xl font-bold mt-2">
        {value}
        <span className="text-sm font-medium text-slate-400 ml-1">{unit}</span>
      </h2>
      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={() => setValue((prev) => Math.max(min, prev - 1))}
          className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition"
        >
          <Minus size={18} />
        </button>
        <button
          onClick={() => setValue((prev) => prev + 1)}
          className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  )
  return (
    <div className='min-h-screen w-full bg-[#0b1020] flex items-center justify-center text-white px-16 py-4'>
      <div className='w-full max-w-md bg-[#111827] rounded-4xl p-6 shadow-2xl space-y-5'>
        <h1 className='text-2xl font-bold text-center'>BMI Calculator</h1>
         {/* Gender selection */}
        <div className='grid grid-cols-2 gap-5'>
          <button onClick={() =>{
            setGender('male')
          }} className={`rounded-3xl p-6 flex flex-col items-center justify-center transition ${
              gender === "male"
                ? "bg-green-500 text-black"
                : "bg-slate-800 text-white"
            }`}>
            <Mars size={32}/>
            <span className='text-2xl mt-2 font-semibold'>Boy</span>
          </button>
          <button onClick={() =>{
            setGender('female')
          }} className={`rounded-3xl p-6 flex flex-col items-center justify-center transition ${
              gender === "female"
                ? "bg-green-500 text-black"
                : "bg-slate-800 text-white"
            }`}>
            <Venus size={32}/>
            <span className='text-2xl mt-2 font-semibold'>Girl</span>
          </button>
        </div>
        {/* Height */}
        <div className="bg-slate-800 rounded-3xl p-5 text-center shadow-md">
          <p className='text-sm text-gray-400'>Height</p>
          <h2 className='text-3xl font-bold mt-2'>{height}
            <span className='text-base text-slate-400 ml-1'>cm</span>
          </h2>
          <input className='w-full mt-4 accent-green-600' type="range" min={100} max={220} value={height} onChange={(e) =>{
            setHeight(Number(e.target.value))
          }}/>
        </div>
        {/* Weight  and Age */}
        <div className="grid grid-cols-2 gap-4">
          <ValueCard
            title="Weight"
            value={weight}
            setValue={setWeight}
            unit="kg"
          />
          <ValueCard
            title="Age"
            value={age}
            setValue={setAge}
            unit="yr"
          />
        </div>
        {result && (
          <div className="bg-slate-800 rounded-3xl p-5 shadow-md">
            <p className="text-sm text-slate-400">Your Result</p>
            <h2 className="text-5xl font-bold mt-2">{result.bmi}</h2>
            <p className="text-green-400 font-semibold mt-2">
              {result.category}
            </p>

            <div className="mt-4 space-y-1 text-sm text-slate-300">
              <p>BMR: {result.bmr} kcal/day</p>
              <p>Maintenance Calories: {result.calories} kcal/day</p>
            </div>

            <p className="mt-4 text-sm text-slate-400">{result.advice}</p>
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleCalculate}
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-2xl transition"
        >
          Calculate BMI
        </button>
      </div>
    </div>
  )
}

export default App
