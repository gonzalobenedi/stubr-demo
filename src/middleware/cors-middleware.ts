var cors_proxy = require('cors-anywhere');


export class CorsMiddleware {
    host: string;
    port: number;
    constructor() {
        this.host = process.env.HOST || '0.0.0.0';
        this.port = Number(process.env.PORT) || 8080;
    }

    createAndListen(): void {
        cors_proxy.createServer({
            originWhitelist: [],
            requireHeader: [],
            removeHeaders: ['cookie', 'cookie2']
        }).listen(this.port, this.host, () => {
            console.log('Running CORS Anywhere on ' + this.host + ':' + this.port);
        });
    }
}