import {IChannel} from "./IChannel";
import {TellerChannel} from "./TellerChannel";

export class Channel {
    private static instance: IChannel = null

    static current(): IChannel {
        return this.instance = this.instance || new TellerChannel()
    }
}
