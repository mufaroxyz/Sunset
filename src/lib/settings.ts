import { LoaderConfig, Settings } from "@types";
import { createFileBackend, createMMKVBackend, createStorage, wrapSync } from "@lib/storage";

export default wrapSync(createStorage<Settings>(createMMKVBackend("SUNSET_SETTINGS")));
export const loaderConfig = wrapSync(createStorage<LoaderConfig>(createFileBackend("sunset_loader.json")));
