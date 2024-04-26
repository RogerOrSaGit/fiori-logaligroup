/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"roger/invoices/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
