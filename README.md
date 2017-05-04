# React-ContextMenu-Component 
[![npm version](https://badge.fury.io/js/react-contextmenu-component.svg)](https://badge.fury.io/js/react-contextmenu-component) [![npm](https://img.shields.io/npm/l/react-contextmenu-component.svg)]()

React component that adds a context menu to any component

## Quick start
The only component needed to add a context menu is `<ContextMenu />`. To use it, simply wrap the component that needs to have a context menu with the ContextMenu component like so :

```
import ContextMenu from 'react-contextmenu-component';

<ContextMenu
  id="some-id"
  options={[]}
>
  <p>I'm inside a div with a context menu :)</p>
</ContextMenu>
```

### ContextMenu required props

The ContextMenu component **has** to have the following props :

#### id - string

**id** defines the identifier that allows to check if the right click has been made on the given ContextMenu component.

#### options - array

**options** defines all the options that have to be shown in the context menu. It is an array of arrays of option (see below). Each array in **options** will be rendered as a block followed by a separator.

##### option
An option is a single item rendered in the context menu. It contains the following properties :

| Property | Type    | Explanation                                           | Default |
| -------: | :-----: | :---------------------------------------------------- | :------ |
| label    | string  | Label of the option, as seen in the context menu.     | N/A     |
| onClick  | func    | Function to fire when the option is option is clicked | no op   |
| disabled | boolean | Whether the option is disabled                        | false   |


### ContextMenu optional props

The ContextMenu component **can** have the following props :

#### onClick

**onClick** defines the method to fire when the div is left clicked.

#### className

**className** defines the CSS class(es) to use on the rendered div, which allows to easily style your component.

### Style

The context menu is easy to style; all you have to do is override the following classes :

| class | Component aimed |
|-----: | :-------------- |
| .contextMenu | The whole context menu |
| .contextMenu--option[:hover &#124; :active &#124; __disabled] | One option of the context menu |
| .contextMenu--separator | A separator |

## Try it

Run the sample app with the following commands

```
  git clone https://github.com/TotemaT/React-ContextMenu-Component
  cd React-ContextMenu-Component-Example/sample
  npm start
```

## Screenshots

The div shown underneath is rendered using `<ContextMenu />` :
![Context Menu before click](./sample/screenshots/1-before.png "Context Menu before click")
The context menu is shown after a right click :
![Context Menu after right click](./sample/screenshots/2-shown.png "Context Menu after click")
The item is hovered :
![Context Menu item hovered](./sample/screenshots/3-selected.png "Context Menu item hovered")

# Todo

- [ ] Test ContextMenu
- [X] Test ContextMenuItem
- [ ] Test ContextMenuList
- [ ] Test ContextMenuSeparator (or not)
- [X] Publish on npm
- [X] Write a quick start guide
- [X] Add a sample
- [X] Add screenshots
