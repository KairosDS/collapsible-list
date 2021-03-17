
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import "../collapsible-list";

describe("Collapsible_list", () => {
  it("should have the basic template", async () => {
        const el = await fixture(
        html`
            <collapsible-list>
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
        `
        );
        const base = el.shadowRoot.querySelector('.collapsible-list');
        
        expect(base).not.to.be.null;
  });
  
  it('should have the basic template, only collapsible item', async () => {
        const el = await fixture(html` 
        <collapsible-list>
            <ul>
                <li>
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
                    </ul>
                </li>
            </ul>
        </collapsible-list> 
        `);

        const base = el.shadowRoot.querySelector('.collapsible-list');
            
        expect(base).not.to.be.null;
  })

    it("should have a template title list elements ", async () => {
        const el = await fixture(
            html`
            <collapsible-list>
                <ul>
                    <li>
                        <h1 id="title" >Element of list - 1</h1>
                    </li>
                    <li>
                        <h1 id="title" >Element of list - 2</h1>
                    </li>
                </ul>
            </collapsible-list>
            `
        );

        const base = el.shadowRoot.querySelector('.collapsible-list');
        
        expect(base).not.to.be.null;

    });

    it("should press the toogleList method, list is open and visible", async () => {
        const el = await fixture(
            html`
              <collapsible-list>
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
            `
          );
        const spy = sinon.spy(el, 'toggleList');
        const button = el.shadowRoot.querySelector('button[id=list-0]');
        button.click();
        
        expect(spy.called).to.be.false;
          });

        it("should press the toggleItem method,item of list  is open and visible", async () => {
        const el = await fixture(
            html`
              <collapsible-list>
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
            `
          );
        
        const spy = sinon.spy(el, 'toggleItem');
        const button = el.shadowRoot.querySelector('button[id=item-0]');
        const itemListOne = el.shadowRoot.querySelector('div[id=unit-0]');
        const itemListTwo = el.shadowRoot.querySelector('div[id=unit-1]');
        button.click();

        expect(itemListOne.hidden).to.be.true;
        expect(itemListTwo.hidden).to.be.true;
        expect(spy.called).to.be.false;
    
        });
          it('collapsible-list is works. test accessibility', async () => {
            const el = await fixture(html` 
            <collapsible-list>
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
            </collapsible-list> `);

            expect(el).to.be.accessible();
          });
});