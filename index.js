registerPatcher({
	info: info,
	gameModes: [xelib.gmTES5, xelib.gmSSE],
	settings: {
		label: 'No Distant LOD for NPCs',
		hide: true,
		templateUrl: `${patcherUrl}/partials/settings.html`,
		defaultSettings: {}
	},
	requiredFiles: [],
	getFilesToPatch: function(filenames) {
		return filenames;
	},
	execute: {
		process: [{
			load: function(plugin, helpers, settings, locals) {
				return {
					signature: 'NPC_',
					filter: function(record) {
						let hasDistantLOD = xelib.HasElement(record, 'ANAM - Far away model') && xelib.GetIntValue(record, 'DNAM\\Far away model distance');
						let inheritTraits = xelib.HasElement(record, 'TPLT - Template') && xelib.GetFlag(record, 'ACBS\\Template Flags', 'Use Traits');
						return hasDistantLOD && !inheritTraits;
					}
				}
			},
			patch: function(record, helpers, settings, locals) {
				xelib.RemoveElement(record, 'ANAM - Far away model');
				xelib.SetIntValue(record, 'DNAM\\Far away model distance', 0);
			}
		}]
	}
});
