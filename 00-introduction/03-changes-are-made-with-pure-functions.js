/**
 * Pure functions are functions with always predictable outcome
 * A pure function doesn’t depend on and doesn’t modify the states of variables out of its scope.
 * don't change value they are passed in, they always return new values
 */
function addTwo(n) {
    return n + 2
}

/**
 * impure functions - you can' predict outcome
 * (get argument, modified it and return modified object):
 */
function addTwoImpute(n) {
    someDbCall(n)
    return n + 2
}

state = [
    {
        id: 1,
        project: 'Project Mars',
        goal: 322,
        funded: false
    },
    {
        id: 2,
        project: 'Project 2',
        goal: 544,
        funded: false
    }
],

{
    type: 'ADD_PROJECT',
    project: 'Build Death Star',
    goal: 966
},

{
    type: 'DELETE_PROJECT'
};


function setstate(action) {
    switch (action.type) {
        case 'ADD_PROJECT':
            const nextState = [
                {
                    id: 3,
                    project: action.project,
                    goal: action.goal,
                    funded: false
                }]
            return nextState;
            break;
        case 'DELETE_PROJECT':
            return nextState;
            break;
        default:
            return action;
    }
}