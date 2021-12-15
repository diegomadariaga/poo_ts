export default class Pokemon {
    private id :number;
    private name: string;
    private type: string;
    private level:number;

    constructor(id: number, name: string, type: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.level = 0;
    }
    get getId(): number {
        return this.id;
    }
    get getName(): string {
        return this.name;
    }
    get getType(): string {
        return this.type;
    }
    get getLevel(): number {
        return this.level;
    }
    set setName(name: string) {
        this.name = name;
    }
    set setType(type: string) {
        this.type = type;
    }
    set setLevel(level: number) {
        this.level = level;
    }
    attack(): void {
        console.log(this.name + " attack!");
    }
    levelUp(): void {
        this.level++;
    }
}