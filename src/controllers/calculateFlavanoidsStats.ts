export function calculateFlavanoidsStats(data: number[]): { mean: number; median: number; mode: number } {
    const total = data.length;
  
    // Mean calculation
    const mean = data.reduce((acc, curr) => acc + curr, 0) / total;
  
    // Median calculation
    const sortedData = data.slice().sort((a, b) => a - b);
    const median = total % 2 === 0 ? (sortedData[total / 2 - 1] + sortedData[total / 2]) / 2 : sortedData[(total - 1) / 2];
  
    // Mode calculation
    const modeMap = new Map<number, number>();
    data.forEach((value) => {
      modeMap.set(value, (modeMap.get(value) || 0) + 1);
    });
    const mode = +Array.from(modeMap.entries()).sort((a, b) => b[1] - a[1])[0][0];
  
    return { mean, median, mode };
  }
  