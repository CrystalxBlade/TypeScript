

type coffee = 
{
    type : string
    sugar : number
}

function isCoffee(obj: any):obj is coffee
{
    return (
        typeof obj === "object" &&
        obj !== null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serverOrder(item:coffee | string)
{
    if(isCoffee(item))
    {
        return `Serving ${item.type} coffee with ${item.sugar}`
    } 
    return `Serving custom ${item}`
}

let order = isCoffee({type: "latte", sugar : 8})
console.log(order)