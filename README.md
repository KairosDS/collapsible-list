# Collapsible-list

Lit-Element web component collapsible-list. Is a web component, with multiple options:  list of elements (option 1), list of collapsible  items (option 2) and a combination of multiple list component of elements  with nested collapsible items (option 3).
One space for a link with text is provided in the item collapsibles (for each item). 

## Demo

### Option 1

```
<h2>Basic collapsible-list Demo</h2>
<h3>Demo</h3>
<collapsible-list>
    <ul>
        <li>
            <h1 id="title" >Element of list -1</h1>
        </li>
        <li>
            <h1 id="title" >Element of list -2</h1>
        </li>
    </ul>
</collapsible-list>

```
### Option 2

```
<h2>Basic collapsible-list Demo</h2>
<h3>Demo</h3>
<collapsible-list  >
    <ul>
        <li>
            <h1 id="title" >browser - 5</h1>
            <ul id="list" >
                <li>
                    <ul>
                        <div id="name">Chromium</div>
                        <div id="prefooterTitle">Where do you find us?</div>
                        <div id="address">
                            <a name="location" href="https://www.google.com/intl/us_es/chrome/">
                                <span id="street">Chrome browser - 1600 Amphitheatre Parkway</span>
                                <span id="cpCity">Mountain View, Santa Clara</span>
                            </a> 
                            <a name="location" href="https://www.microsoft.com/es-es/edge">
                                <span id="street">Edge browser- One Microsoft Way</span>
                                <span id="cpCity">Redmond, Washington</span>
                            </a> 
                        </div>
                    </ul>
                </li>
                <li>
                    <ul>
                        <div id="name">Firefox</div>
                        <div id="prefooterTitle">Where do you find us?</div>
                        <div id="address">
                            <a name="location" href="https://www.mozilla.org/es-ES/firefox/new/">
                                <span id="street">Firefox browser - 331 East Evelyn Avenue</span>
                                <span id="cpCity">Mountain View, CA</span>
                            </a> 
                        </div>
                    </ul>
                </li>
                <li>
                    <ul>
                    <div id="name">Brave</div>
                    <div id="prefooterTitle">Where do you find us?</div>
                    <div id="address">
                        <a name="location" href="https://brave.com/es/">
                            <span id="street">Brave browser - 512 Second St., Floor 2</span>
                            <span id="cpCity">San Francisco, CA 94107</span>
                        </a> 
                    </div>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</collapsible-list>

```
### Option 3

```
<h2>Basic collapsible-list Demo</h2>
<h3>Demo</h3>
<collapsible-list>
    <ul>
        <li>
            <h1 id="title" >Browser - 1</h1>
        </li>
        <li>
            <h1 id="title" >Browser - 2</h1>
            <ul id="list" >
                <li>
                    <ul>
                        <div id="name">Opera</div>
                        <div id="prefooterTitle">Where do you find us?</div>
                        <div id="address">
                            <a name="location" href="https://www.opera.com/es-419">
                                <span id="street">Opera browser - Vitaminveien 4</span>
                                <span id="cpCity">NO-0485 OSLO</span>
                            </a> 
                        </div>
                    </ul>
                </li>
                <li>
                    <ul>
                        <div id="name">Safari</div>
                        <div id="prefooterTitle">¿dónde estamos?</div>
                        <div id="address">
                            <a name="location" href="https://www.apple.com/safari/">
                                <span id="street">Safari browser - Apple Park</span>
                                <span id="cpCity"> Cupertino, California,</span>
                            </a> 
                        </div>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <h1 id="title" >Browser - 3</h1>
        </li>
        <li>
            <h1 id="title" >Browser - 4</h1>
        </li>
        <li>
            <h1 id="title" >browser - 5</h1>
            <ul id="list" >
                <li>
                    <ul>
                        <div id="name">Chromium</div>
                        <div id="prefooterTitle">Where do you find us?</div>
                        <div id="address">
                            <a name="location" href="https://www.google.com/intl/us_es/chrome/">
                                <span id="street">Chrome browser - 1600 Amphitheatre Parkway</span>
                                <span id="cpCity">Mountain View, Santa Clara</span>
                            </a> 
                            <a name="location" href="https://www.microsoft.com/es-es/edge">
                                <span id="street">Edge browser- One Microsoft Way</span>
                                <span id="cpCity">Redmond, Washington</span>
                            </a> 
                        </div>
                    </ul>
                </li>
                <li>
                    <ul>
                        <div id="name">Firefox</div>
                        <div id="prefooterTitle">Where do you find us?</div>
                        <div id="address">
                            <a name="location" href="https://www.mozilla.org/es-ES/firefox/new/">
                                <span id="street">Firefox browser - 331 East Evelyn Avenue</span>
                                <span id="cpCity">Mountain View, CA</span>
                            </a> 
                        </div>
                    </ul>
                </li>
                <li>
                    <ul>
                    <div id="name">Brave</div>
                    <div id="prefooterTitle">Where do you find us?</div>
                    <div id="address">
                        <a name="location" href="https://brave.com/es/">
                            <span id="street">Brave browser - 512 Second St., Floor 2</span>
                            <span id="cpCity">San Francisco, CA 94107</span>
                        </a> 
                    </div>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <h1 id="title" >Browser - 6</h1>
        </li>
    </ul>
</collapsible-list>

```

```html
<collapsible-list></collapsible-list>

```
## Properties


|      Name       |     Attribute     |                           Description                         |
|-----------------|-------------------|---------------------------------------------------------------|
|  iconLocation   |   iconLocation    | Property to include external localisation icon, such as image |
|    iconOpen     |     iconOpen      | Property to include opening icon items, as image              |
|   iconClose     |     iconClose     | Property to include closing icon items, as image              |
|    noBorder     |      noBorder     | Property to or not include borders on list or nested item     |

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ npm run start
```
## Running Test
```
$ npm run test
```
## Build
```
$ npm run build
```

## Author
**KairósDS Team**

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details