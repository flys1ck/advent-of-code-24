const exampleInput = Deno.readTextFileSync("day01_example.txt");
const input = Deno.readTextFileSync("day01.txt");

function day01Part1(input: string): number {
  const [left, right] = input.split("\n").reduce<[number[], number[]]>(
    ([leftList, rightList], line) => {
      if (line.trim() === "") return [leftList, rightList];

      const [leftItem, rightItem] = line.split(/\s+/);
      leftList.push(parseInt(leftItem));
      rightList.push(parseInt(rightItem));

      return [leftList, rightList];
    },
    [[], []],
  );

  const leftSorted = left.toSorted();
  const rightSorted = right.toSorted();

  return leftSorted.reduce((distance, item, i) => {
    return distance + Math.abs(item - rightSorted[i]);
  }, 0);
}

console.log(day01Part1(exampleInput));
console.log(day01Part1(input));
