interface RelationshipProperties {
    relationshipType: string;
    friendshipLevel: number;
    romanceLevel: number;
}

export class RelationshipsComponent {
    familialRelationships: RelationshipProperties[];
    romanticRelationships: RelationshipProperties[];
    militaryChainOfCommand: RelationshipProperties[];

    constructor() {
        this.familialRelationships = [];
        this.romanticRelationships = [];
        this.militaryChainOfCommand = [];
    }
}