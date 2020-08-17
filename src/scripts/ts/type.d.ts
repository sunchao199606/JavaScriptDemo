interface JDK {
    version: string;

    javax(): void;

    javac(path: string): boolean;
}

declare var JDK: {
    name: string;
    readonly bit: number;
    prototype: JDK;
    new(): JDK;
}