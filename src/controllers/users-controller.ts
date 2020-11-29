import Stubr from 'stubr';
import { Method } from 'stubr';
import * as casual from 'casual';
import { CustomError } from '../models/custom-error';
import { ApiStorage } from '../app';
import { User } from '../models/user';

export class UsersController {
    stubr: Stubr;
    storage: ApiStorage;

    constructor(stubr: Stubr) {
        this.stubr = stubr;
        this.storage = ApiStorage.getInstance();
    }

    registerControllerEndpoints(): void {
        this.registerGetUsersScenarios();
        this.registerGetUserScenarios();
        this.registerPostUserScenarios();
        this.registerPutUserScenarios();
        this.registerDeleteUserScenarios();
    }

    private registerGetUsersScenarios() {
        this.stubr.register({
            name: 'UsersController GET 200',
            route: '/users',
            method: Method.GET,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 200,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return this.storage.users;
            },
        });
        //Scenario for 500 response
        this.stubr.register({
            name: 'UsersController GET 500',
            route: '/users',
            method: Method.GET,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 500,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: casual.description,
                    stackTrace: casual.array_of_words(4).join('/'),
                    statusCode: 500,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
    }

    private registerGetUserScenarios() {
        this.stubr.register({
            name: 'UsersController GET 200',
            route: '/users/{id}',
            method: Method.GET,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 200,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return this.storage.users.filter(
                    (user) => user.id === requestParams['id']
                )[0];
            },
        });
        this.stubr.register({
            name: 'UsersController GET 404',
            route: '/users/{id}',
            method: Method.GET,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 404,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: 'Not found',
                    statusCode: 404,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
        this.stubr.register({
            name: 'UsersController GET 500',
            route: '/users/{userId}',
            method: Method.GET,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 500,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: casual.description,
                    stackTrace: casual.array_of_words(4).join('/'),
                    statusCode: 500,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
    }

    private registerPostUserScenarios() {
        this.stubr.register({
            name: 'Test POST Ok',
            route: '/users',
            method: Method.POST,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 201,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const user = requestBody as User;
                user.id = casual.uuid;
                this.storage.users.push(user);
                return user;
            },
        });
        this.stubr.register({
            name: 'Test POST 400',
            route: '/users',
            method: Method.POST,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 400,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: casual.description,
                    statusCode: 400,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
        this.stubr.register({
            name: 'Test POST 500',
            route: '/users',
            method: Method.POST,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 500,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: casual.description,
                    stackTrace: casual.array_of_words(4).join('/'),
                    statusCode: 500,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
    }

    private registerPutUserScenarios() {
        this.stubr.register({
            name: 'Test PUT Ok',
            route: '/users/{id}',
            method: Method.PUT,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 200,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const userId = requestParams['id'];
                const user = requestBody as User;
                const currentUser = this.storage.users.filter(
                    (u) => u.id == userId
                )[0];

                currentUser.email = user.email;
                currentUser.username = user.username;
                currentUser.name = user.name;
                currentUser.surname = user.surname;
                return currentUser;
            },
        });
        this.stubr.register({
            name: 'Test PUT 400',
            route: '/users/{id}',
            method: Method.PUT,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 400,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: casual.description,
                    statusCode: 400,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
        this.stubr.register({
            name: 'Test PUT 404',
            route: '/users/{id}',
            method: Method.PUT,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 404,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: casual.description,
                    statusCode: 404,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
        this.stubr.register({
            name: 'Test PUT 500',
            route: '/users/{id}',
            method: Method.PUT,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 500,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: casual.description,
                    stackTrace: casual.array_of_words(4).join('/'),
                    statusCode: 500,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
    }

    private registerDeleteUserScenarios() {
        this.stubr.register({
            name: 'Test DELETE Ok',
            route: '/users/{id}',
            method: Method.DELETE,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 200,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const userId = requestParams['id'];
                this.storage.users = this.storage.users.filter(
                    (u) => u.id != userId
                );
                return '';
            },
        });
        this.stubr.register({
            name: 'Test PUT 400',
            route: '/users/{id}',
            method: Method.DELETE,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 400,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: casual.description,
                    statusCode: 400,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
        this.stubr.register({
            name: 'Test PUT 404',
            route: '/users/{id}',
            method: Method.DELETE,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 404,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: casual.description,
                    statusCode: 404,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
        this.stubr.register({
            name: 'Test PUT 500',
            route: '/users/{id}',
            method: Method.DELETE,
            validate: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return true;
            },
            responseCode: 500,
            responseHeaders: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                return {
                    'Access-Control-Allow-Origin': `*`,
                    Accept: '*/*',
                };
            },
            responseBody: (
                requestHeaders: any,
                requestBody: any,
                requestParams: any
            ) => {
                const response: CustomError = {
                    message: casual.description,
                    stackTrace: casual.array_of_words(4).join('/'),
                    statusCode: 500,
                    timestamp: casual.moment,
                };
                return response;
            },
        });
    }
}
