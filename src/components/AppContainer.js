import React from 'react';

export default class AppContainer extends React.Component {
state ={ DarkTheme: false}
setTheme =()=>{
this.setState(state =>({DarkTheme:!this.state.DarkTheme}))
}
    render() {
        const {DarkTheme} =this.state;
        const {children} = this.props;

        return (
            <div className={`app-container ${DarkTheme?'dark-mode':''}`}>
                {React.cloneElement(children, {setTheme:this.setTheme, DarkTheme})}
            </div>
        );
    }

}