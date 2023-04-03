import React from 'react';
import { GridLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex h-screen items-center justify-center space-x-2">
            <div >
                <GridLoader
                    color={"#03cafc"}
                    size={15}
                />
            </div>
        </div>
    );
};

export default Loading;