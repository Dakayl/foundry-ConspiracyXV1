/* global ActorSheet */

/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */

 export class AgentActorSheet extends ActorSheet {
    static get defaultOptions () {
        return mergeObject(super.defaultOptions, {
          classes: ['cxv1', 'sheet', 'actor', 'agent'],
          template: 'systems/cxv1/templates/actor/agent-sheet.html',
          width: 800,
          height: 700,
          tabs: [{
            navSelector: '.sheet-tabs',
            contentSelector: '.sheet-body',
            initial: 'informations'
          }]
        })
    }


  /** @override */
  getData () {
    const data = super.getData()
    data.dtypes = ['String', 'Number', 'Boolean']

    // Prepare items.
    if (this.actor.data.type === 'agent') {
      this._prepareItems(data)
    }

    return data
  }

  _prepareItems (sheetData) {
    const actorData = sheetData.actor
    let organisation = null
    const skills = []
    const trainings = []
    const backgrounds = []
    const medicals = []
    const psychologicals  = []
    const talents = []
    const maneuvers = []
    for (const i of sheetData.items) {
      switch(i.type) {
        case 'organisation': 
          if(organisation !== null
            && organisation._id !== i._id) {
              this.actor.deleteEmbeddedDocuments("Item", [organisation._id], {});
          }         
          organisation = i; break;
        case 'skill': 
          skills.push(i); break;
        case 'trait':
          switch(i.data.subtype) {
            case 'training':
              trainings.push(i); break;
            case 'background':
              backgrounds.push(i); break;
            case 'medical':
              medicals.push(i); break;
            case 'psychological':
              psychologicals.push(i); break;
            case 'talent':
              talents.push(i); break;
          }
          break;
        case 'maneuver':
          maneuvers.push(i); break;
      }
      
    }
    actorData.skills = skills
    actorData.trainings = trainings
    actorData.backgrounds = backgrounds
    actorData.medicals = medicals
    actorData.psychologicals = medicals
    actorData.talents = talents
    actorData.maneuvers = maneuvers
    actorData.organisation = organisation
  }
}