// 최댓값 구하기
exports.max = (numbers) => {
  let result = numbers[0];
  numbers.forEach((n) => {
    if (n > result) {
      result = n;
    }
  });
  return result;
};

// refactoring
exports.max = (numbers) => Math.max(...numbers);

// 최솟값
exports.min = (numbers) => Math.min(...numbers);

// 평균값
exports.avg = (numbers) =>
  numbers.reduce((acc, current, index, { length }) => acc + current / length, 0);

// sort
exports.sort = (numbers) => numbers.sort((a, b) => a - b);

// 중앙값
exports.median = (numbers) => {
  const { length } = numbers;
  const middle = Math.floor(length / 2);
  return length % 2 ? numbers[middle] : (numbers[middle - 1] + numbers[middle]) / 2;
};

// 최빈값
