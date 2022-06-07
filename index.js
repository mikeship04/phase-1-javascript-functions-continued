// code your solution here
function saturdayFun(activity ='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (act = 'go to the office') {
    return `This Monday, I will ${act}.`;
}

let wrapAdjective = function (msg = "*") {
    return function(something = 'special') {
        return `You are ${msg}${something}${msg}!`;
    };
}