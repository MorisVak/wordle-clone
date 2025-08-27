"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const supabase_js_1 = require("@supabase/supabase-js");
const app = (0, express_1.default)();
const supabaseUrl = 'https://fnlopwqyupjdllabzdpw.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
if (supabaseKey) {
    const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
}
else {
    console.log('Couldnt connect to supabase');
}
app.use(express_1.default.static('dist'));
app.use(express_1.default.json());
