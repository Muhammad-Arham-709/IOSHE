"use client";
import { useState } from "react";

export default function CarbonCalculator() {
  const [fuel, setFuel] = useState("");
  const [power, setPower] = useState("");
  const [calcResult, setCalcResult] = useState<any>(null);

  const handleCalculator = () => {
    const fuelNum = parseFloat(fuel) || 0;
    const powerNum = parseFloat(power) || 0;
    const total = Math.round(fuelNum * 2.68 + powerNum * 0.45);
    setCalcResult({
      total,
      advice: total > 5000
        ? "High environmental intensity detected. IOSHE recommends advanced ISO 14001 sustainability alignment and climate governance improvements."
        : "Environmental metrics indicate positive sustainability readiness and structured climate compliance alignment."
    });
  };

  return (
    <section id="carbon-calculator" className="py-16 md:py-20 px-4 sm:px-6 bg-[#F4F6F2] border-y border-[#DCE5DF]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
         
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D352B]">Carbon Footprint Calculator</h2>
          <p className="mt-3 text-sm sm:text-base text-[#5E6C64]">
            Estimate your organization's environmental impact through fuel and electricity consumption.
          </p>
        </div>

        <div className="mt-8 md:mt-10 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[#1D352B] text-sm font-medium mb-2">Fuel Consumption (Liters/month)</label>
              <input
                type="number"
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
                placeholder="e.g. 2500"
                className="w-full rounded-xl border border-[#CAD5CF] px-4 py-3 text-base outline-none focus:ring-2 focus:ring-[#1D352B]/20"
                aria-label="Monthly fuel consumption in liters"
              />
            </div>
            <div>
              <label className="block text-[#1D352B] text-sm font-medium mb-2">Electricity Usage (kWh/month)</label>
              <input
                type="number"
                value={power}
                onChange={(e) => setPower(e.target.value)}
                placeholder="e.g. 6200"
                className="w-full rounded-xl border border-[#CAD5CF] px-4 py-3 text-base outline-none focus:ring-2 focus:ring-[#1D352B]/20"
                aria-label="Monthly electricity usage in kWh"
              />
            </div>
          </div>

          <button
            onClick={handleCalculator}
            className="mt-6 w-full sm:w-auto px-8 py-3 rounded-xl bg-[#1D352B] text-white font-semibold hover:bg-[#2B4A3C] transition-all shadow-md"
          >
            Analyze Environmental Metrics
          </button>

          {calcResult && (
            <div className="mt-6 rounded-xl bg-[#EDF4EF] border p-5 animate-fade-up">
              <h3 className="text-lg font-semibold text-[#1D352B]">Estimated Output:</h3>
              <div className="mt-1 text-3xl sm:text-4xl font-bold text-[#2D6B4F]">
                {calcResult.total.toLocaleString()} kg CO₂e
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#53635A]">{calcResult.advice}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}