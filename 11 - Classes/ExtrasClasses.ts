export {};

/*

class User
{
    public email: string
    name: string
    readonly map: string = "Grand Bellway"
    private readonly city: string = "City of Tears"

    constructor(email: string, user: string)
    {
        
        this.email = email
        this.name = user
    }
}

const blade = new User("blade@mail.com", "blade")
console.log(blade)

blade.map

*/


class User
{
    readonly city: string = "City of Tears"
    constructor(public email: string, public name: string){}
}

const blade = new User("blade@mail.com", "blade")
console.log(blade)