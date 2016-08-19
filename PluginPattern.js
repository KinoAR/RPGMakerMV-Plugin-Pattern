//=============================================================================
// PluginPattern.js                                                           
//=============================================================================

//This is the plugin parameters; they allow you create parameters that users
//can set in the in game Plugin Manager.

/*:
*
* @author PluginMaker
* @plugindesc A basic plugin for teaching purposes.
*
* @param Test Message
* @desc A test string to be outputted to the console on plugin startup.
* @default Test
* 
* @param Title Text
* @desc Title text for our window scene.
* @default My First Scene
* 
* @help
* There is no help information provided with this plugin. It's a plugin for
* teaching purposes.
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

  //We gain access to the parameters from the Plugin Parameters setup, and use
  //them to create new variables we can use in our plugin.
  var parameters = PluginManager.parameters("PluginPatterns");
  var testMessage = String(parameters['Test Message']);
  var titleText = String(parameters['Title Text']);


  /*
  * Here we add a new property to our MyNameSpace.Plugins object.
  * This property is a function -- at this point you could call it a method.
  * This  function will hold all of our plugin code and keep it from cluttering
  * the global namespace.
  */
 
  $.Plugins.MyFirstPlugin = function() {

    //This message will be ran once the plugin starts up, and all the code in
    //this function is executed.
    console.log(testMessage);

//=============================================================================
// Scene_FirstScene                                                             
//=============================================================================
    
    //We create a new scene class for use in game.
    function Scene_FirstScene() {
      this.initialize.apply(this, arguments);
    }

    Scene_FirstScene.prototype = Object.create(Scene_Base.prototype);
    Scene_FirstScene.prototype.constructor = Scene_FirstScene;

    //Create method from Scene_Base
    //We made modifications to this method, so that we can create a title window
    //on our new scene.
    Scene_FirstScene.prototype.create = function() {
      this.createWindowLayer();
      this.createTitleWindow();
    };

    Scene_FirstScene.prototype.createTitleWindow = function() {
      this._firstWindowTitle = new Window_FirstSceneTitle(0, 0, Graphics.width, 200);
      this.addChild(this._firstWindowTitle);
    };

//=============================================================================
// Window_FirstSceneTitle                                                             
//=============================================================================
    
    //We create a new window class for use in game.
    function Window_FirstSceneTitle() {
      this.initialize.apply(this, arguments);
    }

    //We inherit the methods and properties from the Window_Base class for use
    //in our new window
    Window_FirstSceneTitle.prototype = Object.create(Window_Base.prototype);
    Window_FirstSceneTitle.prototype.constructor = Window_FirstSceneTitle;

    Window_FirstSceneTitle.prototype.initialize = function(x, y, width, height) {
      Window_Base.prototype.initialize.call(this, x, y, width, height);
    };

    //We add our own methods and functions to our window's update.
    //We call the original update code from Window_Base.
    Window_FirstSceneTitle.prototype.update = function() {
      Window_Base.prototype.update.call(this);
      this.drawTitle();
    };

    //A new method acting as a wrapper, for draw text, so that we
    //can draw our title text to our new scene's window.
    Window_FirstSceneTitle.prottoype.drawTitle = function() {
      this.drawText(titleText, 0, 0, this.width);
    };

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
      sendMessage: function(text) {
        //Opens Window_Message with the specified text
        $gameMessage.add(text);
      },
    };

    //Added new method to SceneManager, so we can go to our new scene easily.
    //This can be consider another wrapper method.
    SceneManager.gotoFirstScene = function() {
      SceneManager.push(Scene_FirstScene);
    };
  };

  $.Plugins.MyFirstPlugin();

})(MyNameSpace);