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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var quote_component_1 = require('./quote/quote.component');
//routes
var issuingRoutes = [
    { path: 'quote', component: quote_component_1.QuoteComponent }
];
var IssuingRoutingModule = (function () {
    function IssuingRoutingModule() {
    }
    IssuingRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(issuingRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], IssuingRoutingModule);
    return IssuingRoutingModule;
}());
exports.IssuingRoutingModule = IssuingRoutingModule;
//# sourceMappingURL=issuing-routing.module.js.map