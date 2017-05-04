import React, {Component} from 'react';
import './App.css';
import ContextMenu from 'react-contextmenu-component';

class App extends Component {
    getOptions() {
        return [
            [
                {
                    label: 'Configure',
                    onClick: () => console.log('Configure')
                }, {
                    label: 'Disabled',
                    onClick: () => console.log('Disabled'),
                    disabled: true
                }
            ],
            [
                {
                    label: 'Delete',
                    onClick: () => console.log('delete')
                }
            ]
        ];
    }
    render() {
        return (
            <div>
                <ContextMenu options={this.getOptions()} id="context-menu-container" className="context-menu-container">
                    <p>Right-click anywhere on me to show the context menu ;)</p>
                </ContextMenu>
            </div>
        );
    }
}

export default App;
