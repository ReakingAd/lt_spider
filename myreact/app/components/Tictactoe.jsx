import React,{ Component } from 'react';
import Grid from './Grid.jsx';
import MyUtils from './MyUtils.jsx';
// import Litaotest from './Litaotest.jsx';
import Chessbtns from './Chessbtns.jsx';

class Tictactoe extends Component{
    constructor(props){
        super(props);
        this.handlePlayerStep = this.handlePlayerStep.bind(this);
        this.botAction     = this.botAction.bind(this);
        this.judgeResult   = this.judgeResult.bind(this);
        this.restartChess = this.restartChess.bind(this);
        this.state = {
            gridStatus:['blank','blank','blank','blank','blank','blank','blank','blank','blank'],
            winner:''
        }
    }
    restartChess(){
        this.setState({
            gridStatus:['blank','blank','blank','blank','blank','blank','blank','blank','blank'],
            winner:''
        })
    }
    handlePlayerStep(clickedKey){
        let _num = MyUtils.calcNum(clickedKey);

        this.state.gridStatus[ _num - 1 ] = 'x'
        this.setState({
            gridStatus:this.state.gridStatus
        })
        this.judgeResult();
        this.botAction();
        this.judgeResult();
    }
    botAction(){
        for( let item of this.state.gridStatus ){
            if( item === 'blank' ){
                let index = this.state.gridStatus.indexOf( item );
                this.state.gridStatus[ index ] = 'o';
                break;
            }
        }
    }
    /**
     * @desc 判断胜负结果。
     *          判断依据一（直线）：将x和o的棋子所在横纵坐标分别放入不同数组，当某个值在数组中出现3次时，表名连成了横线或竖线。则当前棋子方获胜
     *          判断依据二（斜线）：
     */
    judgeResult(){
        let [ xCoord,oCoord ] = [ [],[] ];
        let [ xNum,oNum ] = [ [],[] ];

        this.state.gridStatus.forEach( (item,index) => {
            if( item === 'x' ){
                xCoord.push( MyUtils.calcCoord(index + 1) );
                xNum.push( index + 1 );
            }
            if( item === 'o' ){
                oCoord.push( MyUtils.calcCoord(index + 1) );
                oNum.push( index + 1 );
            }
        })
        // 依据一
        let [ xAixsOfX,yAixsOfX,xAixsOfO,yAixsOfO ] = [ [],[],[],[] ];

        xCoord.forEach( (item,index) => {
            xAixsOfX.push( item[ 0 ] );
            yAixsOfX.push( item[ 1 ] );
        })
        oCoord.forEach( (item,index) => {
            xAixsOfO.push( item[ 0 ] );
            yAixsOfO.push( item[ 1 ] );
        })
        if( MyUtils.ltArrCheck(xAixsOfX,1) >= 3 || MyUtils.ltArrCheck(xAixsOfX,2) >= 3 || MyUtils.ltArrCheck(xAixsOfX,3) >= 3 ||
            MyUtils.ltArrCheck(yAixsOfX,1) >= 3 || MyUtils.ltArrCheck(yAixsOfX,2) >= 3 || MyUtils.ltArrCheck(yAixsOfX,3) >= 3 ){
                this.setState({
                    winner:'x'
                })
                return;
            }
        if( MyUtils.ltArrCheck(xAixsOfO,1) >= 3 || MyUtils.ltArrCheck(xAixsOfO,2) >= 3 || MyUtils.ltArrCheck(xAixsOfO,3) >= 3 ||
            MyUtils.ltArrCheck(yAixsOfO,1) >= 3 || MyUtils.ltArrCheck(yAixsOfO,2) >= 3 || MyUtils.ltArrCheck(yAixsOfO,3) >= 3 ){
                this.setState({
                    winner:'o'
                });
                return;
            }
        // 依据二
        if( (xNum.indexOf(1) !== -1 && xNum.indexOf(5) !== -1 && xNum.indexOf(9) !== -1) 
            || xNum.indexOf(3) !== -1 && xNum.indexOf(5) !== -1 && xNum.indexOf(7) !== -1 ){
            this.setState({
                winner:'x'
            });
            return;
        }
        if( (oNum.indexOf(1) !== -1 && oNum.indexOf(5) !== -1 && oNum.indexOf(9) !== -1) 
            || oNum.indexOf(3) !== -1 && oNum.indexOf(5) !== -1 && oNum.indexOf(7) !== -1 ){
            this.setState({
                winner:'o'
            });
            return;
        }

        if( this.state.gridStatus.indexOf('blank') === -1 ){
            // 平局
            this.setState({
                winner:'draw'
            })
        }
    }
    
    render(){
        let grids = this.state.gridStatus.map( (item,index) => {
            return <Grid key={index.toString()} gridNum={index.toString()} handlePlayerStep={this.handlePlayerStep} gridStatus={item}
                    coordArr={MyUtils.calcCoord(index + 1)} winner={this.state.winner} />
        });

        return (
            <div className="grid-container">
                {grids}
                <Chessbtns winner={this.state.winner} restartChess={this.restartChess}/>
            </div>
        )
    }
}

export default Tictactoe;