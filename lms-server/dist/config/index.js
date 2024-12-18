"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_USERNAME = (_a = process.env.MONGO_USERNAME) !== null && _a !== void 0 ? _a : '';
const MONGO_PASSWORD = (_b = process.env.MONGO_PASSWORD) !== null && _b !== void 0 ? _b : '';
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/library`;
const PORT = process.env.PORT ? Number(process.env.PORT) : 3091;
exports.config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: PORT
    }
};
