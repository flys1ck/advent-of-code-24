import { assertEquals } from "jsr:@std/assert";
import { day01Part1 } from "./day01.ts";

Deno.test({
  name: "day01 part01",
  permissions: { read: true },
}, () => {
  const input = Deno.readTextFileSync("day01/day01_example.txt");
  assertEquals(day01Part1(input), 11);
});
