

function playerName(kind: string | number)
{
    if(typeof kind === 'string')
    {
        return `Creating ${kind} type of player...`
    }
    return `Creating ${kind} userID of player...`
}