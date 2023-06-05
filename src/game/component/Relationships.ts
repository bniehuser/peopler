import { Component } from "./Component";

type RelationshipProperties = {
    relationshipType: string;
    friendshipLevel: number;
    romanceLevel: number;
}
type RelationshipsData = {
    familialRelationships: RelationshipProperties[];
    romanticRelationships: RelationshipProperties[];
    militaryChainOfCommand: RelationshipProperties[];
}
export class RelationshipsComponent extends Component<RelationshipsData> {}
