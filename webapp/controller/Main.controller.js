sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/odata/v2/ODataModel'
], (Controller, ODataModel) => {
    "use strict";

    return Controller.extend("com.sap.lh.mr.zusagethreshold.controller.Main", {
        onInit() {
            this._oModel = new ODataModel("/ThresholdUsageOutputSet", true);
			this.getView().setModel(this._oModel);
        },
		onFiltersChanged: function(oEvent) {
			const oModel = this.getView().getModel();
			if (!oModel) {
				return;
			}

			const oConditions = this.getView().byId("thresholdFilterbar").getConditions();
			const sConditions = JSON.stringify(oConditions, "\t", 4);
			oModel.setProperty("/conditionsText", sConditions);
		}
    });
});