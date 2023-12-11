"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthTokenGuard = void 0;
const common_1 = require("@nestjs/common");
let AuthTokenGuard = class AuthTokenGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        let token = '';
        if (request.headers.authorization &&
            request.headers.authorization.startsWith('Bearer')) {
            token = request.headers.authorization.split(' ')[1];
            request.token = token;
        }
        if (!token) {
            throw new common_1.UnauthorizedException('Auth token should be provided');
        }
        return true;
    }
};
AuthTokenGuard = __decorate([
    (0, common_1.Injectable)()
], AuthTokenGuard);
exports.AuthTokenGuard = AuthTokenGuard;
//# sourceMappingURL=auth-token.guard.js.map