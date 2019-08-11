export class Insect {
    constructor(){
        this.id =""
        this.popularName = ""
        this.scientificName = ""
        this.description = ""
        this.image = ""
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
