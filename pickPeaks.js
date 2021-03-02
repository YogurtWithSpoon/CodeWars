function pickPeaks(array) {
  let pos = [];
  let peaks = [];

  function isPlatoEnd(array, index) {
    for (let i = index + 1; i < array.length - 1; i++) {
      if (array[i] != "plato") {
        return array[i] === "down" ? true : false;
      }
    }
  }

  let detectDirection = array.map((_, index) => {
    if (array[index] > array[index + 1]) return "down";
    return array[index] < array[index + 1] ? "up" : "plato";
  });

  detectDirection.forEach((_, index) => {
    let currentPoint = detectDirection[index];
    let nextPoint = detectDirection[index + 1];
    if (
      currentPoint === "up" &&
      (nextPoint === "down" || nextPoint === "plato")
    ) {
      if (isPlatoEnd(detectDirection, index)) {
        pos.push(index + 1);
        peaks.push(array[index + 1]);
      }
    }
  });
  return { pos, peaks };
}
