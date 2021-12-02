function day2Part1(input) {
    const commands = input.split('\n').map(cmd => cmd.split(' '))
    const coords = { position: 0, depth: 0 }

    for (let [cmd, amount] of commands) {
        switch(cmd) {
            case 'up':
                coords.depth -= +amount;
                break;
            case 'down':
                coords.depth += +amount;
                break;
            case 'forward':
                coords.position += +amount;
                break;
            default:
                console.log("WTF", cmd, amount)
        }
    }
    
    return coords.position * coords.depth
}

if(window) day2Part1(document.querySelector('pre').innerText.trim())

function day2Part2(input) {
    const commands = input.split('\n').map(cmd => cmd.split(' '))
    const coords = { position: 0, depth: 0, aim: 0 }
    
    for (let [cmd, amount] of commands) {
        switch(cmd) {
            case 'up':
                coords.aim -= +amount;
                break;
            case 'down':
                coords.aim += +amount;
                break;
            case 'forward':
                coords.position += +amount;
                coords.depth += +amount * coords.aim
                break;
            default:
                console.log("WTF", cmd, amount)
        }
    }
    
    return coords.position * coords.depth
}

if(window) day2Part2(document.querySelector('pre').innerText.trim())