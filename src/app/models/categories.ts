import { OccupationsByCategory } from './occ-category';
export class Categories {
    private id: string;
    private name: string;
    private description: string;
    private categoryImage: string;
    private status: boolean;    
    public occupations: OccupationsByCategory[];
    public occSelected: number = 0;

    constructor( id: string,
                 name: string,
                 description: string,
                 categoryImage: string,
                 status: boolean ) {
        
                    this.id = id;
                    this.name = name;
                    this.description = description;
                    this.categoryImage = categoryImage;
                    this.status = status;
    }
}