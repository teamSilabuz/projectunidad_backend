export interface ISmsData {
    user: {
        name: string | null;
        phone_number: string | null;
    };
    credencialExt: {
        name: string;
        username_ext: string;
        password_ext: string;
    }
}