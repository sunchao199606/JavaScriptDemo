import EventHub from "./EventHub";

export default class App {
    constructor() {
        EventHub.syncExec()
    }
}

