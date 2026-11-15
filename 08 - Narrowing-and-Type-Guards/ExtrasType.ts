
/*

function detectType(val: number | string)
{
    return val.toLowerCase()             // ❌ it's not sure wether it's a string or a number 
}

*/


function detectType(val: number | string)
{
    if(typeof val === "string")
    {
      return  val.toLowerCase()
    }

    return val + 4
}

const result = detectType("BLADE")
console.log(result)

function provide(id: string | null)
{
    if(!id)
    {
        console.log("Please provide ID")
        return
    }
    return id.toLowerCase()
}


interface User 
{
    name: string,
    email: string
}

interface Admin
{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin)
{
    if("isAdmin" in account)
    {
        return account.isAdmin
    }    
}



function logValue(x: Date | string)
{
    if(x instanceof Date)
    {
        console.log(x.toUTCString());
    }
    else
    {
        console.log(x.toUpperCase());
    }
}


type Fish = {swim: () => void}
type Bird = {fly: () => void}


function isFish(pet: Fish | Bird): pet is Fish
{
    return (pet as Fish).swim !== undefined    
}

function getFood(pet: Fish | Bird)
{
    if(isFish(pet))
    {
        pet
        return "fish food"       
    }
    else
    {
        pet
        return "bird food"
    }
}


// Discriminated Union


interface Circle 
{
    kind: "circle"
    radius: number
}

interface Square
{
    kind: "square"
    side: number
}


interface Rectangle
{
    kind: "rectangel"
    length: number
    width: number
}

type Shape = Circle | Square

function getTrueShape(shape: Shape)
{
    if(shape.kind === 'circle')
    {
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}

function getArea(shape: Shape)
{
   switch(shape.kind)
   {
    case "circle":
        return Math.PI * shape.radius ** 2

    case "square":
        return shape.side * shape.side
   } 
}