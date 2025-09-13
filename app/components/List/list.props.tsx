export interface ListProps {
    title: string;
    alias?: string;
    category: string;
    _id: number
    pages?: [ListProps]
}