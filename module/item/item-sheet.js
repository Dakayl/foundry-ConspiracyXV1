/* global ItemSheet, mergeObject */

/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
 export class ConspiracyItemSheet extends ItemSheet {
    /** @override */
    static get defaultOptions () {
      return mergeObject(super.defaultOptions, {
        classes: ['cxv1', 'sheet', 'item'],
        width: 520,
        height: 480,
        tabs: [{
          navSelector: '.sheet-tabs',
          contentSelector: '.sheet-body',
          initial: 'description'
        }]
      })
    }
  
    /** @override */
    get template () {
      const path = 'systems/cxv1/templates/item'
      // Return a single sheet for all item types.
      // return `${path}/item-sheet.html`;
  
      // Alternatively, you could use the following return statement to do a
      // unique item sheet by type, like `weapon-sheet.html`.
      return `${path}/${this.item.data.type}.html`
    }
  
    /* -------------------------------------------- */
  
    /** @override */
    getData () {
      const data = super.getData()
      return data
    }
}
  