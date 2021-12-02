import solutions from './solutions.json'

function obfuscate(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}
  
function deObfuscate(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

export function check(day, part, solution) {
    return deObfuscate(solutions[day][part]) === solution.toString();
}