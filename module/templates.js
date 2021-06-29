/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function () {
    console.log('AEGIS Access Granted');
    // Define template paths to load
    const templatePaths = [
      // Actor Sheet Partials
      'systems/cxv1/templates/actor/lines/skill-line.html',
      'systems/cxv1/templates/actor/lines/trait-line.html', 
      'systems/cxv1/templates/actor/parts/profile-image.html',
      'systems/cxv1/templates/actor/parts/attributes.html', 
      'systems/cxv1/templates/actor/parts/informations.html', 
      'systems/cxv1/templates/actor/parts/skills.html',
      'systems/cxv1/templates/actor/parts/dossier.html',
      'systems/cxv1/templates/actor/parts/bases.html',
      'systems/cxv1/templates/actor/parts/cell-equipement.html',
      'systems/cxv1/templates/actor/parts/notes.html',
      'systems/cxv1/templates/actor/parts/agent-equipement.html'
      // Item Sheet Partials

    ]
    /* Load the template parts
       That function is part of foundry, not founding it here is normal
    */
    return loadTemplates(templatePaths) // eslint-disable-line no-undef
  }
  
