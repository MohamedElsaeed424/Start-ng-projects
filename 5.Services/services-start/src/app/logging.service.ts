export class  LoggingService {
    logToConsole(accountStatus : string){
        console.log('A server status changed, new status: ' + accountStatus);
    }
}