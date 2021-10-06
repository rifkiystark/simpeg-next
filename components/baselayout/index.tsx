import Head from '../head/index';
import Header from '../header/index';
import Navbar from '../navbar/navbar';

const BaseLayout = (props : any) => {

    return (
   
            <body className="antialiased">
                <div className="wrapper">
                    <Header />
                    <Navbar />
                    {props.children}
                </div>
            </body>
    )
}

export default BaseLayout