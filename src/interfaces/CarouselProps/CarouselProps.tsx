export interface CarouselProps {
    card1?: React.ReactNode;
    card2?: React.ReactNode;
    card3?: React.ReactNode;
    card4?: React.ReactNode;
    card5?: React.ReactNode;
    card6?: React.ReactNode;
    card7?: React.ReactNode;
    card8?: React.ReactNode;
    card9?: React.ReactNode;
    card10?: React.ReactNode;
    card11?: React.ReactNode;
    card12?: React.ReactNode;
    numberPagination?: number;
    gap?: number;
    numberSroll?: number;
    width?: string;
    pagination?: boolean;
    autoplay?: boolean;
    carouselWidth: string;
    containerWidth?: string;
}

export interface CarouselBannerProps {
    banner1: React.ReactNode;
    banner2: React.ReactNode;
    banner3: React.ReactNode;
}

export interface BannerCarouselProps {
    banner: string;
    text: string;
    firstTitle: string;
    SecondTitle: string;
}