export interface ProfessionCardProps {
    image?: string;
    title: string;
    tags: [string];
    price: [{
        price: number,
        discount?: number,
        credit?: number
    }];
    rating: {
        rating: number;
        reviews: number;
    };
}