# MongoSkin-Helper
MongoSkin-Helper
###Example
```javascript
 // db.insert('storeCollection', {
    //     version: '44',
    //     segment: 'myname'
    // }, function(err, result) {

    //     if (err) {
    //         console.log(err);

    //     };
    //     console.log("insert====" + JSON.stringify(result));


    // });
    // db.update('storeCollection', {
    //     version: '44',
    //     segment: 'myname'
    // }, {
    //     $set:{segment:'updatename',version:'44+'}
    // } , function(err, result) {

    //     if (err) {
    //         console.log(err);

    //     };
    //     console.log("update====" + JSON.stringify(result));


    // });
    // db.delete('storeCollection', {
    //      version: '44',
    //     segment: 'myname'
    // }, function(err, result) {

    //     if (err) {
    //         console.log(err);

    //     };
    //     console.log("delete====" + result);

    // });
    db.select('storeCollection', {}, function(err, result) {

        if (err) {
            res.end(JSON.stringify({
                msg: err,
                msg1: err
            }));
        };
        console.log("select====" + result);
        res.end(JSON.stringify({
            msg: result,
            msg1: result[0].segment
        }));

    })
