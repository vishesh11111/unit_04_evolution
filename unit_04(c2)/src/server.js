
const router = require("./index");
// const { append } = require("express/lib/response");
const connect = require("./configs/db");

router.listen(4200, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error);
    }
    console.log("runnong 4200...");
});