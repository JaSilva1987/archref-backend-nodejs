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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const terminus_1 = require("@nestjs/terminus");
const http_exception_dto_1 = require("../api/filters/http-exception.dto");
let HealthController = class HealthController {
    constructor(health, microservice) {
        this.health = health;
        this.microservice = microservice;
    }
    check() {
        return this.health.check([
            () => this.microservice.pingCheck('tcp', {
                transport: microservices_1.Transport.TCP,
                options: { host: 'localhost', port: process.env.PORT },
            }),
        ]);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Validate BFF status' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Endpoint executed with sucess' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid executed Endpoint',
        type: http_exception_dto_1.HttpExceptionDto,
    }),
    (0, terminus_1.HealthCheck)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "check", null);
HealthController = __decorate([
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [terminus_1.HealthCheckService,
        terminus_1.MicroserviceHealthIndicator])
], HealthController);
exports.HealthController = HealthController;
//# sourceMappingURL=health.controller.js.map