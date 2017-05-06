import React from 'react';
import PropTypes from 'prop-types';

const ContextMenuItem = ({label, onClick, disabled, className}) => {
    className += ' contextMenu--option';
    if (disabled) {
        className += ' contextMenu--option__disabled';
    }
    return (
        <div className={className} onClick={onClick} disabled={disabled}>
            {label}
        </div>
    );
};

ContextMenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

ContextMenuItem.defaultProps = {
    onClick: () => { /* no-op */},
    disabled: false,
    className: ''
};

export default ContextMenuItem;
