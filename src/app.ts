import Stubr from 'stubr';
import { UsersController } from './controllers/users-controller';
import { CorsMiddleware } from './middleware/cors-middleware';
import { User } from './models/user';
import { users } from "./assets/users.map";

/**
 * Class that manage the state and storage of the data.
 */
export class ApiStorage {
    private static instance: ApiStorage;
    users: User[];

    constructor() {
        this.users = [];
    }

    public static getInstance(): ApiStorage {
        if (!ApiStorage.instance) {
            ApiStorage.instance = new ApiStorage();
        }
        return ApiStorage.instance;
    }
}

/**
 * Main application class
 */
class ApiMock {
    stubr: Stubr;
    storage: ApiStorage;

    constructor() {
        this.stubr = new Stubr();
        this.storage = ApiStorage.getInstance();
    }

    /**
     * Create all controllers instances and register all endpoints
     * of the API
     */
    launch(): void {
        let usersController = new UsersController(this.stubr);
        usersController.registerControllerEndpoints();
        this.stubr.run();
    }

    /**
     * Create all the data needed on the set up of the API
     */
    initData(): void {
        this.storage.users = users;
    }
}

//Create app instance and launch to run Stubr
let app = new ApiMock();
app.initData();
app.launch();

//Create CORS middleware and start to listen
let corsMiddleware = new CorsMiddleware();
corsMiddleware.createAndListen();


