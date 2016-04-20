jQuery.sap.require("sap.ui.core.routing.History");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.require("sap.ca.ui.quickoverview.EmployeeLaunch");
jQuery.sap.require("sap.ui.unified.DateRange");

sap.ui.define(['sap/ui/core/mvc/Controller','sap/ui/unified/DateRange'],
		function(Controller, DateRange) {
		"use strict";

sap.ui.core.mvc.Controller
		.extend(
				"ZCRM_FSM.view.Detail",
				{

					
					onInit : function() {
						

						var url1 = "'FSM01')";
						var url2 = "http://gssusnj5.globalsoftsolutions.net:8002/sap/opu/odata/SAP/ZRPA_MGR_SRV/TeamListnCalSet(";
						var url = url2+url1;
						var arry=[];
						var evt=[];
						var url10;

					    
					 
						       
					  $.ajax({
					        type: "GET",
					        contentType: "application/json; charset=utf-8",
					        datatype: "json",
					        url: url,
					        async: false,
					   	    beforeSend: function (XMLHttpRequest2) {
					         
					            XMLHttpRequest2.setRequestHeader("Accept", "application/json");
					      									  } , 
					    success: function(oData, textStatus, jqXHR) {
					    	 arry = JSON.parse(oData.d.OutJsonString);
					    	 
					    	 evt = JSON.parse(oData.d.OutJsonStringEvenr);
					    	
					    	
					    	},
					  		  });
					  		  
					 var sel  = new Object();
					 var sel1 = new Object();
						sel = deviceModel1;
						if(sel.oData.Data != undefined){
							console.log(sel.oData.Data.results[0].OrderId);
							
						}
						 			
						$(function() { 
								var d = new Date();		
										
							$('#calendar').fullCalendar({
								now: d.toDateString(),
								editable: true,
								 theme:true,  
								 start: '08:00', 
							     end: '18:00', 
							     aspectRatio: 1.8,
							   slotWidth:'80',
							scrollTime: '08:00',
							
								header: {
									left: 'today prev,next',
									center: 'title',
									right: 'timelineDay,timelineThreeDays'
								},
								defaultView: 'timelineThreeDays',
								views: {
									timelineThreeDays: {
										type: 'timeline',
										duration: { days: 3 }
									}
								},
								selectable: true,
								selectHelper: true,
								select:function( start, end, jsEvent, view, resource ) {
									var title = prompt('Event Title:');
									var eventData;
									
									console.log(view);
									if (title) {                    
										console.log(bind);
										console.log(resourceId);
										var no = bind.sPath;
										var nov = no.charAt(14);
									  var itemguid;
									  var headerguid;
									  var partner;
									  partner = '110282';
									  headerguid = deviceModel1.oData.Data.results[nov].HeaderGuid;
									  console.log(headerguid);
									  itemguid = deviceModel1.oData.Data.results[nov].ItemGuid;
									  console.log(itemguid);
									  console.log(partner);
							var pfct = '00000052';
					    	var urlParams;
							urlParams = "IvGuid='"
												+ itemguid
												+ "',IvHeaderGuid='"
												+ headerguid
												+ "',IvPartnerNo='"
												+ partner
												+"',IvPfct='"
												+pfct+"')";
						
							
						  url10 = "http://gssusnj5.globalsoftsolutions.net:8002/sap/opu/odata/sap/ZRPA_MGR_SRV/partner_upd_ordSet("
								   +urlParams;
																
																				
						  $.ajax({
						        type: "GET",
						        contentType: "application/json; charset=utf-8",
						        datatype: "json",
						        url: url10,
						        async: false,
						   	    beforeSend: function (XMLHttpRequest2) {
						            
						            XMLHttpRequest2.setRequestHeader("Accept", "application/json");
						      									  } , 
						    success: function(oData, textStatus, jqXHR) {
						    	alert('Data Updated to CRM,Please Refresh to see the real Data,API need to add for auto refresh')
						    	
						    	},
						  		  });
													eventData = {
											title: title,
											start: start,
											end: end
										};
										$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
									}
									$('#calendar').fullCalendar('unselect');
								},
								editable: true,
								resourceAreaWidth: '30%',
								resourceColumns: [
									{
										labelText: 'Resource Name',
										field: 'title'
									},
									
								],
							
								  			
							 	 resources:  $.map(arry, function(item, i) {
					                var resc = new Object();
					                resc.id = item.id;
					             
					              resc.title = item.title;
					               return resc;
					           }), 
								
								events: $.map(evt, function(item, i) {
					                var evt1 = new Object();
					                evt1.id = item.id;
					                evt1.resourceId = item.resourceId;
					                evt1.start    = item.start; 
					                evt1.end       = item.end;
					                evt1.color = item.color;
					                evt1.textColor = item.textColor; 
					                evt1.title = item.title;
					                return evt1; 
					            })    
					           
							});
						
							$('#calendar').fullCalendar('option', 'height', 400); 
						});

					
						
						
					},

					navToHandler : function(channelId, eventId, data) {
						

					},
				});

					
				});