import React,{ Component } from 'React';

class Litaotest extends Component{
    constructor(props){
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerClick(){
        this.props.refreshChess();
    }
    render(){
        let ResultDOM = '';
        if( this.props.winner === 'x' ){
            ResultDOM = <p>恭喜你获得胜利！</p>
        }
        else if( this.props.winner === 'o' ){
            ResultDOM = <p>抱歉，你输了。</p>
        }
        return (
            <div className="control-btns">
                {ResultDOM}
                <button onClick={this.handlerClick}>重新开始</button>
            </div>
        )
    }
}

export default Litaotest;