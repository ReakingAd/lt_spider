;(function(window,document,jQuery,undefined){

    'use strict';

    var root = window;
    var $ = root.jQuery;

    root.main = {
        init:function(){
            this.triggerFabric();
            this.bindEvent();
        },
        triggerFabric:function(){
            $('.content-list').on('click','li',function(){
                var _value = $(this).data('value');
                console.log( _value );

                Event.trigger('fabric',_value);
            });
        },
        mFabric:function(data){
            var _src = 'all_new/XZ_BL_' + data + '_Z.png';

            $('.fabric img').attr('src',_src);
        },
        mCuffs:function(data){
            var _src = 'all_new/XZ_ZS_XT_Z_ZMXT_CX_CS_' + data + '_Z_.png';

            $('.cuffs img').attr('src',_src);
        },
        bindEvent:function(){
            Event.listen('fabric',this.mFabric);
            Event.listen('fabric',this.mCuffs);
        }
    }
})(window,document,jQuery);

$(document).ready(function(){
    
    var root = window;
    var $ = root.jQuery;

    root.main.init();
});