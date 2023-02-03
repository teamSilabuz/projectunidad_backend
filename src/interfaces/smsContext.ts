export interface ICredencialExt {
    name: string;
    username_ext: string;
    password_ext: string;
}

export interface ISmsData {
    user: {
        name: string | null;
        phone_number: string | null;
    };
    credencialExt: ICredencialExt;
}

export interface IEmailData {
    user: {
        name: string | null;
        email: string;
    };
    credencialExt: ICredencialExt
}