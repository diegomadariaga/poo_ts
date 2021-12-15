import Animal from "./Animal";

export default class Perro extends Animal {
    private name: string;
    private raza: string;
    constructor(name: string, raza: string, width: number, height: number, length: number) {
        super(width, height, length);
        this.name = name;
        this.raza = raza;
    }
    get getName(): string {
        return this.name;
    }
    get getRaza(): string {
        return this.raza;
    }
    set setName(name: string) {
        this.name = name;
    }
    set setRaza(raza: string) {
        this.raza = raza;
    }
    attack(): void {
        console.log(this.name + " attack!");
    }    
    getInfo(): string {
        return this.name + " " + this.raza;
    }
    getWidth(): number {
        return this.width;
    }
    getHeight(): number {
        return this.height;
    }
    getLength(): number {
        return this.length;
    }
    makeSound(): void {
        console.log("Guau!");
    }
}