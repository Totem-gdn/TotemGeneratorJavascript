import { AvatarDto } from "../../models/serverDto/Avatar";

export class AvatarDataContext {

    private static instance: AvatarDataContext;
    private hooks: Function[] = [];
    private avatars: AvatarDto[]

    private constructor() {

    }

    public static getInstance(): AvatarDataContext {
        if (!AvatarDataContext.instance) {
            AvatarDataContext.instance = new AvatarDataContext();
        }

        return AvatarDataContext.instance;
    }

    private fetchData = async () => {
        try {
            const avatars = [];
            // fire hooks
            this.hooks.forEach(x => x(avatars))
            return avatars;

        } catch (error) {
            console.error(error)
        }
    }

    public getAllAvatar = async (noCashe?: boolean, expoRetry?: boolean,) => {

        if ((noCashe == null || noCashe == false) && this.avatars.length > 0) {
            return this.avatars;
        }

        const data = await this.fetchData();
        this.avatars = data;

        return data;
    }

    public getAvatar = async (id?: string, noCashe?: boolean, expoRetry?: boolean,) => {

        if ((noCashe == null || noCashe == false) && this.avatars.length > 0) {
            return this.avatars.find(x => x.id);
        }

        const data = await this.fetchData();
        this.avatars = data;

        return data.find(x => x.id);
    }

    subscribeForUpdates = (func: (data: AvatarDto[]) => void) => {
        this.hooks.push(func);
    }

    public RemoveAllHooks = () => {
        this.hooks = [];
    }
}