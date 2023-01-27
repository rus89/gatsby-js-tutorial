import * as React from 'react';
import Greetings from './greetings';

const SayHallo = () => {
    return(
        <div>
            <Greetings name="Milan"/>
            <Greetings name="Anica"/>
            <Greetings name="Ivi"/>
            <Greetings name="Bea"/>
        </div>
    )
}

export default SayHallo