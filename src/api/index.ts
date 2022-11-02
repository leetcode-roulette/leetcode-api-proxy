import LeetcodeRouletteAPI, { Tag, Problem } from "leetcode-roulette-api";

export { type Tag, type Problem };
export const api: LeetcodeRouletteAPI = new LeetcodeRouletteAPI("http://localhost:3001");
