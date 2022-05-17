import { Avatar } from "../models/avatars";


export class AvatarLocalContext {
    private static instance: AvatarLocalContext;

    private avatars: Avatar[] = [];
    private hooks: Function[] = [];

    private constructor() { }

    public static getInstance(): AvatarLocalContext {
        if (!AvatarLocalContext.instance) {
            AvatarLocalContext.instance = new AvatarLocalContext();
            this.instance.fetchData();
        }

        return AvatarLocalContext.instance;
    }

    public getList = async (noCashe?: boolean) => {
         // For types not to complain
        // TODO implement later
        console.log(noCashe)

        return this.avatars.sort(function (a, b) {
            if (a.id < b.id) { return -1; }
            if (a.id > b.id) { return 1; }
            return 0;
        });
    }

    public subscribeForUpdates = (func: (a: Avatar[]) => void) => {
        // TODO generate Id for deleting the hook
        this.hooks.push(func);
    }

    private fetchData = async () => {

        const localIds = ["1", "2", "3"];
        const avatarList = localIds.map(x => {
            return { id: x } as Avatar;
        });

        this.avatars = avatarList;
    }
}