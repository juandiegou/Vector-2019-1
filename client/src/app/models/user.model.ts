export interface UserModel {
    id: string;
    realm: string;
    username: string;
    email: string;
    password: string;
    rol: number;
    fname: string;
    sname: string;
    flname: string;
    sclname: string;
    country: string;
    phone: string;
    education: string;
    especialization: string;
    articles: Object;
    user: UserModel;
}