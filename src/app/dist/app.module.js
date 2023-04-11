"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var ngx_infinite_scroll_1 = require("ngx-infinite-scroll");
var login_screen_component_1 = require("./login-screen/login-screen.component");
var cats_view_component_1 = require("./cats-view/cats-view.component");
var input_1 = require("@angular/material/input");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_screen_component_1.LoginScreenComponent,
                cats_view_component_1.CatsViewComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                ngx_infinite_scroll_1.InfiniteScrollModule,
                input_1.MatInputModule,
                slide_toggle_1.MatSlideToggleModule,
                button_1.MatButtonModule,
                card_1.MatCardModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
