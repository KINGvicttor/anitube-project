export type Manga = {
    id: number
    attributes: {
        synopsis: string;
        titles: {
            en_jp: string;
        }
        posterImage: {
            original: string;
        }
        coverImage: {
            original: string;
        }
    }
}