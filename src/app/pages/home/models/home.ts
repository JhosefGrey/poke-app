export class Inicio {
    public count: number = 0;
    public next: string | null = null;
    public previous: string | null = null;
    public results: Result[] = [];
}

export interface Result {
    name: string;
    url: string;
}
