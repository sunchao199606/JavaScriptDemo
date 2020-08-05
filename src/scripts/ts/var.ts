interface Boy {
    name: string;

    // 索引
    [index: string]: string;
}

let boys: Boy[] = [{name: "Jordan"}, {name: "Barkley"}];

let doSomething: Function = function (b: Boy) {
    console.log(b.name)
}
console.log(boys[0]["name"])

interface Closeable {
    (): void
}

let funArray: Closeable[] = [() => console.log("close1"), () => console.log("close2")]
console.log(funArray[0])