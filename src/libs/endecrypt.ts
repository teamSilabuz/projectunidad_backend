import bcrypt from "bcryptjs";

export class endecrypt {
    key: string;

    constructor(key: string) {
        this.key = key
    }

    private async validate_key(key_encrypt: string) {
        return await bcrypt.compare(this.key, key_encrypt);
    }

    private async hash() {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(this.key, salt);
    }

    public async encrypt(context: string) {
        const key_hash = await this.hash();

        return btoa(context) + "A|A" + key_hash;
    }

    public async decrypt(context_encrypt: string) {
        const context = context_encrypt.split("A|A")

        const status = await this.validate_key(context[1]);

        return status ? atob(context[0]) : "";
    }
}