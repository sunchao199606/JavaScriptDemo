export default interface Func {
    send(topic: string, message: string, exchangeId?: string): void
}
