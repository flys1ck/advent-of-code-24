import { assertEquals } from "jsr:@std/assert";
import { day02Part1 } from "./day02.ts";

Deno.test({
  name: "day02 part01",
  permissions: { read: true },
}, () => {
  const input = Deno.readTextFileSync("day02/day02_example.txt");
  assertEquals(day02Part1(input), 2);
});
