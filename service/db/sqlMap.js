var sqlMap = {
    test: {
        add: 'insert into test (title, type, html, md) values (?,?,?,?)',
        select: 'select * from test'
    }
}

module.exports = sqlMap;