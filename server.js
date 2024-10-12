import express from "express";
//import { Router_user } from "./user/route-user.js";

const app = express();
app.use(express.json());
//app.use(Router_user);

app.listen(3000, () => {
    console.log("servidor rodado...")
});