/*
 * Visualization source
 */
define([
            'jquery',
            'underscore',
            'api/SplunkVisualizationBase',
            'api/SplunkVisualizationUtils',
            // Add required assets to this list
            'showdown'
        ],
        function(
            $,
            _,
            SplunkVisualizationBase,
            vizUtils,
            showdown
        ) {
  
    // Extend from SplunkVisualizationBase
    return SplunkVisualizationBase.extend({
  
        initialize: function() {
        SplunkVisualizationBase.prototype.initialize.apply(this, arguments);
	    $el = $(this.el);
	    $.get( window.location.origin + "/static/app/jg_markdown_app/README.md", function( data ) {
          	var converter = new showdown.Converter();
	        converter.setFlavor('github');
            var html = converter.makeHtml(data);
           	$el.empty();
	        $el.append(html);
	    });

            // Initialization logic goes here
        },

        // Optionally implement to format data returned from search. 
        // The returned object will be passed to updateView as 'data'
        formatData: function(data) {

            // Format data 

            return data;
        },
  
        // Implement updateView to render a visualization.
        //  'data' will be the data object returned from formatData or from the search
        //  'config' will be the configuration property object
        updateView: function(data, config) {
            console.log("ok");
            console.log(this.getPropertyNamespaceInfo().propertyNamespace);
            // Draw something here
        var file = config[this.getPropertyNamespaceInfo().propertyNamespace + 'file'];
        console.log(file);

        },

        // Search data params
        getInitialDataParams: function() {
            return ({
                outputMode: SplunkVisualizationBase.ROW_MAJOR_OUTPUT_MODE,
                count: 10000
            });
        },

        // Override to respond to re-sizing events
        reflow: function() {}
    });
});
