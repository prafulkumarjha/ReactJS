import React from 'react';
import Classes from './Layout.css';




const Layout = (props) => {

    let Fragment = React.Fragment;
    
    return (
        <Fragment>
        <div>Toolbar, Sidedrawer, Backdrop </div>
        <main className={Classes.Content}>{props.children} </main>
        </Fragment>
        )
    

}

export default Layout;