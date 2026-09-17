/*:
 * @target MZ
 * @plugindesc Toggle Enable/Disable touch movement on map.
 * @author Raven Sim
 * @command Set click-to-move value
 * @arg value
 * @type boolean
 * @desc Enable (true) or disable (false) click-to-move
 * @default true
 * @help nope
 */

(() => {
    const pluginName = "clickToMovePlugin";
    const _originalSetDestination = Game_Temp.prototype.setDestination;

    PluginManager.registerCommand(pluginName, "toggleClickToMove", args => {
        const enabled = args.enabled === "true";
        console.log(`[ClickToMovePlugin] Toggling click-to-move: ${enabled}`)
        setEnableVal(enable);
    });

    function setEnableVal(enabled) {
        if (enabled) {
            Game_Temp.prototype.setDestination = _originalSetDestination;
        }
        else {
            // Override - never set move destination.
            Game_Temp.prototype.setDestination = function() {};
        }
    }
})();