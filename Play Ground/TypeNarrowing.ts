

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

let secondOrder = serverOrder({type: "mocha", sugar: 6})
console.log(secondOrder)


// -------------------------------------------------------------------------

type latte = {type: "latte"; level: number};
type mocha = {type: "mocha"; amount: number};
type boba = {type: "boba"; stage: number};

type Coffee = latte | mocha | boba

function makeCoffee(order:Coffee)
{
    switch(order.type)
    {
        case "latte":
            return `${order.type} with level ${order.level}`
            break;
        case "mocha":
            return `${order.type} with amount ${order.amount}`
            break;
        case "boba":
            return `${order.type} with stage ${order.stage}`
            break;
    }
}

console.log(makeCoffee({type: "latte", level: 2}))
console.log(makeCoffee({type: "mocha", amount: 4}))
console.log(makeCoffee({type: "boba", stage: 6}))