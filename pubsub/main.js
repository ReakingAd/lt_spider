;(function(window,document,jQuery,undefined){

    'use strict';

    var root = window;
    var $ = root.jQuery;

    root.main = {
        selections:{
            fabric:{
                type:'CS',
                value:'CS13'
            },
            collar:{
                value:'ZJLE'
            }
        },
        init:function(){
            this.bindClick();
            this.subscribeEvent();
            this.bindChangeNav();
        },
        bindClick:function(){
            var _this = this;
            
            $('.content-list-inner-wrapper').on('click','ul li',function(){
                var $this       = $(this);
                var _category   = $this.parent().data('category');
                var _value      = $this.data('value');
                var _selections = _this.selections;

                if( _category === 'fabric' ){
                    var _type = _value.replace(/\d/g,'');
                    _selections[ _category ].type = _type;
                }
                _selections[ _category ].value = _value;
                Pubsub.trigger('update',_selections);
            });
        },
        // 修改面料
        mFabric:function(selections){
            var _src = 'all_new/XZ_BL_' + selections.fabric.value + '_Z.png';

            $('.fabric img').attr('src',_src);
        },
        // 修改袖口
        mCuffs:function(selections){
            var _src = 'all_new/XZ_ZS_XT_Z_ZMXT_CX_' + selections.fabric.type + '_' + selections.fabric.value + '_Z_.png';

            $('.cuffs img').attr('src',_src);
        },
        // 修改领子
        mCollar:function(selections){
            var _src = 'all_new/XZ_ZS_LZ_' + selections.collar.value + '_' + selections.fabric.type + '_' + selections.fabric.value + '_Z_.png';

            $('.collar img').attr('src',_src);
        },
        // 修改口袋
        mPocket:function(selections){
            var _src = 'all_new/XZ_ZS_KD_Z_ZJKD_' + selections.fabric.type + '_' + selections.fabric.value + '_Z_.png';

            $('.pocket img').attr('src',_src);
        },
        // 修改门襟
        mMj:function(selections){
            var _src = 'all_new/XZ_ZS_MJ_ZMMJ_' + selections.fabric.type + '_' + selections.fabric.value + '_Z_.png';

            $('.mj img').attr('src',_src);
        },
        // 修改扣子
        mButton:function(selections){
            var _src = 'all_new/XZ_MJ_XDw_WLK_KZ_YK_' + selections.fabric.value + '_Z_.png';

            $('.button img').attr('src',_src);
        },
        // 订阅
        subscribeEvent:function(){
            Pubsub.listen('update',this.mFabric);
            Pubsub.listen('update',this.mCuffs);
            Pubsub.listen('update',this.mCollar);
            Pubsub.listen('update',this.mPocket);
            Pubsub.listen('update',this.mMj);
            Pubsub.listen('update',this.mButton);
        },
        // 切换nav
        bindChangeNav:function(){
            $('.nav-list-inner-wrapper').on('click','ul li',function(){
                var _category = $(this).data('category');
                var _content = $('.content-list-inner-wrapper').find('ul').filter('[data-category=' + _category + ']');

                _content.siblings('ul').addClass('lt_hide');
                _content.removeClass('lt_hide');
            });
        }
    }
})(window,document,jQuery);

$(document).ready(function(){
    
    var root = window;
    var $ = root.jQuery;

    root.main.init();
});