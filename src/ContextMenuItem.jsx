import React from 'react';
import PropTypes from 'prop-types';

const ContextMenuItem = ({label, onClick, disabled}) => {
    let className = 'contextMenu--option';
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
    label: PropTypes.string.required,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

ContextMenuItem.defaultProps = {
    label: '',
    onClick: () => { /* no-op */},
    disabled: false
}

export default ContextMenuItem;
