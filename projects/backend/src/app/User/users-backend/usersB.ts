export class UsersB {
    id: number;
    email: string;
    roles: [
        string
    ];
    firstName: string;
    lastName: string;
    createdAt: any;
    avatar: string;
    birthday: any;
    history: [
        string
    ];
    interest:[
        { name : string; }
    ];
    likeProduct: [
        { name : string; }
    ];
    premium: [
        { name : string; }
    ];
    commentary: [
        { content : string; }
    ];
    token: string;

}