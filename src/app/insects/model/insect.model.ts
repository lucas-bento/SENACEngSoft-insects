export class Insect {
    constructor(){
        this.habitats = [];
        this.locomotion = {
            walking:false,
            flying:false,
            swimming:false,
        }
    }
    
    id: string;
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
