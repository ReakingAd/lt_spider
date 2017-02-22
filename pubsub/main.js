let event = {
    client:{},
    listen:function(event,cb){
        if( !this.client[ event ] ){
            this.client[ event ] = [];
        }
        this.client[ event ].push(cb);
    },
    trigger:function(event,info){
        if( !this.client[ event ] || this.client[ event ].length === 0 ){
            return false;
        }
        this.client[ event ].forEach( (item,index) => {
            item(info);
        });
    },
    remove:function(event){a
        if( !client[ event ] ){
            return false;
        }
        client[ event ] = undefined;
    }
}

function installEvent(obj){
    for( key in event ){
        obj[ key ] = event[ key ];
    }
}

// event.listen('80p',function(info){
//     console.log('I got the info: ' + info);
// });
// event.trigger('80p','总价800000');

let salesOffice = {};

installEvent(salesOffice);
salesOffice.listen('90p',info => {
    console.log('I got the info: ' + info);
});
salesOffice.trigger('90p','总价=900000');
