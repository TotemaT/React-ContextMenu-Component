import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ContextMenuList from './ContextMenuList';
import ContextMenuItem from './ContextMenuItem';
import './style.css';

/**
 * This component add a contextmenu event listener, allowing to show a custom menu on right click.
 */
export default class ComponentWithContextMenu extends Component {
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
        document.addEventListener('contextmenu', this.handleGlobalContextMenu);
        document.addEventListener('click', this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener('contextmenu', this.handleGlobalContextMenu);
        document.removeEventListener('click', this.handleClick);
    }

    handleGlobalContextMenu(event) {
        const {isMenuVisible} = this.state;
        const wasOutside = !(event.target.id === this.props.id);

        if (wasOutside) {
            if (isMenuVisible) {
                this.setState({isMenuVisible: false});
            }
        } else {
            this.handleContextMenu(event);
        }
    }

    handleContextMenu(event) {
        event.preventDefault();
        this.setState({isMenuVisible: true});

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

    handleClick(event) {
        const {isMenuVisible} = this.state;
        const wasOutside = !(event.target.contains === this.contextMenuRoot);

        if (wasOutside && isMenuVisible) {
            this.setState({isMenuVisible: false});
        }
    }

    render() {
        let {options, id, onClick, children, className} = this.props;
        if (!options) {
            return <div>{children}</div>;
        }

        return (
            <div id={id} onClick={onClick} className={className}>
                {children}
                <div hidden={!this.state.isMenuVisible} ref={ref => {
                    this.contextMenuRoot = ref
                }} className="contextMenu">
                    <ContextMenuList options={options}/>
                </div>
            </div>
        );
    }
}

ComponentWithContextMenu.propTypes = {
    id: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
};

ComponentWithContextMenu.defaultProps = {
    onClick: () => {},
    className: ''
};
