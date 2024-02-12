"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const user_js_1 = __importDefault(require("./routes/user.js"));
const data_source_js_1 = __importDefault(require("./data-source.js"));
data_source_js_1.default.initialize()
    .then(() => {
    console.log("The DB connection has been sucessfully established");
})
    .catch((error) => console.log(error));
app.use(express_1.default.json());
app.use('/api/user', user_js_1.default);
app.listen(3000, (req, res) => {
    console.log("server up and running on port 3000");
});
//# sourceMappingURL=app.js.map