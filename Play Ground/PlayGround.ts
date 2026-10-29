export {};

interface User
{
    userId: number
    name: string
    isAtctive: boolean
    trail: () => string
    demo(val: number, product: string): number
}

interface Admin extends User, iceCream
{
    github: string
}

interface iceCream
{
    flavour: "vanilla" | "chocolate" | "strawberry" | "butterscotch"
}

const customer: Admin = 
{
    userId: 6789,
    name: "Blade",
    github: "Github",
    flavour: "butterscotch",
    isAtctive: true,
    trail: () => {return "train started"},
    demo(v: 69, p: "PS5"){return 96}
}