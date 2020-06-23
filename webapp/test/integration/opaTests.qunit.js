/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"inc/trng/ZTimeAppInkathon/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});