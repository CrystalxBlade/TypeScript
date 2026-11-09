
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

