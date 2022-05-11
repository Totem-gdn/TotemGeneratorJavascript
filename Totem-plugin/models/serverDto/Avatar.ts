import { BodyFatEnum } from "../enums/BodyFatEnum";
import { BodyMusclesEnum } from "../enums/BodyMusclesEnum";
import { HairStyleEnum } from "../enums/HairStyleEnum";
import { SexEnum } from "../enums/sexEnum";

interface OwnerPlayer {
    id: number;
    name: string;
    public_blockchain_address: string;
}

interface AvatarListDto {
    id: number;
    seed: string;
    owner: string;
    skinColor: string;
    hairColor: string;
    _owner_players: OwnerPlayer
}

// -- Selecting specific avatar

interface GoogleOAuth {
    id: number;
    name: string;
    email: string;
}

interface Owner {
    id: number;
    created_at: number;
    name: string;
    email: string;
    public_blockchain_address: string;
    google_oauth?: GoogleOAuth;
}

export interface AvatarDto {
    id: number;
    created_at: number;
    seed: string;
    owner: Owner;
    sex: SexEnum;
    skinColor: string;
    hairColor: string;
    hairStyle: HairStyleEnum;
    eyeColor: string;
    bodyFat: BodyFatEnum;
    bodyMuscles: BodyMusclesEnum;
}
