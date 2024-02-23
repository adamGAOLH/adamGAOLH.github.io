/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_APP_PORT: number
    readonly VITE_APP_BASE_API: string
    readonly VITE_APP_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv

}