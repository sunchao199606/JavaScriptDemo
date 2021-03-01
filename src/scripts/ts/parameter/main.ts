import Func from "./Func"

class FuncImpl implements Func {
    send(topic: string, message: string, exchangeId?: string): void {
        if (exchangeId) {
            console.log(exchangeId)
        } else {
            console.log(`${topic} : ${message}`)
        }
    }
}

let instance = new FuncImpl()
instance.send("topic", "message", "1")
instance.send("topic", "message")
