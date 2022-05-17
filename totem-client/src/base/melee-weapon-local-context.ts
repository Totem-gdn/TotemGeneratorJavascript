import { MeleeWeapon } from "../models/melee-weapon";

export class MeleeWeaponLocalContext {
    private static instance: MeleeWeaponLocalContext;

    private avatars: MeleeWeapon[] = [];
    private hooks: Function[] = [];

    private constructor() { }

    public static getInstance(): MeleeWeaponLocalContext {
        if (!MeleeWeaponLocalContext.instance) {
            MeleeWeaponLocalContext.instance = new MeleeWeaponLocalContext();
            this.instance.fetchData();
        }

        return MeleeWeaponLocalContext.instance;
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

    public subscribeForUpdates = (func: (a: MeleeWeapon[]) => void) => {
        // TODO generate Id for deleting the hook
        this.hooks.push(func);
    }

    private fetchData = async () => {

        const localIds = ["1", "2", "3"];
        const avatarList = localIds.map(x => {
            return { id: x } as MeleeWeapon;
        });

        this.avatars = avatarList;
    }
}