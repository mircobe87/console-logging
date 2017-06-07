(function () {
    var keys = {
        LOG: "console-logging.log",
        DEBUG: "console-logging.debug",
        INFO: "console-logging.info",
        ERROR: "console-logging.error"
    };
    var parseArguments = function (args) {
        if (args.length === 0) {
            return ["[[undefined]] ::"];
        } else {
            var p = [];
            for (var i=0; i<args.length; i++){
                if (i==0){
                    p.push("[["+args[i]+"]] ::");
                }else{
                    p.push(args[i]);
                }
            }
            return p;
        }
    };

    if (!window.ConsoleLogging) {

        window.ConsoleLogging = {
            log: function () {
                if (window.sessionStorage && (window.sessionStorage.getItem(keys.LOG) === "false" || window.sessionStorage.getItem(keys.LOG) === undefined )) {

                } else if (!window.sessionStorage || (window.sessionStorage && window.sessionStorage.getItem(keys.LOG) === "true" )) {
                    var parsedArgs = parseArguments(arguments);
                    window.console.log.apply(undefined, parsedArgs);
                }
            },
            info: function () {
                if (window.sessionStorage && (window.sessionStorage.getItem(keys.INFO) === "false" || window.sessionStorage.getItem(keys.INFO) === undefined )) {

                } else if (!window.sessionStorage || (window.sessionStorage && window.sessionStorage.getItem(keys.INFO) === "true" )) {
                    var parsedArgs = parseArguments(arguments);
                    window.console.info.apply(undefined, parsedArgs);
                }
            },
            error: function () {
                if (window.sessionStorage && (window.sessionStorage.getItem(keys.ERROR) === "false" || window.sessionStorage.getItem(keys.ERROR) === undefined )) {

                } else if (!window.sessionStorage || (window.sessionStorage && window.sessionStorage.getItem(keys.ERROR) === "true" )) {
                    var parsedArgs = parseArguments(arguments);
                    window.console.error.apply(undefined, parsedArgs);
                }
            },
            debug: function () {
                if (window.sessionStorage && (window.sessionStorage.getItem(keys.DEBUG) === "false" || window.sessionStorage.getItem(keys.DEBUG) === undefined )) {

                } else if (!window.sessionStorage || (window.sessionStorage && window.sessionStorage.getItem(keys.DEBUG) === "true" )) {
                    var parsedArgs = parseArguments(arguments);
                    window.console.debug.apply(undefined, parsedArgs);
                }
            },
            enable: function (level) {
                if (window.sessionStorage) {
                    switch (level) {
                        case "info": {
                            window.sessionStorage.setItem(keys.INFO, "true");
                            window.console.info("[[ConsoleLogging]] :: INFO level is enabled.");
                            break;
                        }
                        case "log": {
                            window.sessionStorage.setItem(keys.LOG, "true");
                            window.console.info("[[ConsoleLogging]] :: LOG level is enabled.");
                            break;
                        }
                        case "debug": {
                            window.sessionStorage.setItem(keys.DEBUG, "true");
                            window.console.info("[[ConsoleLogging]] :: DEBUG level is enabled.");
                            break;
                        }
                        case "error": {
                            window.sessionStorage.setItem(keys.ERROR, "true");
                            window.console.info("[[ConsoleLogging]] :: ERROR level is enabled.");
                            break;
                        }
                        default:
                            window.console.error("No logging level available for: \"" + level + "\".")
                    }
                } else {
                    window.console.info("Session Storage not supported in your browser: all logging levels are always available.");
                }
            },
            disable: function (level) {
                if (window.sessionStorage) {
                    switch (level) {
                        case "info":{
                            window.sessionStorage.setItem(keys.INFO, "false");
                            window.console.info("[[ConsoleLogging]] :: INFO level is disabled.");
                            break;
                        }
                        case "log": {
                            window.sessionStorage.setItem(keys.LOG, "false");
                            window.console.info("[[ConsoleLogging]] :: LOG level is disabled.");
                            break;
                        }
                        case "debug": {
                            window.sessionStorage.setItem(keys.DEBUG, "false");
                            window.console.info("[[ConsoleLogging]] :: DEBUG level is disabled.");
                            break;
                        }
                        case "error": {
                            window.sessionStorage.setItem(keys.ERROR, "false");
                            window.console.info("[[ConsoleLogging]] :: ERROR level is disabled.");
                            break;
                        }
                        default:
                            window.console.error("No logging level available for: \"" + level + "\".")
                    }
                } else {
                    window.console.info("Session Storage not supported in your browser: all logging levels are always available.");
                }
            }
        };
        if (window.sessionStorage) {
            if (!window.sessionStorage.getItem("console-logging")) {

                window.ConsoleLogging.enable("info");
                window.ConsoleLogging.enable("log");
                window.ConsoleLogging.enable("debug");
                window.ConsoleLogging.enable("error");

                window.sessionStorage.setItem("console-logging", "loaded");
            }
        }

    }
})();
