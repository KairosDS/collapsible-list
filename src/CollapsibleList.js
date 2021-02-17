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
      item: { type: Array },
      /**
       * 
       * @property
       * @type {Object}
       */
      items: { type: Object },
      /**
       * Boolean that determines if one of the elements of the collapsible is open.
       * @property
       * @type {Boolean}
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
    this.item = [];
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
    this.itemParagrah = Object.values(this.item);
    console.log('object', this.listItem)
    this.result = this.itemParagrah[1] ? 1 : 0;
    this.action = this.itemParagrah[1] ? 0 : 1;
  }

  toggleList() {
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

  
  render() {
    return html`
        <div role="list" aria-label="listitem" class="collapsible-list ${this.noBorder ? "list__item list__item--no-border" : "list__item"} list" >
            ${ this.itemParagrah[this.action] && html `
            <div role="item" class="list__header">
                <h2 class="list__title">${this.itemParagrah[0]}</h2>
                <button
                  aria-label="${this.openList ? "Abrir para ver lista" : "Cerrar"}"
                  name="collipsable list button"
                  class=" "
                  @click="${this.toggleList}"
                >
                ${ this.openList ? html`
                <img class="imgOpen" src="${ this.iconOpen }" alt="Icon Open"/>`: html`
                <img class="imgClose" src="${ this.iconClose  }" alt="Icon Close"/>`}
                </button>
            </div> `}
            <div role="listitem" ?hidden="${this.openList}" >
              ${Object.values(this.itemParagrah[this.result]).map(
                (element, index) => 
                html`
                <div role="item" class="collapsible ${this.noBorder? 'list__item list__item--no-border': 'list__item'}">
                  <div class="list__header">
                    <h2 class="list__title">${element[0].name}</h2>
                      ${ element[0] && html`
                      <button
                        id="item-${index}"
                        aria-label="${!this.openItem ? "Abrir para ver item direcciones" : "Cerrar"}
                        name="collipsable unit button"
                        @click="${this.toggleItem}"
                        ?hidden="${element[0] ? false: true}">
                          ${ this.open !== index ? html`<img class="imgOpen" src="${ this.iconOpen }" alt="Icon Open"/>`: 
                            html`<img class="imgClose" src="${ this.iconClose  }" alt="Icon Close"/>`}
                      </button>`}
                      </div> 
                          ${ !element[0] ?
                            null : html `
                            <div  id="unit-${index}" ?hidden="${this.open !== index }" class="unit"  >
                                   ${element[0] && Object.values(element[0].address).map((e) => 
                                   html`
                                      <a
                                        class="list__body-link"
                                        aria-label="link"
                                        href=${e.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Dirección de oficina, abre Google Maps en otra ventana"
                                      >
                                        <div class="list__body-description">
                                          <img
                                            class="list__body-description__icon"
                                            src="${this.iconLocation}"
                                            alt="ubication icon"
                                            title="Icono de ubicación"
                                          />
                                          <div class="list__body-description__content">
                                            <p class="address__element">${e.street}</p>
                                            <p class="address__element">${e.cpCity}</p>
                                          </div>
                                        </div>
                                      </a>
                                    `
                                  )} 
                            </div>
                            `
                          } 
                        </div>        
                  `
                )}
             </div>
        </div>
      </div>
    `;
   }
    
  }

