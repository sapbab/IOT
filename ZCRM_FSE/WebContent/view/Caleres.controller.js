sap.ui.controller("view.Caleres", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Caleres
*/
	onInit: function() {
		var view = this.getView();
	alert('balaji');
	console.log('balaji');

		/*
		 * sap.ui.core.UIComponent.getRouterFor(this).attachRouteMatched(function(oEvent) { //
		 * when detail navigation occurs, update the binding
		 * context if (oEvent.getParameter("name") === "detail") {
		 * var context = new
		 * sap.ui.model.Context(view.getModel(), '/' +
		 * oEvent.getParameter("arguments").contextPath);
		 * view.setBindingContext(context); // Make sure the
		 * master is here } }, this);
		 * 
		 */
		  this._oRouter =
		  sap.ui.core.UIComponent.getRouterFor(this);
		  this._oRouter.attachRouteMatched(this._handleRouteMatched,
		  this);
		 
		  
		  var serviceUrl = "/sap/opu/odata/sap/ZRPA_MGR_SRV/";
		  
		// set data model
			var emp = new sap.ui.model.odata.ODataModel(serviceUrl, true);
			
			// set device model
			var empModel = new sap.ui.model.json.JSONModel(
					{
						isTouch : sap.ui.Device.support.touch,
						isNoTouch : !sap.ui.Device.support.touch,
						isPhone : jQuery.device.is.phone,
						isNoPhone : !jQuery.device.is.phone,
						listMode : (jQuery.device.is.phone) ? "None"
								: "SingleSelectMaster",
						listItemType : (jQuery.device.is.phone) ? "Active"
								: "Inactive"
					});
		  
			
			var query = "IvUsername eq 'GUJERSEY'";
			emp.read("/Employees_orgstSet?$filter=" + query, null, null, null,
					function(oData, oResponse) {
						// m.read("/ServiceOrderSet", null, null, filters,
						// function(oData, oResponse){
						empModel.setData({
							Dataemp : oData
							
						});																					
						// this.setModel(deviceModel1, "device");
						sap.ui.getCore().setModel(empModel);
						view.setModel(empModel);
					}, null);
			
			

		var bus = sap.ui.getCore().getEventBus();
		bus.subscribe("nav", "to", this.navToHandler, this);
		var idNew, idItem;
		
		var oCalendar = this.getView().byId("durationCalendar");
		oCalendar.setMonthsPerRow(1);
        oCalendar.setWeeksPerRow(2);
        oCalendar.setSingleRow(true);
		
	},

	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Caleres
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Caleres
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Caleres
*/
//	onExit: function() {
//
//	}

});