import { ConspiracyActor } from './actor/actor.js'
import { ConspiracyItem } from './item/item.js'

import { AgentActorSheet } from './actor/agent-actor-sheet.js'
import { CellActorSheet } from './actor/cell-actor-sheet.js'
import { ConspiracyItemSheet } from './item/item-sheet.js'


import { preloadHandlebarsTemplates } from './templates.js'

Hooks.once('init', async function () {
    
    console.log('Connecting to AEGIS servers, please wait...')

    game.cxv1 = {
        ConspiracyActor,
        ConspiracyItem
    }

    game.settings.register('cxv1', 'worldVersion', {
        name: 'world Version',
        hint: 'Automatically upgrades data when the system.json is upgraded.',
        scope: 'world',
        config: true,
        default: '1',
        type: String
      })

    // Define custom Entity classes
    CONFIG.Actor.documentClass = ConspiracyActor
    CONFIG.Item.documentClass = ConspiracyItem

    // Register sheet application classes
    Actors.unregisterSheet('core', ActorSheet)

    Actors.registerSheet('cxv1', AgentActorSheet, {
        label: 'Agent Sheet',
        types: ['agent'],
        makeDefault: true
    })
    Actors.registerSheet('cxv1', CellActorSheet, {
        label: 'Cell Sheet',
        types: ['cell'],
        makeDefault: true
    })

    Items.unregisterSheet('core', ItemSheet)
    Items.registerSheet('vtm5e', ConspiracyItemSheet, {
      label: 'Item Sheet',
      makeDefault: true
    })
  

    preloadHandlebarsTemplates()

    console.log('Connection accepted. Welcome to AEGIS, agents')
});