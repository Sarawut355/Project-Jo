const express = require("express");
const router = express.Router();
const sql_command = require("../utils/sql_command");

const { jsonFormatSuccess, jsonFormatError } = require("../utils/format_json");

// ส่งค่าUser
router.get("/list-user", async(req, res) => {
    try {
        const results = await sql_command.query(`SELECT * FROM customer WHERE 1;`);
        console.log(results);
        res.json(jsonFormatSuccess(results));
    } catch (error) {
        res.json(jsonFormatError(constants.ERROR_CODE_DATABASE, error));
    }
});

// เพิ่มรายการอาหารเช้า
router.post("/Insert-breakfast", async(req, res) => {
    let body = req.body;
    console.log(body);
    const results = await sql_command.query(
        `insert into breakfast(bfname,bfpop,bfprice)
        values('${body.bfname}','${body.bfpop}','${body.bfprice}')`
    );
    console.log(results);
    res.json(jsonFormatSuccess(results));
});

// ส่งค่าอาหารเช้า
router.get("/list-breakfast", async(req, res) => {
    try {
        const results = await sql_command.query(`SELECT * FROM breakfast WHERE 1;`);
        console.log(results);
        res.json(jsonFormatSuccess(results));
    } catch (error) {
        res.json(jsonFormatError(constants.ERROR_CODE_DATABASE, error));
    }
});

// เพิ่มรายการอาหารเที่ยง
router.post("/Insert-lunch", async(req, res) => {
    let body = req.body;
    console.log(body);
    const results = await sql_command.query(
        `insert into lunch(luname,lupop,luprice)
        values('${body.luname}','${body.lupop}','${body.luprice}')`
    );
    console.log(results);
    res.json(jsonFormatSuccess(results));
});

// ส่งค่าอาหารเที่ยง
router.get("/list-lunch", async(req, res) => {
    try {
        const results = await sql_command.query(`SELECT * FROM lunch WHERE 1;`);
        console.log(results);
        res.json(jsonFormatSuccess(results));
    } catch (error) {
        res.json(jsonFormatError(constants.ERROR_CODE_DATABASE, error));
    }
});

// เพิ่มรายการอาหารค่ำ
router.post("/Insert-dinner", async(req, res) => {
    let body = req.body;
    console.log(body);
    const results = await sql_command.query(
        `insert into dinner(dnname,dnpop,dnprice)
        values('${body.dnname}','${body.dnpop}','${body.dnprice}')`
    );
    console.log(results);
    res.json(jsonFormatSuccess(results));
});

// ส่งค่าอาหารค่ำ
router.get("/list-dinner", async(req, res) => {
    try {
        const results = await sql_command.query(`SELECT * FROM dinner WHERE 1;`);
        console.log(results);
        res.json(jsonFormatSuccess(results));
    } catch (error) {
        res.json(jsonFormatError(constants.ERROR_CODE_DATABASE, error));
    }
});

// เพิ่มรายการRegister
router.post("/Insert-register", async(req, res) => {
    let body = req.body;
    console.log(body);
    const results = await sql_command.query(
        `insert into customer(firstname,lastname,password,email,tel,bfmid,lumid,dnmid)
        values('${body.firstname}','${body.lastname}','${body.password}','${body.email}','${body.tel}','${body.bfmid}','${body.lumid}','${body.dnmid}')`
    );
    console.log(results);
    res.json(jsonFormatSuccess(results));
});

// อัพเดทความนิยมbf
router.post("/Update-bf-popular", async(req, res) => {
    let body = req.body;
    console.log(body);
    const results = await sql_command.query(
        `UPDATE breakfast SET bfpop='${body.bfpop}' WHERE bfname='${body.bfname}'`
    );
    console.log(results);
    res.json(jsonFormatSuccess(results));
});

// อัพเดทความนิยมlu
router.post("/Update-lu-popular", async(req, res) => {
    let body = req.body;
    console.log(body);
    const results = await sql_command.query(
        `UPDATE lunch SET lupop='${body.lupop}' WHERE luname='${body.luname}'`
    );
    console.log(results);
    res.json(jsonFormatSuccess(results));
});

// อัพเดทความนิยมdn
router.post("/Update-dn-popular", async(req, res) => {
    let body = req.body;
    console.log(body);
    const results = await sql_command.query(
        `UPDATE dinner SET dnpop='${body.dnpop}' WHERE dnname='${body.dnname}'`
    );
    console.log(results);
    res.json(jsonFormatSuccess(results));
});

module.exports = router;