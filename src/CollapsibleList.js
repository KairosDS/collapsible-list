import { LitElement, html } from "lit-element";
import { collapsibleItemStyles } from "./Collapsible-List-styles";
import { HTMLChildrenMixin } from "./lib/HTMLChildrenMixin";



export class CollapsibleList extends HTMLChildrenMixin(LitElement) {
  static get is() {
    return "collapsible-list";
  }

  static get styles() {
    return [collapsibleItemStyles];
  }

  static get properties() {
    return {
      /**
       * 
       * @property
       * @type {Array}
       */
      openList: { type: Boolean, reflect: true },
      /**
       * Boolean that determines if one of the elements of the collapsible is open.
       * @property
       * @type {Boolean}
       */
      openItem: { type: Boolean, reflect: true },
      /**
       * When the element is close is true and it add border-bottom to component container.
       * @property
       * @type {Boolean}
       */
      noBorder: { type: Boolean },
      /**
       * icon representation of localisation
       * @property
       * @type {String}
       */
      iconLocation: {
        type: String,
      },
      /**
       * icon opening 
       * @property
       * @type {String}
       */
      iconOpen: {
        type: String,
      },
      /**
       * icon closure 
       * @property
       * @type {String}
       */
      iconClose: {
        type: String,
      },
    };
  }
  

  constructor() {
    super()
    this.open = 0;
    this.openingList = 0;
    this.openList= false;
    this.openItem = false;
    this.noBorder = false;
    this.iconLocation = '../assets/images/location-maps-icon.svg';
    this.iconOpen = '../assets/images/ico_plus_w.svg';
    this.iconClose = '../assets/images/ico_close_w.svg';


  }
  connectedCallback() {
    super.connectedCallback();
    this.item = this._HTMLChildren();
    this.list = Object.values(this.item[0]);
  }


  toggleList(e) {
    const numberId = e.currentTarget.id.split('list-')[1];
    const parentList = e.currentTarget.parentNode.parentNode;
    const list = parentList.querySelector(`div[id=unitList-${numberId}]`);
    if(e.currentTarget){
      if(list.hidden) {
        list.removeAttribute('hidden');
        this.openingList = +numberId;
      } else {
        list.setAttribute('hidden', false);
        this.openingList = numberId;
      }
        const othersShow = Array.from(list.querySelectorAll('.unitList'))
        .filter((ev) => ev.id.split('unitList-')[1] !== numberId);
        othersShow.forEach((item) => { item.setAttribute('hidden', false)});
    }
    this.openList = !this.openList;
  }

  toggleItem(e) {
    const id = e.currentTarget.id.split('item-')[1];
    const parent = e.currentTarget.parentNode.parentNode.parentNode.parentNode;
    const target = parent.querySelector(`div.unit[id=unit-${id}]`);
    if (e.currentTarget) {
      if(target.hidden) {
        target.removeAttribute('hidden');
        this.open = +id;
      } else {
        target.setAttribute('hidden', false);
        this.open = id;
      }
        const othersShow = Array.from(parent.querySelectorAll('.unit'))
        .filter((ev) => ev.id.split('unit-')[1] !== id);
        othersShow.forEach((item) => { item.setAttribute('hidden', false)});
      }
    this.openItem = !this.openItem;
  }

  renderTitle(event) {
    return html`
        <div class="list__header">
            <h1 class="list__title">${event.title}</h1>
        </div>
          `  
  }

  renderItemColapsibleList(event){
    return html`
    ${Object.values(event.list).map((item, index) => html`
        <div   class="collapsible ${this.noBorder? 'list__item list__item--no-border': 'list__item'}">
            <div class="list__header">
                <h2 class="list__title">${item[0].name}</h2>
                   ${ item[0] && html`
                  <button id="item-${index}" aria-label="${!this.openItem ? "Open to view item addresses" : "Close"}
                      name="collipsable unit button"  @click="${this.toggleItem}" ?hidden="${item[0] ? false: true}">
                  ${ this.open !== index ? html`<img class="imgOpen" src="${ this.iconOpen }" alt="Icon Open"/>`: 
                    html`<img class="imgClose" src="${ this.iconClose  }" alt="Icon Close"/>`}
                  </button>`}
            </div> 
              ${ !item[0] ? null : html `
                <div  id="unit-${index}" ?hidden="${this.open !== index }" class="unit"  >
                       ${item[0] && Object.values(item[0].address).map((e) => {
                         return html`
                          <a role="link" class="list__body-link" aria-label="link" href=${e.href}
                            target="_blank" rel="noopener noreferrer" aria-label="Address, open links in a new window">
                            <div class="list__body-description">
                              <img class="list__body-description__icon" src="${this.iconLocation}" alt="ubication icon"/>
                              <div>
                                <p >${e.street}</p>
                                <p >${e.cpCity}</p>
                              </div>
                            </div>
                          </a>`;
                       } )}
                </div>`}
        </div>`)
      }`

  }

  renderColapsibleList(event, i) {
    return html `
            <div class="list__header">
                <h1 class="list__title">${event.title}</h1>
                <button id="list-${i}" aria-label="${this.openList ? "Open to view list" : "Close"}"
                  name="collipsable list button"  @click="${this.toggleList}">
                ${ this.openingList !== i ? html`
                      <img class="imgOpen" src="${ this.iconOpen }" alt="Icon Open"/>`: html`
                      <img class="imgClose" src="${ this.iconClose  }" alt="Icon Close"/>`}
                </button>
            </div>
            <div id="unitList-${i}"  class="unitList" ?hidden="${this.openingList !== i }"  >
              ${this.renderItemColapsibleList(event)}
            </div>`  
  }


  render() {
    return html`
        <ul  role="list" class=" collapsible-list ${this.noBorder ? "list__item list__item--no-border" : "list__item"} list" >
            <li role= "listitem" >
                  ${  Object.values(this.list).map((e, i) =>{
                     if (Object.keys(e).length === 1 && e.title ) { 
                          return this.renderTitle(e);
                          } else if ( Object.keys(e).length === 1 && e.list ) {
                              return this.renderItemColapsibleList(e);
                          } else {
                              return this.renderColapsibleList(e, i)
                          }
                      }) 
                    }
            </li>
        </ul>`;
   }
    
  };