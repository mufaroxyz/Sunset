import { ClientInfoManager } from "@lib/native";

// This logs in the native logging implementation, e.g. logcat
console.log("Hello from Sunset!");

// Make 'freeze' and 'seal' do nothing
Object.freeze = Object;
Object.seal = Object;

import(".").then((m) => m.default()).catch((e) => {
    console.log(e?.stack ?? e.toString());
    alert([
        "Failed to load Sunset!\n",
        `Build Number: ${ClientInfoManager.Build}`,
        `Sunset: ${__vendettaVersion}`,
        e?.stack || e.toString(),
    ].join("\n"));
});
