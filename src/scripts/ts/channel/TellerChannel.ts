import {IChannel} from "./IChannel";

export class TellerChannel implements IChannel {
    constructor() {
        console.log("new TellerChannel")
    }

    send(): void {
        console.log("send message")
    }
}
