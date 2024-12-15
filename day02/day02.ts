function isValidReport(report: number[]): boolean {
  if (report.length < 2) return true;

  const hasIncreasingLevels = report[0] < report[1];

  for (let i = 0; i < report.length - 1; ++i) {
    const currentLevel = report[i];
    const nextLevel = report[i + 1];

    const distance = Math.abs(currentLevel - nextLevel);
    if (distance <= 0 || distance > 3) return false;

    const hasValidChange = hasIncreasingLevels
      ? currentLevel < nextLevel
      : currentLevel > nextLevel;

    if (!hasValidChange) return false;
  }

  return true;
}

export function day02Part1(input: string): number {
  return input.split("\n").reduce((safeReportCount, line) => {
    if (line === "") return safeReportCount;

    const report = line.split(" ").map(Number);

    return isValidReport(report) ? safeReportCount + 1 : safeReportCount;
  }, 0);
}

const input = Deno.readTextFileSync("day02/day02.txt");
console.log(day02Part1(input));
