// App.tsx

import { useEffect, useState } from 'react';
import './App.css';

import wineData from './data/wineData.json'; // Importing wine dataset
import { calculateGamma } from './controllers/calculateGamma';
import { calculateFlavanoidsStats } from './controllers/calculateFlavanoidsStats';
import FlavanoidsStats from './components/FlavanoidsStats';
import GammaStats from './components/GammaStats';

function App() {
  const [flavanoidsClass1Stats, setFlavanoidsClass1Stats] = useState<{ mean: number; median: number; mode: number }>({ mean: 0, median: 0, mode: 0 });
  const [flavanoidsClass2Stats, setFlavanoidsClass2Stats] = useState<{ mean: number; median: number; mode: number }>({ mean: 0, median: 0, mode: 0 });
  const [flavanoidsClass3Stats, setFlavanoidsClass3Stats] = useState<{ mean: number; median: number; mode: number }>({ mean: 0, median: 0, mode: 0 });
  const [gammaClass1Stats, setGammaClass1Stats] = useState<{ mean: number; median: number; mode: number }>({ mean: 0, median: 0, mode: 0 });
  const [gammaClass2Stats, setGammaClass2Stats] = useState<{ mean: number; median: number; mode: number }>({ mean: 0, median: 0, mode: 0 });
  const [gammaClass3Stats, setGammaClass3Stats] = useState<{ mean: number; median: number; mode: number }>({ mean: 0, median: 0, mode: 0 });

  useEffect(() => {
    // Calculate Flavanoids stats for each alcohol class
    const flavanoidsClass1 = wineData.filter(entry => entry.Alcohol === 1).map(entry => Number(entry.Flavanoids)).sort((a, b) => a - b);
    const flavanoidsClass2 = wineData.filter(entry => entry.Alcohol === 2).map(entry => Number(entry.Flavanoids)).sort((a, b) => a - b);
    const flavanoidsClass3 = wineData.filter(entry => entry.Alcohol === 3).map(entry => Number(entry.Flavanoids)).sort((a, b) => a - b);
    setFlavanoidsClass1Stats(calculateFlavanoidsStats(flavanoidsClass1));
    setFlavanoidsClass2Stats(calculateFlavanoidsStats(flavanoidsClass2));
    setFlavanoidsClass3Stats(calculateFlavanoidsStats(flavanoidsClass3));

    // Calculate Gamma stats for each alcohol class
    const gammaValues = calculateGamma(wineData);
    setGammaClass1Stats(calculateFlavanoidsStats(gammaValues.class1));
    setGammaClass2Stats(calculateFlavanoidsStats(gammaValues.class2));
    setGammaClass3Stats(calculateFlavanoidsStats(gammaValues.class3));
  }, []);

  return (
    <div className="App">
      <FlavanoidsStats
        class1Stats={flavanoidsClass1Stats}
        class2Stats={flavanoidsClass2Stats}
        class3Stats={flavanoidsClass3Stats}
      />
      <GammaStats
        class1Stats={gammaClass1Stats}
        class2Stats={gammaClass2Stats}
        class3Stats={gammaClass3Stats}
      />
    </div>
  );
}

export default App;
