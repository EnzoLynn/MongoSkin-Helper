var uri = "mongodb://192.168.91.101:27017/test";
var guid = require('../js/guid.js');
var dbControl = {
    dbPools: {}
};
//查询
dbControl.select = function(collectionName, fillter, callback) {
    var db = require('mongoskin').db(uri);
    var sign = guid.raw();
    dbControl.dbPools[sign] = db;
    db.collection(collectionName).find(fillter).toArray(function(err, result) {
        db.close();
        delete dbControl.dbPools[sign];
        if (err) throw err;
        if (callback) {
            callback(err, result)
        };
        return result;
    });

};
//添加
dbControl.insert = function(collectionName, object, callback) {
    var db = require('mongoskin').db(uri);
    var sign = guid.raw();
    dbControl.dbPools[sign] = db;
    db.collection(collectionName).insert(object,function(err, result) {
        db.close();
        delete dbControl.dbPools[sign];
        if (err) throw err;
        if (callback) {
            callback(err, result)
        };
        return result;
    });

};
//修改
dbControl.update = function(collectionName, query, update, callback) {
    var db = require('mongoskin').db(uri);
    var sign = guid.raw();
    dbControl.dbPools[sign] = db;
    var def = {
    	upsert:false,//更新并插入
    	multi:true,//更新全部 
    };
    db.collection(collectionName).update(query, update,def,function(err, result) {
        db.close();
        delete dbControl.dbPools[sign];
        if (err) throw err;
        if (callback) {
            callback(err, result)
        };
        return result;
    });

};
//删除
dbControl.delete = function(collectionName, fillter, callback) {
    var db = require('mongoskin').db(uri);
    var sign = guid.raw();
    dbControl.dbPools[sign] = db; 
    db.collection(collectionName).remove(fillter,function(err, result) {
        db.close(); 
        delete dbControl.dbPools[sign];
        if (err) throw err;
        if (callback) {
            callback(err, result)
        };
        return result;
    });

};



module.exports = dbControl;
