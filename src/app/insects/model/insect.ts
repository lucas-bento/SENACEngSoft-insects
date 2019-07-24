export class Insect {
    id: number;
    scientificName: string;
    popularName: string;
    image: string;
    description: string;

    habitats: string[];
    locomotion: {
        walking: boolean;
        flying: boolean;
        swimming: boolean;
    };
}
