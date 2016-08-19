//=============================================================================
// PluginPattern.js                                                           
//=============================================================================

/*:
*
* @author PluginMaker
* @plugindesc A basic plugin for teaching purposes.
*
*
*
* @help
* There is no help information provided with this plugin. It's a plugin for
* teaching purposes.
*
*
*/

//=============================================================================
// Namespace Initialization                                                            
//=============================================================================

/*
* First we create a new namespace "MyNameSpace", inside of the global namespace.
* This gives a place to put all of our plugin related information, or extend
* this namespace in future plugins, and add even more plugins inside of it.
*
* Second we add this property called Plugins; this property gives us another
* namespace to hold Plugins specifically, but it's really just for organization
* purposes.
*/
var MyNameSpace = MyNameSpace || {};
MyNameSpace.Plugins = MyNameSpace.Plugins || {};

(function($){

//=============================================================================
// Plugin Initialization                                                             
//=============================================================================

  var parameters = PluginManager.parameters("PluginPatterns");

  /*
  * Here we add a new property to our MyNameSpace.Plugins object.
  * This property is a function -- at this point you could call it a method.
  * This  function will hold all of our plugin code and keep it from cluttering
  * the global namespace.
  */
  $.Plugins.MyFirstPlugin = function() {


//=============================================================================
// Public API                                                             
//=============================================================================

    /*The public API is basically the exports of our plugin; these can be found under
    * These can be found under our namespace, and can be used as script calls in the
    * editor. I like to put my script calls / methods under a name called 'Helpers',
    * or a manager name, but you can use any name you like.
    */
    $.Helpers = {
      sendMessage: function(text) {
        //Opens Window_Message with the specified text
        $gameMessage.add(text);
      },
    };

  };

  $.Plugins.MyFirstPlugin();

})(MyNameSpace);