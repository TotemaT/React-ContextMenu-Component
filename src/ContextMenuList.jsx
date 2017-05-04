import React from 'react';
import ContextMenuItem from './ContextMenuItem';
import ContextMenuSeparator from './ContextMenuSeparator';

const ContextMenuList = ({options}) => (
    <div>
        {options.map((optionArray, arrayIdx) => {
            let separator = <span/>;
            if (arrayIdx < options.length - 1) {
                separator = <ContextMenuSeparator/>;
            }
            return (
                <div key={`option-set-${arrayIdx}`}>
                    {optionArray.map((option, optionIdx) => (<ContextMenuItem key={`option-item-${arrayIdx}-${optionIdx}`} {...option}/>))}
                    {separator}
                </div>
            );
        })}
    </div>
);

export default ContextMenuList;
