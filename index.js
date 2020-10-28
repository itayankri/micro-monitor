import { v4 as uuidv4 } from 'uuid';

class MicroMonitor {
    constructor(options) {
        this.generator = options.generator || null;
        this.override = options.override || false;
    }

    generateRequestId = () => (req, res, next) => {
        const requestId = (this.generator && typeof this.generator.generate === 'function') ?
            this.generator.generate() :
            uuidv4();

        res.locals.microMonitor = { requestId };
    };

    setRequestId = () => (req, res, next) => {
        if (req.headers['X-Request-ID']) {

        }
    };
}