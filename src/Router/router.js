import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Index from '../Templates/Index';
import Detailpage from '../Templates/Pages/Detailpage';


const Routing = () => {
    return(<>
        <BrowserRouter>
        <Route path="/" exact component={Index}></Route>
        <Route path="/detailpage/:id" component={Detailpage}></Route>
        </BrowserRouter>
        </>);
}
export default Routing;
