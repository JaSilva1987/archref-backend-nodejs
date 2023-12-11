"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const get_token_decorator_1 = require("../../decorators/get.token.decorator");
const auth_token_guard_1 = require("../../guards/auth-token.guard");
const demo_service_1 = require("./demo.service");
let DemoController = class DemoController {
    constructor(demoService) {
        this.demoService = demoService;
    }
    getDemo(authToken) {
        return this.demoService.getDemo(authToken);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get Demo' }),
    (0, swagger_1.ApiResponse)({ status: 200, isArray: true }),
    __param(0, (0, get_token_decorator_1.GetToken)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DemoController.prototype, "getDemo", null);
DemoController = __decorate([
    (0, swagger_1.ApiTags)('demo'),
    (0, swagger_1.ApiBearerAuth)('authorization'),
    (0, common_1.UseGuards)(auth_token_guard_1.AuthTokenGuard),
    (0, common_1.Controller)('demo'),
    __metadata("design:paramtypes", [demo_service_1.DemoService])
], DemoController);
exports.DemoController = DemoController;
//# sourceMappingURL=demo.controller.js.map