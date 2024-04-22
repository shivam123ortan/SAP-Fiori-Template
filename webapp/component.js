sap.ui.define([

    // Libraries which are used are defined
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",

], function(UIComponent) {
    'use strict';
    
    return UIComponent.extend("sap.ui.demo.testingPackage.Component", {

        // Metadata accessed from manifest.json
        metadata : {
            manifest: "json"
        },

        // Initial function
        init : function () {

            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            

        },

        // Used to add functionality on Exit
        exit : function () {
            
        }
    });
});