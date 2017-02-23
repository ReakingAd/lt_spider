//set pagename
(function(){
    "use strict";

    //initial setup

    var root = this;
    var $ = root.jQuery;

    if (typeof root._3JK._images === 'undefined') {
      root._3JK._images = {};
    }
    // 布料
    root._3JK._images.BL = {
        '147': 'CS5', // 白色鸟眼纹
        '151': 'CS12',
        '153': 'CS14',
        '152': 'CS15',
        '154': 'CS16',
        '148': 'CS8',
        '149': 'CS9',
        '237': 'CS6',
        '238': 'CS7',
        '240': 'TW8',
        '241': 'TW2',
        '233': 'CS18',
        '234': 'CS2',
        '235': 'CS3',
        '236': 'CS4',
        '239': 'TW7',
        '242': 'TW1',
        '243': 'TW10',
        '150': 'CS13',
        '258': 'GZ1',
        '259': 'GZ2',
        '260': 'GZ6',
        '261': 'GZ5',
        '271': 'CS10',
        '272': 'CS11',
        '232': 'CS17',
        '392': 'CS1', // 蓝色棉麻             // 以下为进口面料
        '395': 'TW4', // 蓝黑条纹
        '396': 'TW3', // 咖色条纹
        '400': 'GZ3', // 黑色格纹
        '401': 'TW9', // 棉麻条纹
        '399': 'GZ4', // 蓝色格纹
        '394': 'CS19',    // 灰色鸟眼纹
        '393': 'CS20',   // 蓝色鸟眼纹
        '405': 'CS22', // 紫色印花
        '404':'CS21', // 橘色棉麻
        '403':'TW11', //白色格纹
        '398':'TW5', //浅蓝细条纹
        '397':'TW6', // 蓝黄条纹
        '407':'CS5', // 白色斜纹。用的和白色鸟眼纹同样的代码和图片
        '402':'CS23', // 浅灰平纹
        '409':'CS26', // 白色鱼骨纹    // 0429 begin
        '410':'CS25', // 浅蓝色鱼骨纹    
        '411':'CS29', // 紫色薄牛津纺    
        '412':'CS27', // 蓝色薄牛津纺    
        '413':'GZ9', // 紫色格子    
        '414':'GZ10', // 蓝色格子    
        '415':'GZ7', // 蓝红格纹
        '416':'GZ8', // 绿色格纹     // 0429 end
        '419':'CS32', // 蓝色鱼骨纹  // 0615 update begin
        '420':'GZ14', // 蓝色细格纹
        '421':'CS31', // 深蓝色波点
        '422':'CS28', // 蓝色印花
        '423':'GZ11', // 蓝色提花格纹
        '424':'GZ12', // 蓝色方格
        '425':'GZ13', // 蓝色小方格
        '426':'CS30', // 白色隐格子   // 0615 update end
    };

    // 袖子
    root._3JK._images.XZ = {
        '53': 'CX',
        '145': 'DX',
        '146': 'XD'
    };
    // 过肩
    root._3JK._images.GJ = {
        '121': 'ZCGJ',
        '122': 'SSJGJ',
        '123': 'XCGJ',
        '124': 'BZGJ'
    };
    // 领子
    root._3JK._images.LZ = {
        '162':'YF2L',
        '49':'XFLG',
        '50':'ZJLE',
        '155':'ZBZLN',
        '165':'LL',
        '83':'LDKZJLE',
        '82':'XJLE',
        '163':'XFL',
        '164':'LDKXJLE',
        //'343' : 'YL'  // 小圆领
    };
    // 门襟
    root._3JK._images.MJ = {
        '89': 'AMJ',
        '65': 'MMJ',
        '66': 'WMJ'
    };
    // 后背
    root._3JK._images.HB = {
        '93'  : 'WZ',
        '94'  : 'SS',
        '95'  : 'SZ',
        '333' : 'SSJGJ'
        
    };
    // 袖头后背
    root._3JK._images.XT_back = {
        '61':   'YJ1Y',
        '156':  'LJ1Y',
        '157':  'ZJ1Y',
        '62':   'YJ2Y',
        '166':  'LJ2Y',
        '96':   'FS4Y',
        '167':  'FS2Y',
        '137':  'empty'
    };
    // 袖头正面
    root._3JK._images.XT_front = {
        '61':   '1Y',
        '156':  '1Y',
        '157':  '1Y',
        '62':   '2Y',
        '166':  '2Y',
        '96':   'FS',
        '167':  'FS'
    };
    // 口袋
    root._3JK._images.KD = {
        '103' : 'ZJKD',
        '102' : 'YJKD',
        '101' : 'LJKD',
        '158' : 'SJKD',
        '168' : 'TXKD',
        '169' : 'LJDG1KKD',
        '170' : 'HXDG1KKD',
        '144' : 'empty'
    };
    // 领面撞色
    root._3JK._images.ZSLM = {
        '126': 'CS_CS8',
        '171': 'CS_CS5',
        '110': 'CS_CS10',
        '136': 'empty',
        '125': 'CS_AHS',
        '172': 'CS_CS17',
        '173': 'CS_CS16',
        '174': 'CS_CS18',
        '175': 'CS_LVSYH',
        '176': 'CS_ZQYH',
        '293': 'CS_CS15',  // 黄色牛津纺
        '294': 'CS_CS12',  // 紫色牛津纺 
        '295': 'CS_CS14',  // 蓝色牛津纺 
        '296': 'CS_CS13',  // 绿色牛津纺 
        '297': 'CS_CS2',  //  浅蓝色牛津纺
        '304': 'CS_CS4',  //  粉色斜纹
        '303': 'CS_CS1',  //  蓝色棉麻
        '301': 'CS_CS19',  // 灰色鸟眼纹 
        '302': 'CS_CS20',  // 蓝色鸟眼纹

    };
    // 撞色长袖袖口
    root._3JK._images.ZSCXXT = {
        '137': 'empty',
        '69':  'CS_CS8',
        '70': 'CS_CS9',
        '127': 'CS_AHS',
        '177': 'CS_CS10',
        '178': 'CS_CS17',
        '179': 'CS_CS16',
        '180': 'CS_CS18',
        '181': 'CS_LVSYH',
        '182': 'CS_ZQYH',

        '305': 'CS_CS15', // 黄色牛津纺
        '306': 'CS_CS12', // 紫色牛津纺
        '307': 'CS_CS14', // 蓝色牛津纺
        '308': 'CS_CS13', // 绿色牛津纺
        '309': 'CS_CS2',  // 浅蓝色牛津纺
        '310': 'CS_CS4',  // 粉色斜纹
        '313': 'CS_CS1',  // 蓝色棉麻
        '312': 'CS_CS19', // 灰色鸟眼纹
        '311': 'CS_CS20', // 蓝色鸟眼纹
    };
    // 撞色短袖
    root._3JK._images.ZSDX = {
        '138': 'empty',
        '111' : 'CS_CS9',
        '128' : 'CS_CS8',
        '183': 'CS_CS10',
        '184': 'CS_CS17',
        '185': 'CS_CS16',
        '186': 'CS_CS18',
        'empty': 'empty',
        '314': 'CS_CS15', // 黄色牛津纺
        '315': 'CS_CS12', // 紫色牛津纺
        '316': 'CS_CS14', // 蓝色牛津纺
        '317': 'CS_CS13', // 绿色牛津纺
        '318': 'CS_CS2',  // 浅蓝色牛津纺
        '319': 'CS_CS4',  // 粉色斜纹
        '320': 'CS_CS1',  // 蓝色棉麻
        '322': 'CS_CS19', // 灰色鸟眼纹
        '321': 'CS_CS20', // 蓝色鸟眼纹

    };
    // 撞色门襟
    root._3JK._images.ZSMJ = {
        '139' : 'CS_CS9',
        '112' : 'empty',
        '191' : 'CS_AHS',
        '130' : 'CS_CS8',
        '192' : 'CS_CS10',
        '131' : 'CS_CS17',
        '189' : 'CS_CS16',
        '190' : 'CS_CS18',
        '193' : 'LVSYH',
        '194' : 'ZQYH',
        '323' : 'CS_CS15', // 黄色牛津纺
        '324' : 'CS_CS12', // 紫色牛津纺
        '325' : 'CS_CS14', // 蓝色牛津纺
        '326' : 'CS_CS13', // 绿色牛津纺
        '327' : 'CS_CS2',  // 浅蓝色牛津纺
        '328' : 'CS_CS4',  // 粉色斜纹
        '329' : 'CS_CS1',  // 蓝色棉麻
        '331' : 'CS_CS19', // 灰色鸟眼纹
        '330' : 'CS_CS20', // 蓝色鸟眼纹
    };
    // 撞色扣线
    root._3JK._images.ZSKX = {
        '77' :  'BS',
        '113':  'SS',
        '78' :  'JHS',
        '195':  'QFS',
        '196':  'AHS',
        '197':  'QZS',
        '198':  'ZS',
        '199':  'SZIS',
        '200':  'CLS',
        '201':  'MLS',
        '202':  'QLV',
        '203':  'QLS',
        '204':  'LS',
        '205':  'ZLS',
        '206':  'THS',
        '207':  'XBS',
        '208':  'QHS',
        '209':  'HS',
        '210':  'SHS'
    };
    // 撞色扣子
    root._3JK._images.ZSKZ = {
        '55': 'YK_SS',
        '132':  'JSY_JS',
        '56':   'YK_LS',
        '159':  'YK_JHS',
        '160':  'YK_ZLS',
        '161':  'YK_HBS',
        '212': 'YK_BS',
        '223': 'BKY_BS',
        '245': 'BKF_BS',
        '61':   'YK_HBS',
        '211':  'YK_AHS',
        '213':  'FK_QHS',
        '214':  'FK_HS',
        '215':  'FK_SZS',
        '216':  'FK_LS',
        '217':  'JSY_YS',
        '218':  'YK_LHS',
        '219':  'YK_RBS',
        '220':  'YK_SZS',
        '221':  'YK_ZS',
        '222':  'BKY_HS',
        '224':  'BKF_HS',
        '244': 'YK_SHS',
        '276': 'YK_RBS',
        '277': 'YK_HS'
    };
    
    root._3JK._images.QPXS = {
        '118':  'QP_V',
        '117':  'QP_X',
        '143' : 'empty'
    };

}).call(this);

(function(){
    "use strict";

    //initial setup

    var root = this;
    var $ = root.jQuery;

    if (typeof root._3JK._product === 'undefined') {
        root._3JK._product = {};
    }
    
    root._3JK._product = {
        
        elements:{

            current_tab_name : '布料',  // 当前衬衫选项的名字
            is_first: false,  // 是否是首件衬衫
            sleeve_long: true,
            index: 0,    // url中hash的生成???
            // 改变深度定制位置的新选项逻辑
            _new_category_logic:{
                '领型': ['领面撞色', '底领面撞色'],
                '布料': ['前片形式', '过肩款式'],
                '门襟': ['门襟撞色', '门襟里撞色'],
                '袖头': ['长袖袖口撞色'],
                '品类': ['短袖袖口撞色'],
                '纽扣': ['扣线颜色']
            },
            _new_category_check:[],
            _cixiu_maxlength:{
                '114': 8, // 左袖口
                '75': 10, // 底领面
                '133': 4  // 过肩面
            }

        },
        // initialization
        init: function( _parent ){
            
            this.default_status();
            this.trigger_zhuangse();
            this.has_change_bindings();
            this.button_bindings();
            this.cixiu();
            this.image_bindings_v2();
            this.choose_cixiu_new();   
            this.btn_cixiu();
            this.btn_cizi_finish();
            this.style_popup();
            this.recommend_popup();
            this.selection_init();  
            this.new_category_logic();
            this.version_2_init();
            this.create_other_catogory(); // 着装风格
            this.create_cixiu_popup(); // 刺绣
            this.help_popup_bindings();
            this.init_swiper();
            this.go_recquestion();
            this.header_hide();
            // new version march begin
            $.Topic( 'shirt:update:price' ).publish();
        },
        // 载入页面时的默认显示
        default_status:function( _parent ){

            
            $(".threejk-personalization-price-description",_parent).show();
            if (_3JK.global._public.regular){

                $('.threejk-original-container', _parent).removeClass('threejk-hide');
                $('.btn_next', _parent).hide();
                $('.btn_diy_buy', _parent).show();

            }
            else{
                $('.threejk-personalization-easy-container', _parent).removeClass('threejk-hide');  
                $('.btn_next', _parent).show();
                $('.btn_diy_buy', _parent).hide();

            }
            $(".goback,.dress_selected").show();
            $('.goback').hide();

            $('footer').hide();

            $('.diy_box').removeClass('hd');
            $.Topic( 'shirt:update:collar' ).subscribe( this.update_collar );
        },
        // 弹出撞色弹窗
        trigger_zhuangse:function(){

            var _this = this;

            $('.trigger-more').on('click', function (){

                var _title = _this.elements.current_tab_name;

                if (_title === '纽扣'){
                    _title = '扣线颜色';
                }
                $('.diy_box_header_hard .diy_hard_name').html( _title ); // 添加弹窗题目
                $('.diy_nav_hard .triangel_sel').hide(); 
                $('.diy_content_hard .diy_tab').hide();
                $('[data-show="' + _this.elements.current_tab_name + '"]' ).first().addClass('nav_selected_background nav_selected'); // 默认弹窗中第一个元素处于选中状态
                $('[data-show="' + _this.elements.current_tab_name + '"]' ).css('display','inline-block');
                $('.diy_box_hard').removeClass('hd');

                $('.diy_box_hard').show().animate({'bottom':'0'},150);
                $('.diy_nav_hard li:visible').click();
                   
            });

        },
        // 改变深度定制显示位置的新选项逻辑
        new_category_logic:function(){

            var _this = this;

            for (var key in _this.elements._new_category_logic ){
               $.each( _this.elements._new_category_logic[key], function ( num1, it1 ){ 
                    
                    $('.diy_tab').filter('[data-name="'+ it1 + '"]').attr('data-show', key);
                    $('.triangel_sel[data-name="' + it1 + '"]').attr('data-show', key);

                });
            }
            // 弹窗中的catagory名字
            $('.diy_nav_hard').html( $('.diy_nav').find('[data-type="hard_type"]') );
            // 弹窗中的选项内容
            $('.diy_content_hard').html( $('.diy_content .diy_tab').filter('[data-type="hard_type"]') );

        },
        // 显示、隐藏撞色按钮
        show_hide_trigger_more: function (){

            var _this = this;
            var _status = false;
            
            $.each( _this.elements._new_category_check, function (num1, it1){
                if ( _this.elements.current_tab_name == it1){
                    _status = true;
                }
            });
            if (_status){
                if ( $('.diy_content_hard .diy_tab').filter('[data-show="'+ _this.elements.current_tab_name + '"]').size() > 0){
                    if ( _this.elements.current_tab_name =='门襟' && $('.diy_tab[data-name="门襟"]').find('.pic_selected').data('full-name') ==='门襟|明门襟' )
                        $('.trigger-more').show();
                    else if (_this.elements.current_tab_name =='品类' && $('.diy_tab[data-name="品类"]').find('.pic_selected').data('full-name') ==='短袖|短袖' )
                        $('.trigger-more').show();
                    else if (_this.elements.current_tab_name =='布料' && _3JK._shirt.selections.fabric.front.type === 'CS' )
                        $('.trigger-more').hide();
                    else if ( _this.elements.current_tab_name !='门襟' && _this.elements.current_tab_name !='品类')
                        $('.trigger-more').show();
                    else
                        $('.trigger-more').hide();
                }
            }
            else{
                $('.trigger-more').hide();
            }
            
        },

        version_2_init : function (){

            var _this = this;
            var _RMB_symbol = $('.rmb_symbol').text();

            $.each( $('[data-show]'), function (num1, it1){
                _this.elements._new_category_check.push( $(it1).data('show') );
            });

            var bind_tab = function (evt){

                if ( !$(this).hasClass('.nav_selected_background') ){
                    $(this).addClass('nav_selected_background');
                    $(this).parent().find('.triangle').addClass('hd');
                    $(this).find('.triangle').removeClass('hd').show();
                }

                var name = $(this).data('name');
                var _diy_tab = $(".diy_tab[data-name='" + name + "']");

                _diy_tab.show().siblings().hide();

                var _price = $('.diy_content_hard .diy_tab:visible .pic_selected img').attr('price');

                $('.diy_box_header_hard .diy_hard_name').html( name );
                $('.diy_hard_price').html(' ' + _RMB_symbol + _price);
                $(this).addClass('nav_selected nav_selected_background').siblings().removeClass('nav_selected nav_selected_background');

            };

            $('.diy_nav_container_hard').on('click', '.triangel_sel', bind_tab);

            var bind_image = function(event){

                _this.update_image_v2(event);

                // 选择区、帮助区的页面切换效果        
                $(this).addClass("pic_selected").siblings().removeClass("pic_selected");
                var name = $(this).data('full-name');
                var index = $(this).index();
                
                var _price = $('.diy_content_hard .diy_tab:visible .pic_selected img').attr('price');
                $('.diy_hard_price').html(' ' + _RMB_symbol + _price);
                
                $(".callor_pic > li").eq(index).show().siblings().hide();
                $(".callor_des > ul > li").eq(index).show().siblings().hide();

                //隐去的效果
                var visible_tab_num = $(".diy_tab").not('hidden').not('hidden').index();
                $(".content_hide").eq(visible_tab_num).find(".radio").eq(index).find("input").prop("checked", "checked");
                $(".content_hide").eq(visible_tab_num).find(".radio").eq(index).siblings().find("input").prop("checked", "");
                
                $.Topic( 'shirt:update:price' ).publish();
            };

            $(".diy_content_hard").on('click','.diy_tab > ul > li', bind_image);
            
        },
        // 显示深度定制价格区
        show_hard_price:function(){

            $('.price_box').css('text-align','left');
            $('.price_num_more_symbol').show();
            $('.price_num_more').show();

        },
        // 帮助信息弹窗
        help_popup_bindings: function (){
            $(".help_info").click(function() {
                var name = $('.help_info li:visible').data('name');
                var $popup = $(".box_info");

                $('.box_info li').filter('[data-name="'+ name + '"]').first().show().siblings().hide();
                $(".threejk-overlay").show();
                $popup.removeClass('threejk_hide');
                $popup.animate({'bottom':'0'},50);
                $('.threejk-outter-outter-container ').addClass('threejk-overflow-hidden');
            });

            $(".info_close,.threejk-overlay").click(function() {
                var $popup = $(".box_info"); 

                $popup.addClass('threejk_hide');
                $popup.animate({'bottom':'-420px'},50);
                $(".threejk-overlay").hide();
                // 隐藏深度弹窗
                $('.diy_box_hard').animate({'bottom':'-200px'},150).hide();  
                $('.diy_box_hard').addClass('hd');
                $('.diy_box_hard').hide();
                $('.threejk-outter-outter-container ').removeClass('threejk-overflow-hidden')

            })

        },
        // 修改初次载入时，帮助区的默认值显示
        update_description: function ( _name ){
            
            var _target_name = $('.diy_tab[data-name="' + _name + '"]').find('.pic_selected').data('full-name');

            $('.help_info li').filter('[data-name="' + _target_name + '"]').show().siblings().hide();

        },

        button_bindings: function (){

            var _this = this;         

            $('.diy_nav_container').on('click', '.triangel_sel', function (){

                if ( !$(this).hasClass('.nav_selected_background') ){
                    $(this).addClass('nav_selected_background');
                }

                var _name = $(this).data('name');

                if ( _name === '刺绣' ){
                }
                // 切换显示背面图
                else if( _name ==='后背' || _name ==='袖头'|| _name ==='过肩款式'){
                    $('.shirt-zheng').hide();
                    $('.shirt-fan').show();
                }
                else{
                    $('.threejk-cixiu-container').hide();
                    $('.shirt-zheng').show();
                    $('.shirt-fan').hide();
                }
                $(this).addClass('nav_selected nav_selected_background').siblings().removeClass('nav_selected nav_selected_background');

                var current_position = $('.triangel_sel').not('hidden').filter('.nav_selected').index();

                _this.elements.index = current_position;

                var hash = "#step_" + _this.elements.index;

                _this.update_description( _name );
                _this.elements.current_tab_name = _name;
                console.log('current tab:: ' + _this.elements.current_tab_name);
                window.location = window.location.origin + window.location.pathname + window.location.search + hash;
                _this.show_hide_trigger_more();

            });
            // 点击翻转衬衫大图
            $('.threejk-turn-image').on('click', function (){

                $('#easy-personalization-image').toggle();
                $('#easy-personalization-image-back').toggle();

            });

        },
        // 切换元素时，hash变化
        has_change_bindings: function (){

            var _this = this;
            
            $(window).hashchange(function() {

                if (_this.elements.index < 0) {
                    _this.elements.index = 0;
                } else {
                    var hash_num = window.location.hash.substr(-2, 2).replace(/[^0-9]/ig, "");
                    _this.switch_diy_content(_this.elements.index);
                }

            })
        },
        // 切换元素选项
        switch_diy_content: function(ranking) {
            //nav条、内容切换函数
            var name = $(".diy_nav > li").filter('.nav_selected').data('name');
            var $_diy_tab = $(".diy_tab[data-name='" + name + "']");

            $_diy_tab.show().siblings().hide();

            var _box_icon = $('.help_info li').filter("[data-category='" + name + "']").first();
            var _this_element = $(".diy_nav > li").filter('.nav_selected');
            var _next_element = _this_element.next();

            if( $('.nav_selected').next().size() == 0 ){
            }
            else if ( !_3JK.global._public.is_hard && _this_element.prev().data('type')==='easy_type' && _this_element.data('type')==='easy_type' && _next_element.data('type') === 'hard_type'){
                _3JK.global._public.is_last = true;
            }
            else{
            }

        },

        reset_category_selection : function ( category_name ){

            var _box_icon = $('.help_info li').filter("[data-category='" + category_name + "']").first();

            _box_icon.show().siblings().hide();
            $('.diy_tab').filter("[data-name='" + category_name + "']").find('li').removeClass('pic_selected').first().addClass('pic_selected')

        },
        // 准备向cart发送的数据
        prep_threejk_options: function (){

            var _parent = $('#hidden-threeJK-values');
            var _new_target = $('.triangel_sel').not('.override-hide').not('.threejk-hide');
            var _result = '';
            var _form_name = '';
            var _form_value = '';

            $.each( _new_target, function ( num1, it1 ){

                var _category_name = $(it1).data('name') ;
                if(_category_name !== '品类'){
                    // 非品类的选项
                    var _real_target = $('.pic_selected img').filter('[data-category-name="'+ _category_name + '"]');

                    _form_name = _real_target.data('form-name');
                    _form_value = _real_target.attr('value');

                    _result = _result + '<input type="hidden" name="threejk[' + _form_name + ']" value="'+ _form_value +'" />';// 发送到购物车的内容
                }
                else{
                    //品类选项
                    var _form_name_1 = $('.pic_selected img').filter('[data-category-name="'+ "长袖" + '"]').data('form-name');
                    if(_form_name_1){
                        _form_name = _form_name_1;
                    }
                    
                    var _form_name_2 = $('.pic_selected img').filter('[data-category-name="'+ "短袖" + '"]').data('form-name');
                    if(_form_name_2){
                        _form_name = _form_name_2;
                    }
                    var _form_name_3 = $('.pic_selected img').filter('[data-category-name="'+ "袖带衬衫" + '"]').data('form-name');
                    if(_form_name_3){
                        _form_name = _form_name_3;
                    }

                    var _form_value_1 = $('.pic_selected img').filter('[data-category-name="'+ "长袖" + '"]').attr('value');
                    if(_form_name_1){
                        _form_value = _form_value_1;
                    }
                    
                    var _form_value_2 = $('.pic_selected img').filter('[data-category-name="'+ "短袖" + '"]').attr('value');
                    if(_form_value_2){
                        _form_value = _form_value_2;
                    }
                    var _form_value_3 = $('.pic_selected img').filter('[data-category-name="'+ "袖带衬衫" + '"]').attr('value');
                    if(_form_value_3){
                        _form_value = _form_value_3;
                    }

                    _result = _result + '<input type="hidden" name="threejk[' + _form_name + ']" value="'+ _form_value +'" />';
                    
                }
            });

            var image_result_zheng = '';
            var image_result_fan = '';
            $.each( $('.shirt-zheng img'), function (num1, it1){
                image_result_zheng = image_result_zheng + $(it1).attr('src')+'|';
            });
            $.each( $('.shirt-fan img'), function (num1, it1){
                image_result_fan = image_result_fan + $(it1).attr('src')+'|';
            });

            var _binding_tel = ( $('#quick_input-telephone').is(':visible') ) ? $('#quick_input-telephone').val() : $('.new_tel_box input').val();
            
            _result = _result + '<input type="hidden" name="threejk[999_123]" value="'+ image_result_zheng +'" />';
            _result = _result + '<input type="hidden" name="threejk[999_124]" value="'+ image_result_fan +'" />';
            _result = _result + '<input type="hidden" name="threejk[binding_tel]" value="'+ _binding_tel +'" />';

            // 刺绣内容
            var cixiu_content = $('#threejk_input_cixiu').val();
            _result = _result + '<input type="hidden" name="threejk[cixiu_content]" value="'+ cixiu_content +'" />';
            // 是否是cart编辑返回的衬衫
            var _result = _result + '<input type="hidden" name="threejk[edit_id]" value="'+ _threeJKValues.product.edit_id +'" />';
            _parent.html( _result );

        },
        // 选择区初始化---创建长袖、短袖、深度定制价格区
        selection_init: function (){
            // 正常进入,非编辑返回
            if ( _threeJKValues.product.edit_id == 0 ) {

                $('.recommend_popup').show();

                var selection_list = $('.triangel_sel[data-name="长袖"],.triangel_sel[data-name="短袖"],.triangel_sel[data-name="袖带衬衫"]');
                var selection_parent = selection_list.parent();

                selection_list.remove();

                var diy_content = $('.diy_tab[data-name="长袖"],.diy_tab[data-name="短袖"],.diy_tab[data-name="袖带衬衫"]');
                var diy_content_parent = diy_content.parent().parent();
                var diy_content_result = '';

                $.each( diy_content.find('ul'), function (num1, it1){
                    
                    var _result = $(it1).html();
                    
                    if (num1 > 0){
                        _result = _result.replace('pic_selected', '');
                    }
                    diy_content_result = diy_content_result +  _result;

                });

                diy_content_parent.find('.diy_tab').eq(1).after('<div class="diy_tab" data-name="品类" style="display: none;"><ul data-name="品类">'+diy_content_result+'</ul></div>');
                diy_content.remove();
                $('.triangel_sel[data-name="布料"]').first().addClass('nav_selected nav_selected_background').find('.triangle').removeClass('hd');
                $('.help_info li').first().show();
                $('.diy_tab').first().show(); // 显示布料选项*****

            }
            // 编辑返回
            else {

                var selection_list = $('.triangel_sel[data-name="长袖"],.triangel_sel[data-name="短袖"],.triangel_sel[data-name="袖带衬衫"]');
                var selection_parent = selection_list.parent();

                selection_list.remove();

                var diy_content = $('.diy_tab[data-name="长袖"],.diy_tab[data-name="短袖"],.diy_tab[data-name="袖带衬衫"]');
                var diy_content_parent = diy_content.parent().parent();
                var diy_content_result = '';

                $.each( diy_content.find('ul'), function (num1, it1){
                    
                    var _result = $(it1).html();
                    
                    _result = _result.replace('pic_selected', '');

                    diy_content_result = diy_content_result +  _result;

                });
                diy_content.remove();

                $('.triangel_sel[data-name="布料"]').first().addClass('nav_selected nav_selected_background').find('.triangle').removeClass('hd');
                $('.help_info li').first().show();
                // 显示布料选项
                $('.diy_tab').first().show(); 
                // 显示长袖或者短袖
                $('img[data-name=' + _threeJKValues['product'].sleeve + ']').parent().addClass('pic_selected');

                // 显示深度定制价格区
                _3JK._product.show_hard_price();
                // 计算价格
                _3JK._shirt.add_extra_cost();

            }

        },

        cixiu: function (){

            var selection_list = $('.triangel_sel[data-name="位置"],.triangel_sel[data-name="刺绣颜色"],.triangel_sel[data-name="字体"]');
            var selection_parent = selection_list.parent();

            selection_parent.find('li').filter('[data-type="hard_type"]').last().after('<li class="triangel_sel" data-name="刺绣" data-type="hard_type">刺绣<span class="triangle hd" style="display: none;"></span></li>');

            var diy_content = $('.diy_tab[data-name="位置"],.diy_tab[data-name="刺绣颜色"]');
            var diy_content_parent = diy_content.parent().parent();
            var _this = this;

            $('.diy_tab[data-name="刺绣位置"]').addClass('cixiu_content_position');

            // 根据刺绣位置，计算刺绣内容最大长度
            var positionSelected = $('.cixiu_content_position li').filter('.pic_selected').find('>img').attr('value');
            var cixiuLength = _this.elements._cixiu_maxlength[positionSelected];
            
            $('.diy_tab[data-name="刺绣位置"],.diy_tab[data-name="刺绣颜色"]').parent().parent().find('.diy_tab').last()
                .after('<div class="diy_tab cixiu_tab" data-name="刺绣" style="display: none;"><ul data-name="刺绣"> <li class="pic_selected"> 
                    <input placeholder="刺绣内容不多于' + cixiuLength + '位" id="threejk_input_cixiu"type="text" maxlength="' + cixiuLength + '" class="threejk_input" /> </li></ul></div>');
            if( _threeJKValues.product.version_2 == 1 ){

                $('#threejk_input_cixiu').addClass('threejk_input');

            }

            $('.cixiu_content_position').on('click', 'li', function (){

                if ( $(this).hasClass('threejk-lock-active') && _this.elements.is_first ){
                    return;
                }
                $(this).addClass('pic_selected').siblings().removeClass('pic_selected');

                var _value = $(this).find('img').attr('value');
                var _name = $(this).parent().data('name');
                // 把刺绣内容最大位数，显示在内容输入框
                var _length = _this.elements._cixiu_maxlength[_value];

                $('#threejk_input_cixiu').val('').attr({'placeholder':'请输入内容,不多于' + _length + '位','maxlength':_length});
                _this.update_description( _name );

            });

        },
        //加入购物车
        add_cart_v2: function (){
            var _this=this;

            $.ajax({

                url: 'index.php?route=checkout/cart/add',
                type: 'post',
                data: $('#product input[type=\'text\'], #product input[type=\'hidden\'], #product input[type=\'radio\']:checked, #product input[type=\'checkbox\']:checked, #product select, #product textarea'),
                dataType: 'json',
                beforeSend: function() {
                },
                complete: function() {
                },
                success: function( json ) {
                    if ( json['error'] ) {
                        if (json['error']['option']) {
                            for (i in json['error']['option']) {
                                var element = $('#input-option' + i.replace('_', '-'));
                                
                                if (element.parent().hasClass('input-group')) {
                                    element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                                } else {
                                    element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
                                }
                            }
                        }           
                        if (json['error']['recurring']) {
                            $('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
                        }                        
                        if (json['error']['first']) {
                            var test = confirm('当前账户只允许添加一件商品到购物车，是否替换？');
                            if(test == true){
                                // _this.clear_then_add_v2(); 
                            }
                            else {
                                $('.btn_diy').removeAttr('disabled');
                                $('.enter-hard').removeAttr('disabled');
                                $('.threejk-turn-image').css('margin-right','115px');
                            }
                        }
                    }
                    if (json['success']) {
                        window.location = 'cart';
                    }

                }

            });

        },
        image_bindings_v2: function (){
            var _this = this;

            $(".help_info>ul>li").first().show();
            $(".callor_pic>li").first().show().siblings().hide();
            $(".callor_des>ul>li").first().show().siblings().hide();

            $(".diy_content").on('click','.diy_tab > ul > li', function(event) {

                if ( $(this).hasClass('threejk-lock-active')  && _this.elements.is_first || $(this).hasClass('pic_selected') ){
                    return;
                }
                // 如果选择无库存布料，弹出提示
                if( $(this).parent().data('name') == '布料' && $(this).find('img').attr('quantity') == 0 ){
                    $.threejk_weui_alert({
                        'title':'此款面料暂无库存！', 
                        'dialog':'',  
                        'button':'确定'
                    });
                    return;
                }
                _this.update_image_v2(event);

                // 选择区、帮助区的页面切换效果        
                $(this).addClass("pic_selected").siblings().removeClass("pic_selected");

                var name = $(this).data('full-name');

                $('.help_info li').filter('[data-name="'+name+'"]').show().siblings().hide();

                var index = $(this).index();
                
                $(".callor_pic>li").eq(index).show().siblings().hide();
                $(".callor_des>ul>li").eq(index).show().siblings().hide();
                //隐去的效果
                var visible_tab_num = $(".diy_tab").not('hidden').not('hidden').index();
                $(".content_hide").eq(visible_tab_num).find(".radio").eq(index).find("input").prop("checked", "checked");
                $(".content_hide").eq(visible_tab_num).find(".radio").eq(index).siblings().find("input").prop("checked", "");
                
                $.Topic( 'shirt:update:price' ).publish();
                _this.show_hide_trigger_more();

            });
        },
        // 更新 selections
        update_image_v2: function ( event ){

            var _target = event.target;
            var _id = $(_target).attr('value');
            var _this_name = $(_target).data('name');
            var _category = $(_target).parents('ul').data('name');
            var _link = '';

            if ( _category === '品类' ){

                var _this_id = _3JK._images.XZ[_id];

                _3JK._shirt.selections.sleeve.front.id = _this_id;
                _3JK._shirt.selections.sleeve.front.type = _this_id;
                _3JK._shirt.selections.sleeve.front.file_name = 'XZ_XZ_'+ _this_id + '_Z';
                _3JK._shirt.selections.sleeve.back.id = _this_id;
                _3JK._shirt.selections.sleeve.back.type = _this_id;
                _3JK._shirt.selections.sleeve.back.file_name = 'XZ_XZ_'+ _this_id + '_F';

                if ( _this_name === '短袖' ){

                    this.elements.sleeve_long = false;

                }
                else{

                    this.elements.sleeve_long = true;

                }
                
                if (this.elements.sleeve_long){

                    this.reset_category_selection( '短袖袖口撞色' );

                    _3JK._shirt.selections.cuffs.front.color = _3JK._shirt.selections.fabric.front.type + '_' 
                        +_3JK._shirt.selections.fabric.front.color;
                    // 编辑返回无袖头选项时，选上第一种袖头,并更改selections
                    if ( $.isEmptyObject( _3JK._shirt.check_id( '袖头' ) ) ) {

                        $('ul[data-name=袖头]>li').first().addClass('pic_selected'); 
                        
                        var _cuff_id = _3JK._shirt.check_id( '袖头' );
                        var _cuff_code = _3JK._images.XT_back[_cuff_id];

                        _3JK._shirt.selections.cuffs.back.id = _cuff_code;
                        _3JK._shirt.selections.cuffs.back.type = _cuff_code;
                    }                         
                    $('.trigger-more').hide();

                }
                else{

                    this.reset_category_selection( '长袖袖口撞色' );
                    _3JK._shirt.selections.cuffs.front.color = _3JK._shirt.selections.fabric.front.type + '_' 
                        +_3JK._shirt.selections.fabric.front.color;
                    $('.trigger-more').show();

                }

                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:update:price' ).publish();

            }
            
            if ( _category === '布料' ){
                var _quantity = $(_target).attr('quantity');
                var _this_id = _3JK._images.BL[_id];

                _3JK._shirt.selections.fabric.front.id = _this_id;
                _3JK._shirt.selections.fabric.back.id = _this_id;
                if ( _3JK._shirt.selections.fabric.front.id.indexOf('CS') > -1){

                    var $diyNavLi = $('.diy_nav li');
                    var $diyTab = $('.diy_tab');

                    _3JK._shirt.selections.fabric.front.type ='CS';
                    $('.trigger-more').hide();
                    
                }
                else if ( _3JK._shirt.selections.fabric.front.id.indexOf('TW') > -1){

                    var $diyNavLi = $('.diy_nav li');
                    var $diyTab = $('.diy_tab');

                    _3JK._shirt.selections.fabric.front.type ='TW';
                    $('.trigger-more').show();

                }
                else if (_3JK._shirt.selections.fabric.front.id.indexOf('GZ') > -1){

                    var $diyNavLi = $('.diy_nav li');

                    _3JK._shirt.selections.fabric.front.type ='GZ';  
                    $('.trigger-more').show();

                }
                $.Topic( 'shirt:update:fabric' ).publish({type:'布料'});
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }

            if ( _category === '前片形式' ){

                var _this_id = _3JK._images.QPXS[_id];

                _3JK._shirt.selections.qpxs.front.id = _this_id;
                _3JK._shirt.selections.qpxs.back.id = _this_id;
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }

            if ( _category === '领型'){

                var _this_id = _3JK._images.LZ[_id];

                _3JK._shirt.selections.collar.front.id = _this_id;
                _3JK._shirt.selections.collar_surface.front.id = _this_id;
                _3JK._shirt.selections.collar.front.type = _this_id;
                _3JK._shirt.selections.collar_surface.front.type = _this_id;
                _3JK._shirt.selections.collar.back.id = 'HL';
                _3JK._shirt.selections.collar_surface.back.id = 'HL';
                _3JK._shirt.selections.collar.back.type = 'HL';
                _3JK._shirt.selections.collar_surface.back.type = 'HL';
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }

            if ( _category === '门襟'){

                var _this_id = _3JK._images.MJ[_id];

                if( _this_id === 'AMJ' ){

                    var $diyTab = $('.diy_tab');

                    _3JK._shirt.selections.mj.front.color = 'empty';
                    $diyTab.find('li[data-full-name="门襟撞色|无"]').siblings().removeClass('pic_selected');
                    $diyTab.find('li[data-full-name="门襟撞色|无"]').addClass('pic_selected');
                    $('.trigger-more').hide();

                }
                else if ( _this_id === 'WMJ' ){

                    var $diyTab = $('.diy_tab');

                    _3JK._shirt.selections.mj.front.color = _3JK._shirt.selections.fabric.front.type + '_' + _3JK._shirt.selections.fabric.front.id ;
                    $diyTab.find('li[data-full-name="门襟撞色|无"]').siblings().removeClass('pic_selected');
                    $diyTab.find('li[data-full-name="门襟撞色|无"]').addClass('pic_selected');
                    $('.trigger-more').hide();

                }
                else {

                    _3JK._shirt.selections.mj.front.color = _3JK._shirt.selections.fabric.front.type + '_' + _3JK._shirt.selections.fabric.front.id ;
                    $('.trigger-more').show();

                }
                _3JK._shirt.selections.mj.front.id = _this_id;
                _3JK._shirt.selections.mj.back.id = 'empty';
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }

            if (_category ==='后背'){

                var _this_id = _3JK._images.HB[_id];

                if( _this_id === 'SZ' && ( _3JK._shirt.selections.gj.back.type === 'SSJGJ')){

                    _3JK._shirt.selections.gj.back.type = 'ZCGJ';
                    $('.diy_tab').find('li[data-full-name="过肩款式|正常过肩"]').siblings().removeClass('pic_selected');
                    $('.diy_tab').find('li[data-full-name="过肩款式|正常过肩"]').addClass('pic_selected');

                }
                else if ( _this_id === "SSJGJ" ){

                    _3JK._shirt.selections.hb.back.type = _this_id;   

                }
                else{

                    _3JK._shirt.selections.hb.back.type = _this_id;

                }
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }
            if (_category === '过肩款式'){

                var _this_id = _3JK._images.GJ[_id];

                if( _this_id === 'SSJGJ' && ( _3JK._shirt.selections.hb.back.type === 'SZ')){
                    _3JK._shirt.selections.hb.back.type = 'WZ';
                    $('.diy_tab').find('li[data-full-name="后背|无省无折"]').siblings().removeClass('pic_selected');
                    $('.diy_tab').find('li[data-full-name="后背|无省无折"]').addClass('pic_selected');
                }
                _3JK._shirt.selections.gj.back.type = _this_id;
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }

            if (_category === "袖头") {

                var _this_id = _3JK._images.XT_back[_id];

                _3JK._shirt.selections.cuffs.back.id = _this_id;
                _3JK._shirt.selections.cuffs.back.type = _this_id;
                _this_id = _3JK._images.XT_front[_id];
                _3JK._shirt.selections.button.back.id = _this_id;
                _3JK._shirt.selections.button.back.type = _this_id;
                $.Topic("shirt:update:all").publish(_3JK._shirt.selections);
                $.Topic("shirt:refresh:all").publish(_3JK._shirt.selections);

            }

            if (_category ==='口袋'){

                var _this_id = _3JK._images.KD[_id];

                _3JK._shirt.selections.pocket.front.id = _this_id;
                _3JK._shirt.selections.pocket.front.file_name = 
                'XZ_ZS_KD_Z_' + _3JK._shirt.selections.pocket.front.id + '_' + _3JK._shirt.selections.fabric.front.type 
                +'_'+ _3JK._shirt.selections.fabric.front.id + '_Z_';
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }

            if (_category ==='领面撞色'){

                var _this_id = _3JK._images.ZSLM[_id];

                _3JK._shirt.selections.collar_surface.front.color = _this_id;
                _3JK._shirt.selections.collar_surface.front.zs = true;
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }

            if (_category ==='短袖袖口撞色'){

                var _this_id = _3JK._images.ZSDX[_id];

                _3JK._shirt.selections.cuffs.front.color = _this_id;
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }

            if (_category ==='长袖袖口撞色'){
                
                var _this_id = _3JK._images.ZSCXXT[_id];

                _3JK._shirt.selections.cuffs.front.color = _this_id;
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }

            if (_category ==='门襟撞色'){

                var _this_id = _3JK._images.ZSMJ[_id];

                _3JK._shirt.selections.mj.front.color = _this_id;
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }
            
            if (_category ==='扣线颜色'){

                var _this_id = _3JK._images.ZSKX[_id];

                _3JK._shirt.selections.buttonhole_thread.front.id = _this_id;
                _3JK._shirt.selections.buttonhole_thread.front.color = _this_id;
                _3JK._shirt.selections.buttonhole_thread.back.id = _this_id;
                _3JK._shirt.selections.buttonhole_thread.back.color = _this_id;
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }

            if (_category ==='纽扣'){

                var _this_id = _3JK._images.ZSKZ[_id];

                _3JK._shirt.selections.button.front.id = _this_id;
                _3JK._shirt.selections.button.front.color = _this_id;
                _3JK._shirt.selections.button.back.id = _this_id;
                _3JK._shirt.selections.button.back.color = _this_id;
                $.Topic( 'shirt:update:all' ).publish( _3JK._shirt.selections );
                $.Topic( 'shirt:refresh:all' ).publish( _3JK._shirt.selections );

            }
            
            // 保持显示背面图
            if (_category ==='后背' || _category ==='袖头' || _category ==='过肩款式'){

                $('.shirt-zheng').hide();
                $('.shirt-fan').show();

            }

            else if ( _category !== '纽扣' ){

                $('.shirt-zheng').show();
                $('.shirt-fan').hide();

            }       

        },

        // 生成修身、衣长、刺字弹窗内容
        create_other_catogory:function(){

            var $shirtStyle = $('.diy_tab').filter('[data-name=着装风格]');
            var $shirtLength = $('.diy_tab').filter('[data-name=衣长]');

            $('.other_catogory .shirt_style').append( $shirtStyle );
            $('.other_catogory .shirt_length').append( $shirtLength );
            
            var bind_image = function (event){

                // 选择区、帮助区的页面切换效果        
                $(this).addClass("pic_selected").siblings().removeClass("pic_selected");

                var name = $(this).data('full-name');
                var index = $(this).index();

                $(".callor_pic > li").eq(index).show().siblings().hide();
                $(".callor_des > ul > li").eq(index).show().siblings().hide();

                //隐去的效果
                var visible_tab_num = $(".diy_tab").not('hidden').not('hidden').index();

                $(".content_hide").eq(visible_tab_num).find(".radio").eq(index).find("input").prop("checked", "checked");
                $(".content_hide").eq(visible_tab_num).find(".radio").eq(index).siblings().find("input").prop("checked", "");

            };

            $('.other_catogory .shirt_style').on('click','.diy_tab > ul > li', bind_image)
            $('..other_catogory .shirt_style .diy_tab').show();
            $('.other_catogory .shirt_length').on('click','.diy_tab > ul > li', bind_image)
            $('..other_catogory .shirt_length .diy_tab').show();

        },
        // 弹出着装风格
        style_popup:function(){
            // 弹出
            $('.button-cart').click(function(){

                $('.threejk-outter-outter-container').addClass('overflow-hidden');// 禁止背景元素滑动
                // 如果是设计后而不是直接购买推荐款，做个标记
                if( !$(this).hasClass('buy_now') ){
                    $('.close_other_catogory').attr('recommend-mark','0');    
                } 
                // 弹出弹窗
                $('.recommend_popup').animate({'bottom':'-200px'},500,function(){
                    $('.recommend_popup').hide();
                    $('.price_box').removeClass('threejk_hide');
                    $('.balance_box').removeClass('threejk_hide');
                });
                $('.threejk-overlay').show();
                $('.other_catogory').show().animate({'bottom':0},50);

            });
            // 隐藏
            $('.close_other_catogory,.threejk-overlay').click(function(){

                $('.other_catogory').animate({'bottom':'-450px'},50).hide();
                $('.threejk-overlay').hide();
                // 如果是直接购买推荐款
                // if( $('.close_other_catogory').attr('recommend-mark') == 1 ){
                //     $('.recommend_popup ').show().animate({'bottom':'0px'},50);
                // }
                $('.threejk-outter-outter-container').removeClass('overflow-hidden');// 允许背景元素滑动

            });

        },
        // 选择刺绣 
        choose_cixiu_new:function(){
            var _this = this;
            
            // 确认刺绣选择
            $('.confirm_other_catogory').on('click',function(){
                var $fabricSelected = $('ul[data-name=布料] li').filter('.pic_selected');

                if ( $fabricSelected.length === 0 ){
                    $.threejk_weui_alert({
                        'title':'请选择一款布料！', 
                        'dialog':'',  
                        'button':'确定'
                    });
                }
                else {
                    var _fabricQuantity = $fabricSelected.find('>img').attr('quantity');
                    // 面料有库存，或者弹窗提醒用户确定时，加入购物车
                    if ( _fabricQuantity !== '0' || confirm( '当前布料无库存！是否继续加入购物车？' ) ){
                        var noCixiu = $.isEmptyObject( $('#threejk_input_cixiu').val() ); // 判断是否已经填过刺绣内容
                        // 未填过刺绣，并询问是否弹出弹窗
                        if ( noCixiu && confirm('是否需要刺绣？')){
                            $('.diy_tab ul[data-name="刺绣"]').find('input').removeAttr('disabled'); // 启用刺绣内容输入框
                            $('.other_catogory').animate({'bottom':'-450px'},50).hide();
                            $('.cixiu_box').show().animate({'bottom':0},50);
                            $('.btn_cizi_finish').data('add-cart','true'); // 将刺绣完成按钮标记为可加入购物车
                        }
                        // 填过刺绣
                        else{
                            // 如果是已经登录的用户
                            if( _threeJKValues['product'].login ){
                                // 加入购物车
                                $(this).val('Loading');
                                $(this).attr('disabled','');
                                $('.btn_diy').attr('disabled','');
                                $('.enter-hard').attr('disabled','');
                                $('.threejk-turn-image').css('margin-right','137px');

                                var _id = $('#original_value').data('product-id');
                                _this.prep_threejk_options();
                                _this.add_cart_v2();
                            }
                            // 未登录弹出登录弹窗
                            else{
                                _3JK.global.login_popup_init( '.login_container' );
                                // 重写绑定登录按钮的时间处理函数。
                                $('.login_container').off('click','.btn_quick_login');
                                $('.login_container').on('click','.btn_quick_login',function(){
                                    var _user_name = $('.login_user_name').val();
                                    var _password = $('.login_password').val();
                                    var _type = $('.home_pic_group>li[target=target]').data('type');

                                    $.ajax({
                                        url:'login/popup',
                                        type:'post',
                                        dataType:'json',
                                        data:'telephone=' + _user_name + '&confirm_message=' + _password + '&product=' + _type,
                                        success:function( json ){
                                            if ( json['result'] == 'success' ) {
                                                $('.login_container').animate({'bottom':'-370px'},50).hide();
                                                $('.threejk-overlay').hide();
                                                // 加入购物车
                                                $(this).val('Loading');
                                                $(this).attr('disabled','');
                                                $('.btn_diy').attr('disabled','');
                                                $('.enter-hard').attr('disabled','');
                                                $('.threejk-turn-image').css('margin-right','137px');

                                                var _id = $('#original_value').data('product-id');

                                                _this.prep_threejk_options();
                                                _this.add_cart_v2();
                                            }
                                            else if ( json['result'] == 'error' ) {
                                                window.warn.log('err:' + json['value'] );
                                            }
                                        }                    
                                    });
                                });
                                // 弹出弹窗
                                $('.threejk-overlay').show();
                                $('.login_container').show().animate({'bottom':'0'},50);
                            }
                        }
                    }
                }

            });
            // 关闭登录弹窗
            $('.close_login_container,.threejk-overlay').on('click',function(){
                $('.login_container').animate({'bottom':'-370px'},50).hide();
                $('.threejk-overlay').hide();
            });
            // 关闭刺绣弹窗
            $('.close_cixiu_box,.threejk-overlay').click(function(){
                $('.diy_tab ul[data-name="刺绣"]').find('input').attr('disabled','disabled'); // 禁用刺绣内容输入框
                $('.cixiu_box').animate({'bottom':'-600px'},50).hide();
                $('.threejk-overlay').hide();
            });
        },
        // 刺绣按钮弹出刺绣弹窗
        btn_cixiu:function(){
            $('.btn_cizi').click(function(){
                $('.threejk-overlay').show(); 
                $('.diy_tab ul[data-name="刺绣"]').find('input').removeAttr('disabled'); // 启用刺绣内容输入框
                $('.other_catogory').animate({'bottom':'-450px'},50).hide();
                $('.cixiu_box').show().animate({'bottom':0},50);

                $('.btn_cizi_finish').data('add-cart','false'); // 将刺绣完成按钮标记为不可加入购物车
            });
        },
        // 完成刺字弹窗
        btn_cizi_finish:function(){
            var _this = this;

            $('.btn_cizi_finish').on('click',function(){
                var $fabricSelected = $('ul[data-name=布料] li').filter('.pic_selected');

                if ( $fabricSelected.length === 0 ){
                    $.threejk_weui_alert({
                        'title':'请选择一款布料！', 
                        'dialog':'',  
                        'button':'确定'
                    });
                }
                else {
                    var _fabricQuantity = $fabricSelected.find('>img').attr('quantity');
                    // 面料有库存，或者弹窗提醒用户确定时，加入购物车
                    if ( _fabricQuantity !== '0' || confirm( '当前布料无库存！是否继续加入购物车？' ) ){
                        var _canAddCart = $(this).data('add-cart'); // 是否可以加入购物车。

                        // 正常步骤可以加购物车。
                        if( _canAddCart === 'true' ){
                            // 如果是已经登录的用户
                            if( _threeJKValues['product'].login ){
                                // 加入购物车
                                $(this).val('Loading');
                                $(this).attr('disabled','');
                                $('.btn_diy').attr('disabled','');
                                $('.enter-hard').attr('disabled','');
                                $('.threejk-turn-image').css('margin-right','137px');

                                var _id = $('#original_value').data('product-id');

                                _this.prep_threejk_options();
                                _this.add_cart_v2();
                            }
                            // 未登录弹出登录弹窗
                            else{
                                // 初始化
                                _3JK.global.login_popup_init( '.login_container' );
                                // 重写绑定登录按钮的时间处理函数。
                                $('.login_container').off('click','.btn_quick_login');
                                $('.login_container').on('click','.btn_quick_login',function(){
                                    var _user_name = $('.login_user_name').val();
                                    var _password = $('.login_password').val();
                                    var _type = $('.home_pic_group>li[target=target]').data('type');

                                    $.ajax({
                                        url:'login/popup',
                                        type:'post',
                                        dataType:'json',
                                        data:'telephone=' + _user_name + '&confirm_message=' + _password + '&product=' + _type,
                                        success:function( json ){
                                            if ( json['result'] == 'success' ) {
                                                $('.login_container').animate({'bottom':'-370px'},50).hide();
                                                $('.threejk-overlay').hide();
                                                // 加入购物车
                                                $(this).val('Loading');
                                                $(this).attr('disabled','');
                                                $('.btn_diy').attr('disabled','');
                                                $('.enter-hard').attr('disabled','');
                                                $('.threejk-turn-image').css('margin-right','137px');

                                                var _id = $('#original_value').data('product-id');

                                                _this.prep_threejk_options();
                                                _this.add_cart_v2();
                                            }
                                            else if ( json['result'] == 'error' ) {
                                                window.warn.log('err:' + json['value'] );
                                            }
                                        }                    
                                    });
                                });
                                // 弹出弹窗
                                $('.threejk-overlay').show();
                                $('.login_container').show().animate({'bottom':'0'},50);
                            }
                        }
                        // 刺绣icon弹窗不加购物车
                        else if ( _canAddCart === 'false' ){
                            $('.diy_tab ul[data-name="刺绣"]').find('input').attr('disabled','disabled'); // 禁用刺绣内容输入框
                            $('.cixiu_box').animate({'bottom':'-600px'},50).hide();                
                            $('.threejk-overlay').hide();
                        }        
                    }
                }
                
            }); 
        },
        // 生成刺绣弹窗内容
        create_cixiu_popup:function(){

            var $cixiuPosition = $('.diy_tab').filter('[data-name=刺绣位置]');
            var $cixiuColor = $('.diy_tab').filter('[data-name=刺绣颜色]');
            var $cixiuFont = $('.diy_tab').filter('[data-name=刺绣字体]');
            var $cixiuContent = $('.diy_tab').filter('[data-name=刺绣]');

            $('.cixiu_box .cixiu_position').append( $cixiuPosition );
            $('.cixiu_box .cixiu_color').append( $cixiuColor );
            $('.cixiu_box .cixiu_font').append( $cixiuFont );
            $('.cixiu_box .cixiu_content').append( $cixiuContent );
            
            var bind_image = function (event){
                // 选择区、帮助区的页面切换效果        
                $(this).addClass("pic_selected").siblings().removeClass("pic_selected");

                var name = $(this).data('full-name');
                var index = $(this).index();
                
                $(".callor_pic > li").eq(index).show().siblings().hide();
                $(".callor_des > ul > li").eq(index).show().siblings().hide();

                //隐去的效果
                var visible_tab_num = $(".diy_tab").not('hidden').not('hidden').index();

                $(".content_hide").eq(visible_tab_num).find(".radio").eq(index).find("input").prop("checked", "checked");
                $(".content_hide").eq(visible_tab_num).find(".radio").eq(index).siblings().find("input").prop("checked", "");
                
            };

            $('.cixiu_box .cixiu_position').on('click','.diy_tab > ul > li', bind_image)
            $('.cixiu_box .cixiu_position .diy_tab').show();
            $('.cixiu_box .cixiu_color').on('click','.diy_tab > ul > li', bind_image)
            $('.cixiu_box .cixiu_color .diy_tab').show();
            $('.cixiu_box .cixiu_font').on('click','.diy_tab > ul > li', bind_image)
            $('.cixiu_box .cixiu_font .diy_tab').show();
            $('.cixiu_box .cixiu_content').on('click','.diy_tab > ul > li', bind_image)
            $('.cixiu_box .cixiu_content .diy_tab').show();

        },
        // 推荐款
        recommend_popup:function(){

            var _this = this;
            // 关闭
            $('.close_recommend_popup').click(function(){

                $('.recommend_popup').animate({'bottom':'-250px'},500,function(){
                    $('.recommend_popup').hide();
                    $('.price_box').removeClass('threejk_hide');
                    $('.balance_box').removeClass('threejk_hide');
                    $('.trigger-more').removeClass('threejk_hide').show();
                    _this.show_hide_trigger_more();
                });

            });

        },
        // 初始化swiper
        init_swiper:function(){

            var mySwiper = new Swiper('.swiper-container', {
                direction : 'horizontal',
                pagination: '.swiper-pagination',
                mousewheelControl : true,
                //height: window.innerHeight// 不设置这个值时，swiper-slide会自适应高度。但是部分Android版微信不能每次都自适应。
                height: 200,
                speed:600,
            })

        },
        // 回退到recquestion页面
        go_recquestion:function(){

            $('.go-recquestion').on('click',function(){
                window.location = 'recquestion';
            });
            
        },
        // header默认收起
        header_hide:function ( _parent ){

            var __element_top_header = $(".top-header", _parent);
            var __element_header_control = $(".header-control", _parent);

            __element_header_control.css("background", "#000");
            __element_header_control.css("opacity", "0.7");
            __element_top_header.css("left", "100%");
            
        },

    };

}).call(this);