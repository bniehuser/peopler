// person.ts

import {Entity, EntityComponents} from "./Entity";

type PersonComponents = Pick<EntityComponents, "identity"|"characteristics"|"mood"|"behavior"|"relationships"|"inventory"|"combatStatistics">

export class Person extends Entity {
    components: PersonComponents;
}
