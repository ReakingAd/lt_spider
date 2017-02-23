(function(){

    "use strict";
    //initial setup
    var root = this;
    var $ = root.jQuery;

    if (typeof root._3JK._shirt === 'undefined') {
        root._3JK._shirt = {};
    }

	root._3JK._shirt = {

		elements:{
			_price:0,	 // 总价
			is_first:true,   // 首次载入页面
			default_options:'',
			default_fabric:'',
		},
		selections: {
			ds:{
				front:{
					id:'DS',
					type:'DS_ZM',
					color:'',
					zIndex: 1,
					file_name: 'DS_ZM',
					element_id: 'ds'
				},
				back:{
					id:'DS',
					type:'DS_BM',
					color:'',
					zIndex: 1,
					file_name: 'DS_BM',
					element_id: 'ds'
				}
			},
			qpxs:{
				front:{
					id:'empty',
					type:'',
					color:'',
					zIndex: 1,
					file_name: 'empty',
					element_id: 'qpxs'
				},
				back:{
					id:'empty',
					type:'',
					color:'',
					zIndex: 1,
					file_name: 'empty',
					element_id: 'qpxs'
				}
			},
			hb: {
				front:{
					id:'CS8',
					type:'',
					color:'',
					zindex: 1,
					file_name: 'XZ_BL_CS4_Z',
					element_id:'hb'
				},
				back:{
					id:'SZ',
					type:'',
					color:'',
					zindex: 1,
					file_name: 'XZ_BM_SZ_F',
					element_id:'hb'
				}
			},
			fabric: {
				front:{
					id:'CS8',
					type:'CS',
					color:'CS8',
					zindex: 1,
					file_name: 'XZ_BL_CS4_Z',
					element_id:'fabric'
				},
				back:{
					id:'CS8',
					type:'CS',
					color:'CS8',
					zindex: 1,
					file_name: 'XZ_BL_CS4_Z',
					element_id:'fabric'
				}
			},
			sleeve:{
				front:{
					id:'CX',
					type:'CX',
					color:'',
					zindex: 1,
					file_name: 'XZ_XZ_CX_Z',
					element_id:'sleeve'
				},
				back:{
					id:'CX',
					type:'CX',
					color:'',
					zindex: 1,
					file_name: 'XZ_XZ_CX_F',
					element_id:'sleeve'
				}
			},
			cuffs:{
				front:{
					id: 'ZMXT',
					type:'SS',
					color:'',
					zindex: 1,
					file_name: 'XZ_ZS_XT_Z_ZMXT_CX_CS_CS8_Z_',
					element_id:'cuffs'
				},
				back:{
					id: 'ZMXT',
					type:'YJ1Y',
					color:'',
					zindex: 1,
					file_name: 'XZ_ZS_XT_Z_ZMXT_CX_CS_CS8_Z_',
					element_id:'cuffs'
				}
			},
			collar:{
				front:{
					id:'XFLG',
					type:'WLK',
					zs: false,
					color:'',
					zindex: 1,
					file_name: 'XZ_ZS_LZ_XFLG_CS_CS8_Z_',
					element_id:'collar'
				},
				back:{
					id:'HL',
					type:'WLK',
					zs: false,
					color:'',
					zindex: 1,
					file_name: 'XZ_ZS_LZ_XFLG_CS_CS8_Z_',
					element_id:'collar'
				}
			},
			collar_surface:{
				front:{
					id:'XFLG',
					type:'WLK',
					zs:false,
					color:'',
					zindex: 1,
					file_name: 'XZ_ZS_LZ_XFLG_M_CS_CS8_Z_',
					element_id:'collar_surface'
				},
				back:{
					id:'HL',
					type:'WLK',
					zs:false,
					color:'',
					zindex: 1,
					file_name: 'XZ_ZS_LZ_XFLG_M_CS_CS8_Z_',
					element_id:'collar_surface'
				}
			},
			mj:{
				front:{
					id:'MMJ',
					type:'MMJ',
					color:'',
					zindex: 1,
					file_name: 'XZ_ZS_MJ_ZMMJ_CS_CS8_Z_',
					element_id:'mj'
				},
				back:{

				}
				
			},
			mj_cover_button:{
				front:{
					id:'MMJ',
					type:'MMJ',
					color:'',
					zindex: 1,
					file_name: 'XZ_ZS_MJ_ZMMJ_CS_CS8_Z_',
					element_id:'mj_cover_button'
				},
				back:{

				}
				
			},
			pocket:{
				front:{
					id:'empty',
					type:'LJKD',
					color:'',
					zindex: 1,
					file_name: 'XZ_ZS_KD_Z_LJKD_CS_CS8_Z_',
					element_id:'pocket'	
				},
				back:{

				}
				
			},
			button:{
				front:{
					id:'YK_SS',
					type:'YK_SS',
					color:'YK_SS',
					zindex: 1,
					file_name: 'XZ_MJ_XDw_WLK_KZ_YK_SS_Z_',
					element_id:'button'	
				},
				back:{
					id:'YK_SS',
					type:'1Y',
					color:'',
					zindex: 1,
					file_name: 'XZ_MJ_XDw_WLK_KZ_YK_SS_Z_',
					element_id:'button'	
				}
			},

			buttonhole_thread:{
				front:{
					id:'SS',
					type:'SS',
					color:'SS',
					zindex: 1,
					file_name: 'XZ_MJ_XDw_WLK_KY_SS_Z_',
					element_id:'buttonhole_thread'	
				},
				back:{
					id:'SS',
					type:'SS',
					color:'SS',
					zindex: 1,
					file_name: 'XZ_MJ_XDw_WLK_KY_SS_Z_',
					element_id:'buttonhole_thread'	
				}
			},
			gj:{
				front:{
					id:'SS',
					type:'SS',
					color:'SS',
					zindex: 1,
					file_name: 'XZ_MJ_XDw_WLK_KY_SS_Z_',
					element_id:'gj'	
				},
				back:{
					id:'ZCGJ',
					type:'ZCGJ',
					color:'SS',
					zindex: 1,
					file_name: 'XZ_ZS_GJ_F_ZCGJ_TW_TW3_F_',
					element_id:'gj'	
				}
			}
		},
		init: function(){
			var _this = _3JK._shirt;
			var options = _this.selections;
			var fabric_id = _this.selections.fabric.front.id;
			var fabric_type = _this.selections.fabric.front.type;

			for ( var ea in options ) {
				if (ea !=='fabric' && ea !=='buttonhole_thread'){
					options[ea].front.color = fabric_type + '_' + fabric_id;
				}
				else if (ea ==='fabric'){
					console.log('---fabric---');
				}
				else if (ea ==='buttonhole_thread'){
					console.log('---buttonhole_thread---');
				}
			}

			this.bindings();
			this.loader();
			// 只有商户用户需要
			if ( !_threeJKValues.product.isBusiness ){
				this.rec_loader();
			}
		},
		// 初次载入页面时，在加载布料图片过程中，显示loader
		loader: function (){
			
			$('.threejk-loader').fadeIn(1000);
			$('.shirt_bigimg').css('visibility', 'hidden');
			$('#fabric img').one('load', function (){
				$('.threejk-loader').fadeOut(1000);
				$('.shirt_bigimg').css('visibility', 'visible');
			});

		},

		bindings: function (){
 
			$.Topic( 'shirt:update:all' ).subscribe( this.update_all );
			$.Topic( 'shirt:refresh:all' ).subscribe( this.refresh_all );
			$.Topic( 'shirt:update:partial' ).subscribe( this.refresh_partial );
			$.Topic( 'shirt:update:fabric' ).subscribe( this.reset_fabric );
			
			$.Topic( 'shirt:update:price' ).subscribe( this.add_extra_cost );

			$.Topic( 'shirt:update:fabric' ).publish();
			$.Topic( 'shirt:update:all' ).publish( this.selections );
			$.Topic( 'shirt:refresh:all' ).publish( this.selections );
			$.Topic( 'shirt:update:price' ).publish();
			
		},

		// 计算价格
		add_extra_cost: function(){

			var $_targets = $(".threejk-personalization-easy .pic_selected >img");
			var _result = 0;     // 所有选项价格。
			var _resultFabric = 100; // 布料价格 
			var _resultOthers = 0; // 其他选项价格

			$.each( $_targets, function ( num1, it1){

				if( $(it1).data('category-name') === '布料' ){
					_resultFabric = _resultFabric + parseInt( $(it1).attr('price') );
					
				}
				else {
					_resultOthers = _resultOthers + parseInt( $(it1).attr('price') );
					
				}
				_result = _result + parseInt( $(it1).attr('price') );
				
			});
			//  定制额外金钱部位0时，显示深度价格区
			if ( _result !== 0 ) {
				_3JK._product.show_hard_price();	
			}
			
			$('.price_num').html( _resultFabric );

			if ( _resultOthers > 0){

				$('.price_num_more').html( _resultOthers );	
				$('.price_num_more_symbol').show();
				$('.price_num_more').show();

			}
			else {

				$('.price_num_more_symbol').hide();
				$('.price_num_more').hide();

			}
			_3JK._shirt.elements._price = _result;
			$('.recommend_popup .pull-right').html( _3JK._shirt.elements._price );

		},

		// 布料设为默认值，并把所有元素的使用图片的布料部分，设置为该布料
		reset_fabric: function ( option ){

			var _this = _3JK._shirt;

			$('.threejk-loader').show();
			$('.shirt_bigimg').css('visibility', 'hidden');
			$('#fabric img').one('load', function (){

				$('.threejk-loader').fadeOut(1000);
				$('.shirt_bigimg').css('visibility', 'visible');

			});

			// 第一次载入时不运行，因为会改变后台设置的各个元素选择区、帮助区的默认值
			if ( _this.elements.is_first !== true ) {

				var _all_categories = $('.threejk-personalization-easy .diy_nav li');
	            var _name = '';
	            var _box_icon = {};

				_this.elements.default_options.siblings().removeClass('pic_selected');
				_this.elements.default_options.addClass('pic_selected');

            }

			// 仅第一次载入时运行
			if( _this.elements.is_first ){

				_this.elements.default_options = $('.pic_selected'); // 第一次载入时记录后台设置的默认选项（选择区）

				// 默认布料的大图、描述
				var _preselect_id = $('[data-name="布料"]').find('.pic_selected >img').attr('value');
				var _preselect_fabric_id = _3JK._images.BL[_preselect_id];

				_this.selections.fabric.front.id = _preselect_fabric_id;
				_this.selections.fabric.front.type = _this.selections.fabric.front.id.substring(0,2);
				_this.elements.default_fabric = _preselect_fabric_id;
				// 更新“布料”的描述
				_3JK._product.update_description('布料'); 
				// 默认后背的大图、描述
				var _preselect_hb = $('[data-name="后背"]').find('.pic_selected >img').attr('value');
				var _preselect_hb_id = _3JK._images.HB[_preselect_hb];

				_this.selections.hb.back.id = _preselect_hb_id;
				_this.selections.hb.back.type = _preselect_hb_id;
				_this.default_hb = _preselect_hb_id;
				// 更新“布料”的描述
				_this.elements.is_first = false;

			}

			var fabric_id = _this.selections.fabric.front.id;
			var fabric_type = _this.selections.fabric.front.type;

			// 刷新布料颜色
			_this.selections.fabric.front.color = fabric_id;

			// 袖头恢复默认***
			var _cuff_id = _this.check_id( '袖头' );
			var _cuff_code = _3JK._images.XT_back[_cuff_id];

			_this.selections.cuffs.back.id = _cuff_code;
			_this.selections.cuffs.back.type = _cuff_code;

			_this.selections.cuffs.front.color = fabric_type + '_' + fabric_id;
			// 长袖袖口撞色显示、短袖袖口撞色隐藏、
			if ( _threeJKValues['product'].sleeve == '长袖' ) {
				// 长袖袖口撞色恢复默认***
				var _ZSCXXT_id =  _this.check_id( '长袖袖口撞色' );
				var _ZSCXXT_code = _3JK._images.ZSCXXT[_ZSCXXT_id];
				
				if (_ZSCXXT_code === undefined){
					_3JK._shirt.selections.cuffs.front.color = _3JK._shirt.selections.fabric.front.type + '_'+ _3JK._shirt.selections.fabric.front.color;
				}
				else
					_3JK._shirt.selections.cuffs.front.color = _ZSCXXT_code;
				
			}
			// 长袖袖口撞色隐藏、短袖袖口撞色显示、
			else if ( _threeJKValues['product'].sleeve == '短袖' ) {

				// 短袖袖口撞色恢复默认***
				var _ZSDX_id =  _this.check_id( '短袖袖口撞色' );
				var _ZSDX_code = _3JK._images.ZSDX[_ZSDX_id];
				// 短袖袖口撞色存在时执行。例如正装没有短袖袖口撞色
				if ( _ZSDX_code ) {
					_3JK._shirt.selections.cuffs.front.color = _ZSDX_code;	
				}
			}

			// 袖子恢复默认 ***
			var _sleeve_id = _this.check_id( '品类' );
			var _this_code = _3JK._images.XZ[_sleeve_id];
			if (_sleeve_id === undefined && _this_code === undefined){
				_this_code = 'CX';
			}
			_this.selections.sleeve.front.id = _this_code;
			_this.selections.sleeve.front.type = _this_code;
			_this.selections.sleeve.front.file_name = 'XZ_XZ_'+ _this_code + '_Z';

			_this.selections.sleeve.back.id = _this_code;
			_this.selections.sleeve.back.type = _this_code;
			_this.selections.sleeve.back.file_name = 'XZ_XZ_'+ _this_code + '_F';

			// 领子恢复默认***
			var _collor_id = _this.check_id( '领型' );
			var _collor_code = _3JK._images.LZ[_collor_id];

			_this.selections.collar.front.id = _collor_code;
			_this.selections.collar.front.type = _collor_code;
			_this.selections.collar.front.color = fabric_type + '_' + fabric_id;
			_this.selections.collar.front.zs = false;

			// 领面恢复默认 ***
			var _collor_ZS_id = _this.check_id( '领面撞色' );
			var _collor_ZS_code = _3JK._images.ZSLM[_collor_ZS_id];

			_this.selections.collar_surface.front.id = _collor_code;
			_this.selections.collar_surface.front.color = _collor_ZS_code;
			_this.selections.collar_surface.front.zs = false;
			
			// 门襟恢复默认 ***
			var _MJ_id = _this.check_id( '门襟' );
			var _MJ_code = _3JK._images.MJ[_MJ_id];

			_this.selections.mj.front.id = _MJ_code;
			_this.selections.mj.front.color = fabric_type + '_' + fabric_id;
			_this.selections.mj_cover_button.front.color = fabric_type + '_' + fabric_id;
			// 门襟撞色恢复默认 
			if ( _MJ_code === 'MMJ' && _this.check_id( '门襟撞色' ) ){

				var _ZSMJ_id = _this.check_id( '门襟撞色' );
				var _ZSMJ_code = _3JK._images.ZSMJ[_ZSMJ_id];
				
				if ( _ZSMJ_code == 'empty' ) {
					_this.selections.mj.front.color = fabric_type + '_' + fabric_id;
					_this.selections.mj_cover_button.front.color = fabric_type + '_' + fabric_id;	
				}
				else {
					_this.selections.mj.front.color = _ZSMJ_code;
					_this.selections.mj_cover_button.front.color = _ZSMJ_code;		
				}

			}

			// 口袋恢复默认***
			var _pocket_id =  _this.check_id( '口袋' );
			var _pocket_code = _3JK._images.KD[_pocket_id];

			_this.selections.pocket.front.id = _pocket_code;

			// 后背恢复默认 ***
			_this.selections.hb.back.id = _this.default_hb;
			_this.selections.hb.back.type = _this.default_hb;

			// 过肩恢复默认 ***【斜裁未验证。】
			_this.selections.gj.back.type = 'ZCGJ';
			_this.selections.gj.back.color = fabric_type + '_' + fabric_id;
			
			// 扣子恢复默认 ***
			var _button_id =  _this.check_id( '纽扣' );
			var _button_code = _3JK._images.ZSKZ[_button_id];

			_this.selections.button.front.id = _button_code; 
			_this.selections.button.front.color = _button_code;

			_this.selections.button.back.id = '1Y';
			_this.selections.button.back.type = '1Y';

			// 扣线恢复默认 ***
			var _buttonhole_thread_id =  _this.check_id( '扣线颜色' );
			var _buttonhole_thread_code = _3JK._images.ZSKX[_buttonhole_thread_id];

			_this.selections.buttonhole_thread.front.color = _buttonhole_thread_code;
			_this.selections.buttonhole_thread.back.color = _buttonhole_thread_code;

			// 刺绣内容恢复默认
			if( _threeJKValues.product.edit_id != 0 ){
				// 如果有刺绣内容，则表明编辑返回数据中有刺绣
				if( _threeJKValues.product.cixiu_content ){
					var $cixiuTrue = $('.cixiu_button ul li[data-value="true"]');
					$cixiuTrue.siblings().removeClass('cixiu_judge');
					$cixiuTrue.addClass('cixiu_judge');
				}
				$('#threejk_input_cixiu').val( _threeJKValues.product.cixiu_content ).removeAttr('disabled');// 将刺绣内容写入输入框.【注】刺绣位置、颜色、字体都是通过php修改默认值的方式返回的。
			} 

			// ******************以下未核对

			_this.selections.fabric.back.color = fabric_id;
			_this.selections.cuffs.back.color = fabric_type + '_' + fabric_id;
			_this.selections.collar.back.color = fabric_type + '_' + fabric_id;
			_this.selections.collar.back.zs = false;
			_this.selections.collar_surface.back.color = fabric_type + '_' + fabric_id;
			_this.selections.collar_surface.back.zs = false;
			_this.selections.pocket.back.id = 'empty';
            
		},
		// 根据选择区的选择，查找对应id值
		check_id:function( _category ){

			var check_id = $('ul[data-name=' + _category + ']').find('.pic_selected>img').attr('value');

			if( check_id ){
				return check_id;	
			}
			else{
				window.console.warn('未能找到所选::' + _category + '::元素的ID值！');
			}

		},

		update_all: function ( selections ){

			var _this = _3JK._shirt;
			
			var _fabric = '';// 布料

			if ( _this.selections.fabric.front.color === 'empty' ) {
				_fabric = 'empty';
			}
			else {
				_fabric = 'XZ_BL_' + _this.selections.fabric.front.color + '_Z';
			}
			_this.selections.fabric.front.file_name =  _fabric;
			
			var _cuffs = '';// 袖头

			if ( _this.selections.cuffs.front.color === 'empty' ) {
				_cuffs = 
				'XZ_ZS_XT_'+ 'Z_' + _this.selections.cuffs.front.id 
				+ '_' + _this.selections.sleeve.front.type
				+ '_' + _this.selections.fabric.front.type + '_' + _this.selections.fabric.front.color + '_Z_'	
			}
			else if(_this.selections.sleeve.front.id === 'DX') {
				_cuffs = 
					'' + 'XZ_ZS_XT_Z_ZMXT_' + _this.selections.sleeve.front.type + '_' 
					+ _this.selections.cuffs.front.color + '_Z_'; 
			}
			else {
				_cuffs = 
				'XZ_ZS_XT_'+ 'Z_' + _this.selections.cuffs.front.id 
				+ '_' + _this.selections.sleeve.front.type
				+ '_' + _this.selections.cuffs.front.color + '_Z_';	
			}
			_this.selections.cuffs.front.file_name = _cuffs ;
			
			// 领型
			_this.selections.collar.front.file_name = 
			'XZ_ZS_LZ_' + _this.selections.collar.front.id
			+ '_' + _this.selections.collar.front.color + '_Z_';
			// 领面
			_this.selections.collar_surface.front.file_name = 
				( _this.selections.collar_surface.front.color === 'empty' || !_this.check_id( '领面撞色' ) ) ?
				'empty':
				'XZ_ZS_LZ_' + _this.selections.collar_surface.front.id
				+ '_M_' + _this.selections.collar_surface.front.color + '_Z_';	
			
			var _mj = '';// 门襟撞色

			if( _this.selections.mj.front.color === 'empty' ){
				_mj = 'XZ_ZS_MJ_Z' + _this.selections.mj.front.id 
					+ '_' + _this.selections.fabric.front.type + '_' 
					+ _this.selections.fabric.front.color + '_Z_'; 
			}
			else {
				_mj = 'XZ_ZS_MJ_Z' + _this.selections.mj.front.id 
				+ '_' + _this.selections.mj.front.color + '_Z_';
			}
			_this.selections.mj.front.file_name = _mj;

			//  mj_cover_button 用于暗门襟覆盖扣子
			_this.selections.mj_cover_button.front.file_name = 
			( _this.selections.mj.front.id === 'AMJ') ? 'XZ_ZS_MJ_ZWMJ' + '_' + _this.selections.mj_cover_button.front.color + '_Z_' : 'empty';
			
			_this.selections.pocket.front.file_name = 
				( _this.selections.pocket.front.id === 'empty' || !_this.check_id( '口袋' ) ) ? 
				'empty' : 
				'XZ_ZS_KD_Z_' + _this.selections.pocket.front.id 
				+ '_' + _this.selections.fabric.front.type + '_' 
				+ _this.selections.fabric.front.color + '_Z_';

			var _button = '';

			if (  _this.selections.collar.front.type ==='XJLE'
				||_this.selections.collar.front.type ==='XFLG'
				||_this.selections.collar.front.type ==='ZBZLN'
				||_this.selections.collar.front.type ==='LL'
				||_this.selections.collar.front.type ==='XFL'
				||_this.selections.collar.front.type ==='ZJLE' ){
				if( _3JK._shirt.selections.button.front.id === 'YK_SS' ){
					_button = 'XZ_MJ_XDw_WLK_KZ_' + 'YK_' +_this.selections.fabric.front.id + '_Z_';
				}
				else {
					_button = 'XZ_MJ_XDw_WLK_KZ_' + _this.selections.button.front.color + '_Z_';
				}
			}
			else{
				if( _3JK._shirt.selections.button.front.id === 'YK_SS' ){
					_button = 'XZ_MJ_XDw_' + _this.selections.collar.front.type 
								+ '_KZ_YK_' + _this.selections.fabric.front.color + '_Z_';
				}
				else {
					_button = 'XZ_MJ_XDw_' + _this.selections.collar.front.type 
								+ '_KZ_' + _this.selections.button.front.color + '_Z_';	
				}
			}

			_this.selections.button.front.file_name = _button;

			_this.selections.buttonhole_thread.front.file_name = 
			( _this.selections.collar.front.type ==='XJLE'
			||_this.selections.collar.front.type ==='XFLG'
			||_this.selections.collar.front.type ==='ZBZLN'
			||_this.selections.collar.front.type ==='LL'
			||_this.selections.collar.front.type ==='XFL'
			||_this.selections.collar.front.type ==='ZJLE') ?
			'XZ_MJ_XDw_WLK_KY_' + _this.selections.buttonhole_thread.front.color + '_Z_':
			'XZ_MJ_XDw_' + _this.selections.collar.front.type 
			+ '_KY_' + _this.selections.buttonhole_thread.front.color + '_Z_';

			var _qpxs = '';

			if( _this.selections.qpxs.front.id === 'empty' ){
				_qpxs = 'empty';
			}
			else if ( _this.selections.fabric.front.type === 'CS' ){
				_qpxs = 'empty';	
			}
			else {
				_qpxs = 
				'XZ_ZS_' + _this.selections.qpxs.front.id
				+ '_' + _this.selections.fabric.front.color + '_Z_';
			}
			_this.selections.qpxs.front.file_name = _qpxs;

			_this.selections.fabric.back.file_name = 
			'XZ_BL_' + _this.selections.fabric.back.color + '_F';
			
			var _cuff_F = '';

			if( _this.selections.cuffs.front.color ==='empty' & _this.selections.sleeve.front.id ==='CX') {
				_cuff_F = 
				'XZ_ZS_XT_F_' + _this.selections.sleeve.front.type + '_'
				+ _this.selections.cuffs.back.type  + '_'
				+ _this.selections.fabric.front.type + '_' + _this.selections.fabric.front.color + '_F_';		
				
			}
			else if ( _this.selections.cuffs.front.color ==='empty'  & _this.selections.sleeve.front.id ==='DX' ){
				_cuff_F = 
				'' + 'XZ_ZS_XT_Z_ZMXT_' + _this.selections.sleeve.front.type + '_' 
				+ _this.selections.fabric.front.type + '_' +_this.selections.fabric.front.color + '_Z_';
			}
			else if ( _this.selections.sleeve.front.id ==='DX' ){
				_cuff_F = 
				'' + 'XZ_ZS_XT_Z_ZMXT_' + _this.selections.sleeve.front.type + '_' 
				+ _this.selections.cuffs.front.color + '_Z_';
			}
			else {
				_cuff_F = 	
				'XZ_ZS_XT_F_' + _this.selections.sleeve.front.type + '_'
				+ _this.selections.cuffs.back.type  + '_'
				+ _this.selections.cuffs.front.color + '_F_';
			}
			_this.selections.cuffs.back.file_name = _cuff_F;


			_this.selections.collar.back.file_name = 
			'XZ_ZS_LZ_' + _this.selections.collar.back.id
			+ '_' + _this.selections.collar.back.color + '_F_';

			_this.selections.collar_surface.back.file_name = 
			( _this.selections.collar_surface.front.color === 'empty' || !_this.check_id( '领面撞色' ) ) ?
			'empty':
			'XZ_ZS_LZ_HL_'
			+ _this.selections.collar_surface.front.color + '_F_';	
			
			_this.selections.hb.back.file_name = 
			( _this.selections.hb.back.type === "SSJGJ") ? 'XZ_ZS_GJ_F_' + _this.selections.hb.back.type+ '_'+ _this.selections.fabric.front.type + '_' + _this.selections.fabric.front.color + '_F_':
			'XZ_BM_' + _this.selections.hb.back.type + '_F';
			
			_this.selections.mj.back.file_name = 'empty';
			_this.selections.mj_cover_button.back.file_name = 'empty';
			
			_this.selections.pocket.back.file_name = 'empty';

			var _button_f = '';

			if (_this.selections.sleeve.front.type ==='DX'){
				_button_f = 'empty';
			}			 
			else {
				if( _3JK._shirt.selections.button.front.id === 'YK_SS' ) {
					_button_f = 'XZ_XT_KZ_' + _3JK._shirt.selections.button.back.type + '_' + 'YK_' +
							    _this.selections.fabric.front.color + '_F_';
				}
				else {

					_button_f = 'XZ_XT_KZ_' + _3JK._shirt.selections.button.back.type + '_' + 
					_this.selections.button.front.color + '_F_';
				}
			}
			_this.selections.button.back.file_name = _button_f;
			
			var buttonHole = '1Y';

			// 两种双扣眼的情况
			if( _3JK._shirt.selections.cuffs.back.id == 'LJ2Y' || _3JK._shirt.selections.cuffs.back.id == 'YJ2Y'){ 
				buttonHole = '2Y';
			}
			// 两种法式袖口口线图
			if( _3JK._shirt.selections.cuffs.back.id == 'FS4Y' || _3JK._shirt.selections.cuffs.back.id == 'FS2Y'){ 
				buttonHole = 'FAS';
			}
			_this.selections.buttonhole_thread.back.file_name = 
			( _this.selections.sleeve.front.type ==='DX') ? 'empty' :
			'XZ_XT_KY_' + buttonHole + '_'
			+ _this.selections.buttonhole_thread.back.color + '_F_';

			_this.selections.gj.back.file_name = 
				_3JK._shirt.selections.hb.back.type === "SSJGJ"? 'empty':
				'XZ_ZS_GJ_F_' + _this.selections.gj.back.type+ '_' + _this.selections.gj.back.color + '_F_';

			_this.selections.qpxs.back.file_name = 'empty';
		},

		refresh_all: function ( selections ){

			var _front_parent = $('.shirt-zheng');
			var _back_parent = $('.shirt-fan');
			var options = selections;
			var element = '';
			var file_name = '';
			// 更新所有正面图片src
			for ( var ea in options ) {

				element = $('#' + options[ea].front.element_id, _front_parent);
				file_name = options[ea].front.file_name;
				element.find('img').attr('src', 'image/custom/all_new/' + file_name + '.png');

			}
			// 更新所有正面图片src
			for ( var ea in options ) {

				element = $('#' + options[ea].back.element_id, _back_parent);
				file_name = options[ea].back.file_name;
				element.find('img').attr('src', 'image/custom/all_new/' + file_name + '.png');

			}

		},

		refresh_partial: function ( selection ){
			
			var _parent = $('.threejk-personalization-easy-container');
			var option = selection;
			var element = $('#' + option.element_id, _parent);
			var file_name = option.file_name;

			element.find('img').attr('src', 'all_new/' + file_name);

		},

		reset_category_selection : function ( category_name ){

			var _box_icon = $('.help_info li').filter("[data-category='" + category_name + "']").first();

			_box_icon.show().siblings().hide();
			$('.diy_tab').filter("[data-name='" + category_name + "']").find('li').removeClass('pic_selected').first().addClass('pic_selected')

		},

		prep_threejk_options: function (){

			var _parent = $('#hidden-threeJK-values');
			var _new_target = $('.triangel_sel:visible');
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

					_result = _result + '<input type="hidden" name="threejk[' + _form_name + ']" value="'+ _form_value +'" />';

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

			_result = _result + '<input type="hidden" name="threejk[999_123]" value="'+ image_result_zheng +'" />';
			_result = _result + '<input type="hidden" name="threejk[999_124]" value="'+ image_result_fan +'" />';
			//刺绣内容
			var cixiu_content = $('#threejk_input_cixiu').val();

			_result = _result + '<input type="hidden" name="threejk[cixiu_content]" value="'+ cixiu_content +'" />';
			_parent.html( _result );

		},
		// 推荐款衬衫图片载入前加loader
		rec_loader: function (){
			// 如果图片为载入好
			if ( !$('.recommend_pic img')[0].complete ){
				$('.recommend_pic img').one('load',function(){
					$('.loader-container').fadeOut(1000);
				});
			}
			// 如果图片已经载入好
			else {
				$('.loader-container').fadeOut(1000);
			}
		},
	};

}).call(this);