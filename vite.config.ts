import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {crx, defineManifest} from "@crxjs/vite-plugin";
import packageJson from './package.json'

const {version} = packageJson

const [major, minor, patch, label = '0'] = version
    .replace(/[^\d.-]+/g, '')
    .split(/[.-]/)

const APP_NAME = "Vite Extension"
const manifest = defineManifest(async (env) => ({
    manifest_version: 3,
    name:
        env.mode === 'staging'
            ? `[INTERNAL] ${APP_NAME}`
            : `${APP_NAME}`,
    version: `${major}.${minor}.${patch}.${label}`,
    version_name: version,
    content_scripts: [
        {
            js: ["src/content.tsx"],
            matches: ["<all_urls>"]
        }
    ],
    action: {
        default_popup: 'index.html'
    }
}))
export default defineConfig({
    plugins: [react(), crx({manifest})],
})
