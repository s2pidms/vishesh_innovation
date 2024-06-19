import {Injectable} from "@angular/core";
import { SESSION_SECRET } from "@mocks/constant";
import * as CryptoJS from "crypto-js";

@Injectable({
    providedIn: "root"
})
export class CryptoService {
    private secretKey = SESSION_SECRET

    encrypt(text: string): string {
        return CryptoJS.AES.encrypt(text, this.secretKey).toString();
    }

    decrypt(cipherText: string): string {
        const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}
