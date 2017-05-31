/**
 * {%= name %} - {%= description %}
 */

// Import needed modules

import * as winston from 'winston';
import LoggerInstance = winston.LoggerInstance;

/**
 * {%= name %} - {%= description %}
 */

export class {%= classname %} {

    /**
     * Use a winston logger instance to log, what you're doing
     */
    private _logger: LoggerInstance;

    constructor() {
        this._logger = winston.loggers.get('flunkey.components');
    }

}
