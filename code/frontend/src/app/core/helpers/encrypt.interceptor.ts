import {Injectable} from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {CryptoService} from "@core/services";

@Injectable()
export class EncryptInterceptor implements HttpInterceptor {
    constructor(private cryptoService: CryptoService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Encrypt query params
        let params = req.params;
        params.keys().forEach(key => {
            const value = params.get(key);
            if (value) {
                params = params.set(key, this.cryptoService.encrypt(value));
            }
        });

        // Encrypt URL path params if necessary
        let url = req.url;
        // Example: Encrypt an ID in the path
        const idRegex = /\/resource\/([^\/]+)/;
        const match = url.match(idRegex);
        if (match) {
            const encryptedId = this.cryptoService.encrypt(match[1]);
            url = url.replace(idRegex, `/resource/${encryptedId}`);
        }

        const clonedRequest = req.clone({params, url});
        return next.handle(clonedRequest);
    }
}
