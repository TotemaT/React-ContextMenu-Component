import React from 'react';
import PropTypes from 'prop-types';

const ContextMenuItem = ({label, onClick, disabled}) => {
    if (label === 'separator') {
        return <div className="contextMenu--separator"/>;
    }
    return (
        <div className="contextMenu--option" onClick={onClick} disabled={disabled}>
            {label}
        </div>
    );
};

ContextMenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.boolean
}

ContextMenuItem.defaultProps = {
    onClick: () => {},
    disabled: false
}

export default ContextMenuItem;
