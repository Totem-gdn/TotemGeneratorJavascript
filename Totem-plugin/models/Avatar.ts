import { BodyFatEnum } from "./enums/BodyFatEnum";
import { BodyMusclesEnum } from "./enums/BodyMusclesEnum";
import { HairStyleEnum } from "./enums/HairStyleEnum";
import { SexEnum } from "./enums/sexEnum";

export interface Avatar {
    sex: SexEnum;
    skinColor: string;
    hairColor: string;
    hairStyle: HairStyleEnum;
    eyeColor: string;
    bodyFat: BodyFatEnum;
    bodyMuscles: BodyMusclesEnum;
}


