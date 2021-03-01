import {IChannel} from "./IChannel";
import {Channel} from "./Channel";

export default class EventHub {

    private static readonly channel: IChannel = Channel.current()

    static syncExec(): void {
        this.channel.send()
    }
}
