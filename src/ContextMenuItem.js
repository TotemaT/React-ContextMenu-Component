import React from 'react';
import PropTypes from 'prop-types';

const ContextMenuItem = ({separator, label, onClick, disabled}) => {
    if (separator) {
        return <div className="contextMenu--separator"/>;
    }
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
    separator: PropTypes.bool,
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

ContextMenuItem.defaultProps = {
    separator: false,
    label: '',
    onClick: () => {},
    disabled: false
}

export default ContextMenuItem;
