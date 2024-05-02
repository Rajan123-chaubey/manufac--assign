
import WineData  from '../data/wineData.json';

interface WineData {
    Alcohol: number;
    'Malic Acid': number;
    Ash: number | string;
    'Alcalinity of ash': number | string;
    Magnesium: number;
    'Total phenols': number;
    Flavanoids: number | string;
    'Nonflavanoid phenols': number | string;
    Proanthocyanins: string;
    'Color intensity': number | string;
    Hue: number;
    'OD280/OD315 of diluted wines': number | string;
    Unknown: number;
  }

export function calculateGamma(data: WineData[]): { class1: number[]; class2: number[]; class3: number[] } {
  const class1Gamma: number[] = [];
  const class2Gamma: number[] = [];
  const class3Gamma: number[] = [];

  data.forEach(entry => {
    const gamma = (Number(entry.Ash) * entry.Hue) / entry.Magnesium;
    if (entry.Alcohol === 1) class1Gamma.push(gamma);
    else if (entry.Alcohol === 2) class2Gamma.push(gamma);
    else if (entry.Alcohol === 3) class3Gamma.push(gamma);
  });

  return { class1: class1Gamma, class2: class2Gamma, class3: class3Gamma };
}
