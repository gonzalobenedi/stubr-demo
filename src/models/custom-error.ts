export interface CustomError {
    statusCode: number;
    stackTrace?: string;
    message?: string;
    timestamp: Date;
}
