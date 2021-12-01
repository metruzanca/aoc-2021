import axios from 'axios';

/** No prefixed 0s so day 1 is 1 not 01 */
const getUrl = (day: number) => `https://adventofcode.com/2021/day/${day}/input`;

export async function getInputs(day: number) {
    return await axios.get(getUrl(day))
}