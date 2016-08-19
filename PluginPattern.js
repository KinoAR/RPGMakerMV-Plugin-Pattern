//=============================================================================
// PluginPattern.js                                                           
//=============================================================================

//This is the plugin parameters; they allow you create parameters that users
//can set in the in game Plugin Manager.
//This is the basic variables in your plugin params.
//You can add another param by simply putting @param Param Name

/*:
*
* @author YourName
* @plugindesc Your Plugin Description
*
* @param Test Message
* @desc A test string to be outputted to the console on plugin startup.
* @default Test
* 
* @param Param Name
* @desc A new parameter
* @default New Param
* 
* @help
* Help Information For Your Plugin, change it as you see fit.
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
* purposes. Change MyNameSpace to whatever you want.
*/

//Change these namespaces to whatever you like for your own set of plugins.


var MyNameSpace = MyNameSpace || {};
MyNameSpace.Plugins = MyNameSpace.Plugins || {};

(function($){

//=============================================================================
// Plugin Initialization                                                             
//=============================================================================

  //We gain access to the parameters from the Plugin Parameters setup, and use
  //them to create new variables we can use in our plugin.
  var parameters = PluginManager.parameters("PluginPatterns");
  var testMessage = String(parameters['Test Message']); //Formatting this param to a string
  var param1 = Number(parameters['Param Name']); //Formatted this param to a number


  /*
  * Here we add a new property to our MyNameSpace.Plugins object.
  * This property is a function -- at this point you could call it a method.
  * This  function will hold all of our plugin code and keep it from cluttering
  * the global namespace.
  */
 
  $.Plugins.MyFirstPlugin = function() {

//=============================================================================
// Test Message                                                             
//=============================================================================
    //Checks if Plugin is working correctly
    console.log(testMessage);


//=============================================================================
// Regular Plugin Code                                                             
//=============================================================================

  //Place your code here for plugin creation


//=============================================================================
// Public API                                                             
//=============================================================================

    /*The public API is basically the exports of our plugin; these can be found under
    * These can be found under our namespace, and can be used as script calls in the
    * editor. I like to put my script calls / methods under a name called 'Helpers',
    * or a manager name, but you can use any name you like.
    *
    * These exports can be used in game in the script menu, or you can even use them
    * in the Dev Console (F8) to test the outcome.
    */
   $.Helpers = {
    exampleScriptCall: function() {
      console.log("Example Script Call");
    },
    exampleScriptCall2: function() {
      //Change these as you see fit and change their property names.
    }
   };

  };

  $.Plugins.MyFirstPlugin();

})(MyNameSpace);