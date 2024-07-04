const add = (numbers: string): number => {
  if (numbers === "") return 0;

  let delimiter = /[,\n]/;

  if (numbers.startsWith("//")) {
    const [delimiterPart, numbersPart] = numbers.split("\n");

    delimiter = new RegExp(delimiterPart.slice(2));

    numbers = numbersPart;
  }

  const nums = numbers.split(delimiter).map(Number);

  return nums.reduce((sum, num) => sum + num, 0);
};
export default add;
