export default abstract class Animal {
    abstract makeSound(): void;
    protected width: number;
    protected height: number;
    protected length: number;
    constructor(width: number, height: number, length: number) {
        this.width = width;
        this.height = height;
        this.length = length;
    }
    abstract getInfo(): string;
    abstract getWidth(): number;
    abstract getHeight(): number;
    abstract getLength(): number;
}