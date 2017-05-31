/**
 * grunt-init-typescript
 *
 * A heavy opinionated Typescript template.
 */

exports.description =
    "Creates a basic, heavy opinionated project structure for a typescript package.";
exports.after =
    "Run npm install now to install the dependencies. " +
    "Afterwards, open the file index.ts and start coding.";
exports.template = function (grunt, init, done) {
    init.process(
        {
            type: 'node'
        },
        [
            init.prompt('name'),
            init.prompt('description', 'Some magic typescript package'),
            init.prompt('version', '1.0.0'),
            init.prompt('author_name'),
            init.prompt('author_email'),
            init.prompt('licenses'),
            init.prompt('repository'),
            init.prompt('classname', 'ExampleClass'),
            init.prompt('keywords', 'example')
        ],
        function (err, props) {
            var files = init.filesToCopy(props);

            init.addLicenseFiles(files, props.licenses);

            init.copyAndProcess(files, props);

            props.dependencies = {
                "winston": "^2.3.0"
            };

            props.devDependencies = {
                "@types/chai": "^3.4.34",
                "@types/mocha": "^2.2.37",
                "@types/winston": "^2.2.0",
                "chai": "^3.5.0",
                "grunt": "^1.0.1",
                "grunt-ts": "^6.0.0-beta.3",
                "grunt-tslint": "^3.3.0",
                "grunt-mocha-test": "^0.13.2",
                "mocha": "^3.2.0",
                "tslint": "3.15.1",
                "typescript": "^2.0.10",
                "grunt-contrib-clean": "^1.0.0",
                "grunt-contrib-copy": "^1.0.0",
                "grunt-istanbul": "^0.7.2",
                "remap-istanbul": "^0.9.1"
            };

            init.writePackageJSON('package.json', props);

            done();
        }
    )
};