/**
 * Represents an Item Fulfillment (itemfulfillment) transaction type in NetSuite
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Record", "N/record", "./Transaction", "./Sublist"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Record_1 = require("./Record");
    var record = require("N/record");
    var Transaction_1 = require("./Transaction");
    var Sublist_1 = require("./Sublist");
    /**
     * Item Fulfillment Items (item) sublist
     */
    var ItemSublist = /** @class */ (function (_super) {
        __extends(ItemSublist, _super);
        function ItemSublist() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "class", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "countryofmanufacture", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "item", void 0);
        __decorate([
            Sublist_1.SublistFieldType.checkbox
        ], ItemSublist.prototype, "itemreceive", void 0);
        __decorate([
            Sublist_1.SublistFieldType.select
        ], ItemSublist.prototype, "location", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "onhand", void 0);
        __decorate([
            Sublist_1.SublistFieldType.decimalnumber
        ], ItemSublist.prototype, "quantity", void 0);
        __decorate([
            Sublist_1.SublistFieldType.float
        ], ItemSublist.prototype, "quantityremaining", void 0);
        __decorate([
            Sublist_1.SublistFieldType.freeformtext
        ], ItemSublist.prototype, "units", void 0);
        return ItemSublist;
    }(Sublist_1.SublistLine));
    exports.ItemSublist = ItemSublist;
    /**
     * Item Fulfillment Base Type
     */
    var ItemFulfillmentBase = /** @class */ (function (_super) {
        __extends(ItemFulfillmentBase, _super);
        function ItemFulfillmentBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ItemFulfillmentBase.recordType = record.Type.ITEM_FULFILLMENT;
        __decorate([
            Record_1.FieldType.select
        ], ItemFulfillmentBase.prototype, "createdfrom", void 0);
        __decorate([
            Record_1.FieldType.sublist(ItemSublist)
        ], ItemFulfillmentBase.prototype, "item", void 0);
        return ItemFulfillmentBase;
    }(Transaction_1.TransactionBase));
    exports.ItemFulfillmentBase = ItemFulfillmentBase;
});
