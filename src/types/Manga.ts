export type Manga = {
    id: number
    attributes: {
        synopsis: string;
        title: {
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