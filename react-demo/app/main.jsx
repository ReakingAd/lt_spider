import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

class Joke extends Component{
    render(){
        return (
            <div>
                <p>“北京房产增值效果好吗？”“挺好的。有一套房子售价800万。中介帮着买家砍价砍了16小时，最后830万成交”</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Joke />,
    document.getElementById('foo')
);


