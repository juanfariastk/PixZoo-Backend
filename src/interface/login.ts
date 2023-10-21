export type Login = {
    "email":string;
    "password":string;
}

export type LoginSession = {
    "userId"?:number;
    "userEmail":string;
    "openedAt":string;
    "userType":string;
}