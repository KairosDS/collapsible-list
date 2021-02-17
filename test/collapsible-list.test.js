
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { expect, fixture, html } from '@open-wc/testing';
import "../collapsible-list";

describe("Collapsible_list", () => {
  it("should have the basic template", async () => {
    const el = await fixture(
      html`
        <collapsible-list></collapsible-list>
      `
    );
    const base = el.shadowRoot.querySelector('.collapsible-list');
    console.log('base', base);

    expect(base).not.to.be.null;
    expect(el).dom.to.equalSnapshot();
  });
});