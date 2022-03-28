
const connect = require("./configs/db");
const router = require("./index");


router.listen(5500, async()=>{

    try {
        await connect();
    } catch (error) {
        console.log("err :-", error);
    }
    console.log("running 5500>>>>>>>>");
})


