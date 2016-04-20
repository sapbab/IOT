
sap.ui.core.mvc.Controller.extend("ZCRM_FSM.view.Master", {
	
	onInit: function() {
		var view = this.getView();

		sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) {
			if (oEvent.getParameter("name") === "Caleres") { 
				
				var oList = view.byId("list"),
					aItems = oList.getItems();
				for (var i = 0; i < aItems.length; i++) { 
					if (aItems[i].getBindingContext().getPath() === "/" + oEvent.getParameter("arguments").contextPath) {
						oList.setSelectedItem(aItems[i], true);
						break;
					}
				}
			}
		}, this);
		
		
	},
	
	handleSearch: function() {
		// add filter for search
		var filters = [];
		var searchString = this.getView().byId("searchField").getValue();
		if (searchString && searchString.length > 0) {
			filters = [ new sap.ui.model.Filter("customerName", sap.ui.model.FilterOperator.Contains, searchString) ];
		}
		
		// update list binding
		var list = this.getView().byId("list");
		var binding = list.getBinding("items");
		binding.filter(filters);
	},
	
	handleSelect: function(oEvent) {
		/*var oRouter = sap.ui.core.routing.Router.getRouter("appRouter");
		//can also use directly this.oRouter.navTo if you're extending scaffloding OR base controllers of SAP UI5.
		oRouter.navTo("Caleres.view.html");
		*/
		var oBindingContext = 
	        oEvent.getParameter(
	            "listItem"
	            ).getBindingContext(),

	        sViewId = "Caleres" + 
	                   oEvent.getParameter(
	                   "listItem").data("OrderId");

	    // Pass event to EventBus
	    sap.ui.getCore().getEventBus().publish(
	        "nav", 
	        "to", {
	          viewName: "ZSRV_RPA.view.Caleres",
	          viewId: sViewId,
	          data: {
	             bindingContext: oBindingContext
	             
	        }
	       
	    });
	  
	   
		var oBindingContext = 
	        oEvent.getParameter(
	            "listItem"
	            ).getBindingContext(),

	        sViewId1 = "taskCaleres" + 
	                   oEvent.getParameter(
	                   "listItem").data("OrderId");

	    
bind = oBindingContext;		

	},
	
	handleListSelect : function (evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("Caleres.controller.js", context);
	},
});	