// Console.log wrapper for debug mode

/**
 * https://stackoverflow.com/questions/13815640/a-proper-wrapper-for-console-log-with-correct-line-number
 * @param {boolean} gState - Debug mode enabled?
 * @param klass - context variable (e.g. this, global)
 * @returns console.log debug wrapper to be assigned to a variable
 */
function Debugger(gState, klass) {
  
  this.debug = {}

  if (gState) {
    for (var m in console)
      if (typeof console[m] == 'function')
        this.debug[m] = console[m].bind(console, "[Debug]")
  } else {
    for (var m in console)
      if (typeof console[m] == 'function')
        this.debug[m] = function(){}
  }
  return this.debug
}

module.exports = { Debugger }