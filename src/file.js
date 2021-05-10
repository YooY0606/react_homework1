import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import $ from  'jquery'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
}));

const File=()=>{
    const classes = useStyles();
    class UserGithub extends React.Component {     
        constructor(props) {         
            super(props);         
            this.state = {           
                username: '',           
                githubtUrl: '',           
                avatarUrl: '',
                login: '',
                id: '',
                location: '',
                follower: '',
                following: '',         
            }     
        }     
        componentDidMount() {         
            $.get(this.props.source, (result) => {             
                console.log(result);             
                const data = result;             
                if (data) {               
                    this.setState({                     
                        username: data.name,                     
                        githubtUrl: data.html_url,                     
                        avatarUrl: data.avatar_url ,
                        login: data.login,
                        id: data.id,
                        location: data.location,
                        follower: data.follower,
                        following: data.following
                    });             
                }         
            });     
        }     
        render() {         
            return (           
            <div className={classes.paper}>             
                <h3>Name:{this.state.username}</h3>
                <h4>Login:{this.state.login}</h4>
                <h4>ID:{this.state.id}</h4>
                <h4>Location:{this.state.location}</h4>
                <h4>Follower:{this.state.follower}</h4>
                <h4>Following:{this.state.following}</h4>             
                <img src={this.state.avatarUrl} />
                <a href={this.state.githubtUrl}>Github Link</a>    
                </div>         
                );     
            } 
    } 
    ReactDOM.render(   
    <UserGithub source="https://api.github.com/users/YooY0606" />,   
    document.getElementById('root') 
    );
    var output=[];
    output.push(<UserGithub/>)
    return output
}
    export default File;