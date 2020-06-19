const models = require('../db/db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../db/sqlMap');

const conn = mysql.createConnection(models.mysql);
conn.connect();

// 查询文章
router.get('/sel',(req,res)=>{
	const title = req.query.title
	const sel_sql = $sql.test.select + " where title = '" + title + "'"
	console.log(sel_sql)
	conn.query(sel_sql, (err, rst)=>{
		if (err) {
			console.log(err)
		} else{
			res.send(rst[0].md)
		}
	})
});

// 添加数据接口
router.post('/add', (req, res) => {
	const params = req.body;
	const add_sql = $sql.test.add;
	
	console.log(params);
	
	conn.query(add_sql, [params.title, params.type, params.mdhtml, params.mdtext], (error, results) => {
		if(error) {
			console.log(err);
			res.send("1"); // 1 表示数据添加失败
		}
		else {
			res.send("0"); // 0 表示数据添加成功
		}
	});
});

module.exports = router;