export {};


interface User 
{
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    startTrail: () => string
    getCoupon(couponName: string, value: number): number
}

interface User
{
    githubToken: string
}

interface Admin extends User
{
    role: "Admin" | "Employee" | "Intern"
}

const blade: Admin = 
{
    dbId: 24,
    role: "Admin",
    email: "example@mail.com",
    githubToken: "github",
    userId: 4321,

    startTrail: () =>
    {
        return "trail started"
    },

    getCoupon(cp: "Skull", val: 8)
    {
        return 69
    }
}