export class Pokemon {
    constructor(
        public abilities: Ability[] = [],
        public base_experience: number = 0,
        public cries: Cries = new Cries(),
        public forms: Species[] = [],
        public game_indices: GameIndex[] = [],
        public height: number = 0,
        public held_items: HeldItem[] = [],
        public id: number = 0,
        public is_default: boolean = false,
        public location_area_encounters: string = '',
        public moves: Move[] = [],
        public name: string = '',
        public order: number = 0,
        public past_abilities: any[] = [],
        public past_types: any[] = [],
        public species: Species = new Species(),
        public sprites: Sprites = new Sprites(),
        public stats: Stat[] = [],
        public types: Type[] = [],
        public weight: number = 0,
    ) { }
}

export interface Ability {
    ability: Species;
    is_hidden: boolean;
    slot: number;
}

export class Species {
    constructor(
        public name: string = '',
        public url: string = ''
    ) { }
}

export class Cries {
    constructor(
        latest: string = '',
        legacy: string = '',
    ) { }
}

export interface GameIndex {
    game_index: number;
    version: Species;
}

export interface HeldItem {
    item: Species;
    version_details: VersionDetail[];
}

export interface VersionDetail {
    rarity: number;
    version: Species;
}

export interface Move {
    move: Species;
    version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: Species;
    version_group: Species;
}

export interface GenerationV {
    "black-white": Sprites;
}

export interface GenerationIv {
    "diamond-pearl": Sprites;
    "heartgold-soulsilver": Sprites;
    platinum: Sprites;
}

export interface Versions {
    "generation-i": GenerationI;
    "generation-ii": GenerationIi;
    "generation-iii": GenerationIii;
    "generation-iv": GenerationIv;
    "generation-v": GenerationV;
    "generation-vi": { [key: string]: Home };
    "generation-vii": GenerationVii;
    "generation-viii": GenerationViii;
}

export interface Other {
    dream_world: DreamWorld;
    home: Home;
    "official-artwork": OfficialArtwork;
    showdown: Sprites;
}

export class Sprites {
    constructor(
        public back_default: string | null = null,
        public back_female: string | null = null,
        public back_shiny: string | null = null,
        public back_shiny_female: string | null = null,
        public front_default: string | null = null,
        public front_female: string | null = null,
        public front_shiny: string | null = null,
        public front_shiny_female: string | null = null,
        public other?: Other,
        public versions?: Versions,
        public animated?: Sprites,
    ) { }
}

export interface GenerationI {
    "red-blue": RedBlue;
    yellow: RedBlue;
}

export interface RedBlue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
}

export interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Gold;
}

export interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
}

export interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent?: string;
}

export interface GenerationIii {
    emerald: OfficialArtwork;
    "firered-leafgreen": Gold;
    "ruby-sapphire": Gold;
}

export interface OfficialArtwork {
    front_default: string;
    front_shiny: string;
}

export interface Home {
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
}

export interface GenerationVii {
    icons: DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
    front_default: string;
    front_female: null;
}

export interface GenerationViii {
    icons: DreamWorld;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Species;
}

export interface Type {
    slot: number;
    type: Species;
}
