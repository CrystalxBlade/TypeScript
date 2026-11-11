
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


new Date()

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


