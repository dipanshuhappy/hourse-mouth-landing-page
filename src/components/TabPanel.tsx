import React from 'react';
interface TabPanelInterface{
    value:number,
    index:number,
    children?: React.ReactNode;
}
function TabPanel({children,value,index}:TabPanelInterface) {
    return (
        <div>
            {value===index && (
                        children
            )
            }
        </div>
    );
}

export default TabPanel;