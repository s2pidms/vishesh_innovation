export interface MenuItem {
    _id: string;
    system: string;
    title: string;
    path: string;
    activeClass: string;
    isMenuActive: boolean;
    menuOrder: number;
    image: string;
    color: string;
    isActive: string;
    roles: string[];
    createdAt: string;
    updatedAt: string;
    __v?: number;
    imageUrl?: string;
    id?: string;
}
