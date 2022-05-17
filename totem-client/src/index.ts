import { AvatarLocalContext } from "./base/avatar-local-context";

export const GetAvatarClient = (local: boolean) => {

  if (local) {
    return AvatarLocalContext.getInstance();
  }

  console.log('Not implemented');
  return null;
}

export const GetWeaponClient = (local: boolean) => {
  if (local) {
    return AvatarLocalContext.getInstance();
  }

  console.log('Not implemented');
  return null;
}

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};
