
/*
function userName():{name: string, health: number, isAlive: boolean}
{
    return {name: "Blade", health: 89, isAlive: true}
}

const Player = userName()
console.log(Player)
*/


/*
type playerData = 
{
    name: string,
    health: number,
    isAlive: boolean
}

function userName(): playerData
{
    return {name: "Blade", health: 99, isAlive: true}
}

const player = userName()
console.log(player)
*/


type User = 
{
    name: string;
    email: string;
    isActive: boolean 
}

function createUser(user: User):User
{
    return user
}

const val = createUser({name: "Crystal", email: "crystal@mail.com", isActive: true})

console.log(val)