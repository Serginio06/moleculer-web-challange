"use strict";

module.exports = {
	name: "greeter",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service metadata
	 */
	metadata: {

	},

	/**
	 * Service dependencies
	 */
	//dependencies: [],	

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		hello() {
			return "Hello Moleculer";
		},

        // buyUpdate() {
        //     return "buy buy buyUpdate";
        // },


        buy() {
            return "buy buy Moleculer!!!!!!!";
        },

        buyupdate(ctx) {
            // params: {
            //     id: "number"
            // },

            return "buy buy " + ctx.params.id.toString();


            // handler(ctx) {
            //     return "buy buy " + ctx.params.id.toString();
            // }
        },



		/**
		 * Welcome a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};