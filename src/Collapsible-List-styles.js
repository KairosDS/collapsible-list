import { css } from "lit-element";

export const collapsibleItemStyles = css`

:host {
  display: block;
}
.collapsible-list {
  display: block;
}

button {
  outline: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin: 8px;
  
}

ul {
  list-style: none;
}

ul li {
  text-decoration: none;
  color: #000;

}

a {
  text-decoration: none;
  color: var(--black-color, #FFFFFF) 
}
a:visited {
  color: var(--black-color, #FFFFFF))
}

ul li {
  margin-right: 10px;
}

.list {
  padding: 0;
  list-style: none;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  margin: 0;
}

.list__item {
  border-top: 1px solid #d3d3d3;
}

.list__item--no-border {
  border-top: 0;
}

.list__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  heigt: 75px;
}

.list__title {
  padding-left: 1px;
  text-transform: uppercase;
  font-size: 24px;
  color: var(--white-color);
}

.imgOpen {
  border: transparent;
  width: 30px;
  height: 30px;
  margin: -11px;
  background-color: var(--background-color-plus, transparent);
  background-position: 3px center;
  transition: background 1s ease-in-out;
}

.imgClose {
  border: transparent;
  width: 30px;
  height: 30px;
  margin: -11px;
  background-color: var(--background-color-close, transparent);
  background-position: 3px center;
  transition: background 0.5s ease-in-out;
}

.list__body-description{
  display: flex;
  flex-direction: row;
  font-size: var(--font-size-m);
}

.list__body-description__icon{
  height: 20px;
  margin: 14px 9px 18px 0;
}

.unit {
  width: 100%;
}

.unitList {
  width: 100%;
}
`;
