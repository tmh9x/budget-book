"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const payment_entity_1 = require("./payment.entity");
const payment_service_1 = require("./payment.service");
const payment_controller_1 = require("./payment.controller");
let paymentModule = class paymentModule {
};
exports.paymentModule = paymentModule;
exports.paymentModule = paymentModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([payment_entity_1.Payment])],
        controllers: [payment_controller_1.PaymentController],
        providers: [payment_service_1.PaymentService]
    })
], paymentModule);
//# sourceMappingURL=payment.model.js.map