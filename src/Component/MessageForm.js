import React ,{Component} from 'react';
import './Messagstyle.css';




class Messageform extends Component{

    constructor(props){
        super(props);
        this.state = {
            message:{
                x: '',
                o:'',
                winnerMsg: '',
                loserMsg:'',
            }
            ,submitting:false,
            error:false,
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }
    // onHandleChange(event){
    //     const name = event.target.getAttribute('id');
    //     this.setState({
    //         message: {...this.state.message,[name]:event.target.value}
    //     });
    // }

    onHandleChange(event) {
        const id = event.target.getAttribute('id');
        this.setState({
          message: {...this.state.message, [id]:event.target.value},
          submitting:true,
         
        });
      }
    onSubmit(event) {
        const winnerMsg ="Winner";
        const loserMsg = "Loser";
        const {message} = this.state;
        
        event.preventDefault();
        this.setState({ submitting: true });
        if(this.props.winner == 'X'){
            this.setState({
                
                winnerMsg: 'X is winner',
                loserMsg:'O is loser'
            });
            fetch('http://localhost:3000/send-text?x=${message.x}&winnerMsg=${message.winnerMsg}&o=${message.o}&loserMsg=${message.loserMsg}')
            .catch(err =>console.error(err))
            
        }else{
            this.setState({
                winnerMsg: 'O is winner',
                loserMsg:'X is loser'
            });
            fetch('http://localhost:3000/send-text?o=${message.o}&winnerMsg=${message.winnerMsg}&x=${message.x}&loserMsg=${message.loserMsg}')
            .catch(err =>console.error(err))

        }
       
    
      }
    render(){
        
        return(
            <form onSubmit={this.onSubmit}>
        <div className = "phone">
          <label htmlFor="playerX">Player X number</label>
          <input
             type="tel"
             name="x"
             id="x"
             value={this.state.message.x}
            onChange={this.onHandleChange}
          />
        </div>

        <div className = "phone">
        <label htmlFor="playerO">Player O number</label>
           <input
             type="tel"
             name="o"
             id="o"
             value={this.state.message.o}
            onChange={this.onHandleChange}
          />
        </div>
        <button disabled={!this.state.submitting}>
          Send  Message
        </button>
      </form>
        );
    }
}

export default Messageform;


