import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContextMenuList from './ContextMenuList';
import './style.css';

/**
 * This component adds a contextmenu event listener, allowing to show a custom menu on right click.
 */
export default class ContextMenu extends Component {
    constructor() {
        super();
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleGlobalContextMenu = this.handleGlobalContextMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isMenuVisible: false
        }
    }

    componentDidMount() {
        if (!this.props.hideMenu) {
            document.addEventListener('contextmenu', this.handleGlobalContextMenu);
            document.addEventListener('click', this.handleClick);
        }
    }

    componentWillUnmount() {
        if (!this.props.hideMenu) {
            document.removeEventListener('contextmenu', this.handleGlobalContextMenu);
            document.removeEventListener('click', this.handleClick);
        }
    }

    handleGlobalContextMenu(event) {
        if (this.props.hideMenu) {
            return;
        }

        const { isMenuVisible } = this.state;
        const wasOutside = !(this.root.contains(event.target));

        if (wasOutside) {
            if (isMenuVisible) {
                this.setState({ isMenuVisible: false });
            }
        } else {
            this.handleContextMenu(event);
        }
    }

    handleContextMenu(event) {
        if (this.props.hideMenu) {
            return;
        }

        event.preventDefault();
        this.setState({ isMenuVisible: true });

        const clickX = event.clientX;
        const clickY = event.clientY;
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;
        const rootW = this.contextMenuRoot.offsetWidth;
        const rootH = this.contextMenuRoot.offsetHeight;

        const right = (screenW - clickX) > rootW;
        const left = !right;
        const top = (screenH - clickY) > rootH;
        const bottom = !top;

        if (right) {
            this.contextMenuRoot.style.left = `${clickX + 5}px`;
        }

        if (left) {
            this.contextMenuRoot.style.left = `${clickX - rootW - 5}px`;
        }

        if (top) {
            this.contextMenuRoot.style.top = `${clickY + 5}px`;
        }

        if (bottom) {
            this.contextMenuRoot.style.top = `${clickY - rootH - 5}px`;
        }
    }

    handleClick() {
        if (this.props.hideMenu) {
            return;
        }

        if (this.state.isMenuVisible) {
            this.setState({ isMenuVisible: false });
        }
    }

    render() {
        let { children, className, hideMenu, id, onClick, options } = this.props;
        if (hideMenu) {
            return (
                <div id={id} className={className} onClick={onClick}>
                    {children}
                </div>
            );
        }

        return (
            <div id={id} onClick={onClick} className={className} ref={ref => this.root = ref}>
                {children}
                <div hidden={!this.state.isMenuVisible} ref={ref => this.contextMenuRoot = ref} className="contextMenu">
                    <ContextMenuList options={options} />
                </div>
            </div>
        );
    }
}

ContextMenu.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hideMenu: PropTypes.bool,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    options: PropTypes.array.isRequired
};

ContextMenu.defaultProps = {
    children: null,
    className: '',
    hideMenu: false,
    onClick: () => { /* no-op */ }
};
