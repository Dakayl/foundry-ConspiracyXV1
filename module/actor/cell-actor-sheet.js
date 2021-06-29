/* global ActorSheet */

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */

 export class CellActorSheet extends ActorSheet {
    static get defaultOptions () {
        return mergeObject(super.defaultOptions, {
          classes: ['cxv1', 'sheet', 'actor', 'cell'],
          template: 'systems/cxv1/templates/actor/cell-sheet.html',
          width: 800,
          height: 700,
          tabs: [{
            navSelector: '.sheet-tabs',
            contentSelector: '.sheet-body',
            initial: 'bases'
          }]
        })
    }
 }