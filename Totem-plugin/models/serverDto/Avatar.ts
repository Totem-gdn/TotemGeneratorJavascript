interface OwnerPlayer {
    id: string;
    name: string;
    public_blockchain_address: string;
}

interface AvatarDto {
    id: string;
    seed: string;
    owner: string;
    skinColor: string;
    hairColor: string;
    _owner_players: OwnerPlayer
}