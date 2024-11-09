(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/e96f2_@clerk_nextjs_dist_esm_3d992d._.js", {

"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/utils/logFormatter.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "logFormatter": (()=>logFormatter)
});
const maskSecretKey = (str)=>{
    if (!str || typeof str !== "string") {
        return str;
    }
    try {
        return (str || "").replace(/^(sk_(live|test)_)(.+?)(.{3})$/, "$1*********$4");
    } catch (e) {
        return "";
    }
};
const logFormatter = (entry)=>{
    return (Array.isArray(entry) ? entry : [
        entry
    ]).map((entry2)=>{
        if (typeof entry2 === "string") {
            return maskSecretKey(entry2);
        }
        const masked = Object.fromEntries(Object.entries(entry2).map(([k, v])=>[
                k,
                maskSecretKey(v)
            ]));
        return JSON.stringify(masked, null, 2);
    }).join(", ");
};
;
 //# sourceMappingURL=logFormatter.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/utils/debugLogger.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createDebugLogger": (()=>createDebugLogger),
    "withLogger": (()=>withLogger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/package.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$logFormatter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/utils/logFormatter.js [middleware] (ecmascript)");
;
;
const createDebugLogger = (name, formatter)=>()=>{
        const entries = [];
        let isEnabled = false;
        return {
            enable: ()=>{
                isEnabled = true;
            },
            debug: (...args)=>{
                if (isEnabled) {
                    entries.push(args.map((arg)=>typeof arg === "function" ? arg() : arg));
                }
            },
            commit: ()=>{
                if (isEnabled) {
                    console.log(debugLogHeader(name));
                    for (const log of entries){
                        let output = formatter(log);
                        output = output.split("\n").map((l)=>`  ${l}`).join("\n");
                        if (process.env.VERCEL) {
                            output = truncate(output, 4096);
                        }
                        console.log(output);
                    }
                    console.log(debugLogFooter(name));
                }
            }
        };
    };
const withLogger = (loggerFactoryOrName, handlerCtor)=>{
    return (...args)=>{
        const factory = typeof loggerFactoryOrName === "string" ? createDebugLogger(loggerFactoryOrName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$logFormatter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["logFormatter"]) : loggerFactoryOrName;
        const logger = factory();
        const handler = handlerCtor(logger);
        try {
            const res = handler(...args);
            if (typeof res === "object" && "then" in res && typeof res.then === "function") {
                return res.then((val)=>{
                    logger.commit();
                    return val;
                }).catch((err)=>{
                    logger.commit();
                    throw err;
                });
            }
            logger.commit();
            return res;
        } catch (err) {
            logger.commit();
            throw err;
        }
    };
};
function debugLogHeader(name) {
    return `[clerk debug start: ${name}]`;
}
function debugLogFooter(name) {
    return `[clerk debug end: ${name}] (@clerk/nextjs=${"6.2.0"},next=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$package$2e$json__$28$json$29$__["default"].version})`;
}
function truncate(str, maxLength) {
    const encoder = new TextEncoder();
    const decoder = new TextDecoder("utf-8");
    const encodedString = encoder.encode(str);
    const truncatedString = encodedString.slice(0, maxLength);
    return decoder.decode(truncatedString).replace(/\uFFFD/g, "");
}
;
 //# sourceMappingURL=debugLogger.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/constants.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "constants": (()=>constants)
});
const Headers = {
    NextRewrite: "x-middleware-rewrite",
    NextResume: "x-middleware-next",
    NextRedirect: "Location",
    // Used by next to identify internal navigation for app router
    NextUrl: "next-url",
    NextAction: "next-action",
    // Used by next to identify internal navigation for pages router
    NextjsData: "x-nextjs-data"
};
const constants = {
    Headers
};
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/constants.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "API_URL": (()=>API_URL),
    "API_VERSION": (()=>API_VERSION),
    "CLERK_JS_URL": (()=>CLERK_JS_URL),
    "CLERK_JS_VERSION": (()=>CLERK_JS_VERSION),
    "DOMAIN": (()=>DOMAIN),
    "ENCRYPTION_KEY": (()=>ENCRYPTION_KEY),
    "IS_SATELLITE": (()=>IS_SATELLITE),
    "PROXY_URL": (()=>PROXY_URL),
    "PUBLISHABLE_KEY": (()=>PUBLISHABLE_KEY),
    "SDK_METADATA": (()=>SDK_METADATA),
    "SECRET_KEY": (()=>SECRET_KEY),
    "SIGN_IN_URL": (()=>SIGN_IN_URL),
    "SIGN_UP_URL": (()=>SIGN_UP_URL),
    "TELEMETRY_DEBUG": (()=>TELEMETRY_DEBUG),
    "TELEMETRY_DISABLED": (()=>TELEMETRY_DISABLED)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$apiUrlFromPublishableKey$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/underscore.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QPSU45F4$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QPSU45F4.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE2A7CJI.mjs [middleware] (ecmascript)");
;
;
const CLERK_JS_VERSION = process.env.NEXT_PUBLIC_CLERK_JS_VERSION || "";
const CLERK_JS_URL = process.env.NEXT_PUBLIC_CLERK_JS_URL || "";
const API_VERSION = process.env.CLERK_API_VERSION || "v1";
const SECRET_KEY = process.env.CLERK_SECRET_KEY || "";
const PUBLISHABLE_KEY = ("TURBOPACK compile-time value", "pk_test_dW5pcXVlLXBvbnktMjYuY2xlcmsuYWNjb3VudHMuZGV2JA") || "";
const ENCRYPTION_KEY = process.env.CLERK_ENCRYPTION_KEY || "";
const API_URL = process.env.CLERK_API_URL || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QPSU45F4$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["apiUrlFromPublishableKey"])(PUBLISHABLE_KEY);
const DOMAIN = process.env.NEXT_PUBLIC_CLERK_DOMAIN || "";
const PROXY_URL = process.env.NEXT_PUBLIC_CLERK_PROXY_URL || "";
const IS_SATELLITE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE) || false;
const SIGN_IN_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "";
const SIGN_UP_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "";
const SDK_METADATA = {
    name: "@clerk/nextjs",
    version: "6.2.0",
    environment: ("TURBOPACK compile-time value", "development")
};
const TELEMETRY_DISABLED = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.NEXT_PUBLIC_CLERK_TELEMETRY_DISABLED);
const TELEMETRY_DEBUG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.NEXT_PUBLIC_CLERK_TELEMETRY_DEBUG);
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/errors.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "authAuthHeaderMissing": (()=>authAuthHeaderMissing),
    "authSignatureInvalid": (()=>authSignatureInvalid),
    "clockSkewDetected": (()=>clockSkewDetected),
    "encryptionKeyInvalid": (()=>encryptionKeyInvalid),
    "getAuthAuthHeaderMissing": (()=>getAuthAuthHeaderMissing),
    "missingDomainAndProxy": (()=>missingDomainAndProxy),
    "missingSignInUrlInDev": (()=>missingSignInUrlInDev)
});
const missingDomainAndProxy = `
Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl.

1) With middleware
   e.g. export default clerkMiddleware({domain:'YOUR_DOMAIN',isSatellite:true});
2) With environment variables e.g.
   NEXT_PUBLIC_CLERK_DOMAIN='YOUR_DOMAIN'
   NEXT_PUBLIC_CLERK_IS_SATELLITE='true'
   `;
const missingSignInUrlInDev = `
Invalid signInUrl. A satellite application requires a signInUrl for development instances.
Check if signInUrl is missing from your configuration or if it is not an absolute URL

1) With middleware
   e.g. export default clerkMiddleware({signInUrl:'SOME_URL', isSatellite:true});
2) With environment variables e.g.
   NEXT_PUBLIC_CLERK_SIGN_IN_URL='SOME_URL'
   NEXT_PUBLIC_CLERK_IS_SATELLITE='true'`;
const getAuthAuthHeaderMissing = ()=>authAuthHeaderMissing("getAuth");
const authAuthHeaderMissing = (helperName = "auth")=>`Clerk: ${helperName}() was called but Clerk can't detect usage of clerkMiddleware(). Please ensure the following:
-  clerkMiddleware() is used in your Next.js Middleware.
- Your Middleware matcher is configured to match this route or page.
- If you are using the src directory, make sure the Middleware file is inside of it.

For more details, see https://clerk.com/docs/quickstarts/nextjs
`;
const clockSkewDetected = (verifyMessage)=>`Clerk: Clock skew detected. This usually means that your system clock is inaccurate. Clerk will continuously try to issue new tokens, as the existing ones will be treated as "expired" due to clock skew.

To resolve this issue, make sure your system's clock is set to the correct time (e.g. turn off and on automatic time synchronization).

---

${verifyMessage}`;
const authSignatureInvalid = `Clerk: Unable to verify request, this usually means the Clerk middleware did not run. Ensure Clerk's middleware is properly integrated and matches the current route. For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware. (code=auth_signature_invalid)`;
const encryptionKeyInvalid = `Clerk: Unable to decrypt request data, this usually means the encryption key is invalid. Ensure the encryption key is properly set. For more information, see: https://clerk.com/docs/references/nextjs/clerk-middleware#dynamic-keys. (code=encryption_key_invalid)`;
;
 //# sourceMappingURL=errors.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/errorThrower.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "errorThrower": (()=>errorThrower)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/error.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-T4WHYQYX.mjs [middleware] (ecmascript)");
;
const errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/nextjs"
});
;
 //# sourceMappingURL=errorThrower.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "apiEndpointUnauthorizedNextResponse": (()=>apiEndpointUnauthorizedNextResponse),
    "assertAuthStatus": (()=>assertAuthStatus),
    "assertKey": (()=>assertKey),
    "assertTokenSignature": (()=>assertTokenSignature),
    "decorateRequest": (()=>decorateRequest),
    "decryptClerkRequestData": (()=>decryptClerkRequestData),
    "encryptClerkRequestData": (()=>encryptClerkRequestData),
    "getAuthKeyFromRequest": (()=>getAuthKeyFromRequest),
    "getCookie": (()=>getCookie),
    "getCustomAttributeFromRequest": (()=>getCustomAttributeFromRequest),
    "getHeader": (()=>getHeader),
    "handleMultiDomainAndProxy": (()=>handleMultiDomainAndProxy),
    "redirectAdapter": (()=>redirectAdapter),
    "setRequestHeadersOnNextResponse": (()=>setRequestHeadersOnNextResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/internal.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/keys.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$logger$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/logger.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$proxy$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/proxy.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/utils/index.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$aes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/aes.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$enc$2d$utf8$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/enc-utf8.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$hmac$2d$sha1$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/hmac-sha1.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE36JXB4$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE36JXB4.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/errors.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errorThrower$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/errorThrower.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [middleware] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
function getCustomAttributeFromRequest(req, key) {
    return key in req ? req[key] : void 0;
}
function getAuthKeyFromRequest(req, key) {
    return getCustomAttributeFromRequest(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Attributes[key]) || getHeader(req, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers[key]);
}
function getHeader(req, name) {
    var _a, _b;
    if (isNextRequest(req)) {
        return req.headers.get(name);
    }
    return req.headers[name] || req.headers[name.toLowerCase()] || ((_b = (_a = req.socket) == null ? void 0 : _a._httpMessage) == null ? void 0 : _b.getHeader(name));
}
function getCookie(req, name) {
    if (isNextRequest(req)) {
        const reqCookieOrString = req.cookies.get(name);
        if (!reqCookieOrString) {
            return void 0;
        }
        return typeof reqCookieOrString === "string" ? reqCookieOrString : reqCookieOrString.value;
    }
    return req.cookies[name];
}
function isNextRequest(val) {
    try {
        const { headers, nextUrl, cookies } = val || {};
        return typeof (headers == null ? void 0 : headers.get) === "function" && typeof (nextUrl == null ? void 0 : nextUrl.searchParams.get) === "function" && typeof (cookies == null ? void 0 : cookies.get) === "function";
    } catch (e) {
        return false;
    }
}
const OVERRIDE_HEADERS = "x-middleware-override-headers";
const MIDDLEWARE_HEADER_PREFIX = "x-middleware-request";
const setRequestHeadersOnNextResponse = (res, req, newHeaders)=>{
    if (!res.headers.get(OVERRIDE_HEADERS)) {
        res.headers.set(OVERRIDE_HEADERS, [
            ...req.headers.keys()
        ]);
        req.headers.forEach((val, key)=>{
            res.headers.set(`${MIDDLEWARE_HEADER_PREFIX}-${key}`, val);
        });
    }
    Object.entries(newHeaders).forEach(([key, val])=>{
        res.headers.set(OVERRIDE_HEADERS, `${res.headers.get(OVERRIDE_HEADERS)},${key}`);
        res.headers.set(`${MIDDLEWARE_HEADER_PREFIX}-${key}`, val);
    });
};
function decorateRequest(req, res, requestState, requestData) {
    var _a;
    const { reason, message, status, token } = requestState;
    if (!res) {
        res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constants"].Headers.NextRedirect)) {
        return res;
    }
    let rewriteURL;
    if (res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constants"].Headers.NextResume) === "1") {
        res.headers.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constants"].Headers.NextResume);
        rewriteURL = new URL(req.url);
    }
    const rewriteURLHeader = res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constants"].Headers.NextRewrite);
    if (rewriteURLHeader) {
        const reqURL = new URL(req.url);
        rewriteURL = new URL(rewriteURLHeader);
        if (rewriteURL.origin !== reqURL.origin) {
            return res;
        }
    }
    if (rewriteURL) {
        const clerkRequestData = encryptClerkRequestData(requestData);
        setRequestHeadersOnNextResponse(res, req, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthStatus]: status,
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthToken]: token || "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthSignature]: token ? createTokenSignature(token, (_a = requestData == null ? void 0 : requestData.secretKey) != null ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SECRET_KEY"]) : "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthMessage]: message || "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthReason]: reason || "",
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkUrl]: req.clerkUrl.toString(),
            ...clerkRequestData ? {
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRequestData]: clerkRequestData
            } : {}
        });
        res.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constants"].Headers.NextRewrite, rewriteURL.href);
    }
    return res;
}
const apiEndpointUnauthorizedNextResponse = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].json(null, {
        status: 401,
        statusText: "Unauthorized"
    });
};
const handleMultiDomainAndProxy = (clerkRequest, opts)=>{
    const relativeOrAbsoluteProxyUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE36JXB4$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["handleValueOrFn"])(opts == null ? void 0 : opts.proxyUrl, clerkRequest.clerkUrl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PROXY_URL"]);
    let proxyUrl;
    if (!!relativeOrAbsoluteProxyUrl && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isHttpOrHttps"])(relativeOrAbsoluteProxyUrl)) {
        proxyUrl = new URL(relativeOrAbsoluteProxyUrl, clerkRequest.clerkUrl).toString();
    } else {
        proxyUrl = relativeOrAbsoluteProxyUrl;
    }
    const isSatellite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE36JXB4$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["handleValueOrFn"])(opts.isSatellite, new URL(clerkRequest.url), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IS_SATELLITE"]);
    const domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE36JXB4$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["handleValueOrFn"])(opts.domain, new URL(clerkRequest.url), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DOMAIN"]);
    const signInUrl = (opts == null ? void 0 : opts.signInUrl) || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SIGN_IN_URL"];
    if (isSatellite && !proxyUrl && !domain) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["missingDomainAndProxy"]);
    }
    if (isSatellite && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isHttpOrHttps"])(signInUrl) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isDevelopmentFromSecretKey"])(opts.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SECRET_KEY"])) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["missingSignInUrlInDev"]);
    }
    return {
        proxyUrl,
        isSatellite,
        domain,
        signInUrl
    };
};
const redirectAdapter = (url)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url, {
        headers: {
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRedirectTo]: "true"
        }
    });
};
function assertAuthStatus(req, error) {
    const authStatus = getAuthKeyFromRequest(req, "AuthStatus");
    if (!authStatus) {
        throw new Error(error);
    }
}
function assertKey(key, onError) {
    if (!key) {
        onError();
    }
    return key;
}
function createTokenSignature(token, key) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$hmac$2d$sha1$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"])(token, key).toString();
}
function assertTokenSignature(token, key, signature) {
    if (!signature) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["authSignatureInvalid"]);
    }
    const expectedSignature = createTokenSignature(token, key);
    if (expectedSignature !== signature) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["authSignatureInvalid"]);
    }
}
function encryptClerkRequestData(requestData) {
    if (!requestData || !Object.values(requestData).length) {
        return;
    }
    if (requestData.secretKey && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCRYPTION_KEY"]) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["logger"].warnOnce("Clerk: Missing `CLERK_ENCRYPTION_KEY`. Required for propagating `secretKey` middleware option. See docs: https://clerk.com/docs/references/nextjs/clerk-middleware#dynamic-keys");
        return;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$aes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].encrypt(JSON.stringify(requestData), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCRYPTION_KEY"] || assertKey(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SECRET_KEY"], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errorThrower$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["errorThrower"].throwMissingSecretKeyError())).toString();
}
function decryptClerkRequestData(encryptedRequestData) {
    if (!encryptedRequestData) {
        return {};
    }
    try {
        const decryptedBytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$aes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].decrypt(encryptedRequestData, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCRYPTION_KEY"] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SECRET_KEY"]);
        const encoded = decryptedBytes.toString(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$crypto$2d$js$40$4$2e$2$2e$0$2f$node_modules$2f$crypto$2d$js$2f$enc$2d$utf8$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]);
        return JSON.parse(encoded);
    } catch (err) {
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encryptionKeyInvalid"]);
    }
}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "buildRequestLike": (()=>buildRequestLike),
    "getScriptNonceFromHeader": (()=>getScriptNonceFromHeader),
    "isPrerenderingBailout": (()=>isPrerenderingBailout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
;
const isPrerenderingBailout = (e)=>{
    if (!(e instanceof Error) || !("message" in e)) {
        return false;
    }
    const { message } = e;
    const lowerCaseInput = message.toLowerCase();
    const dynamicServerUsage = lowerCaseInput.includes("dynamic server usage");
    const bailOutPrerendering = lowerCaseInput.includes("this page needs to bail out of prerendering");
    const routeRegex = /Route .*? needs to bail out of prerendering at this point because it used .*?./;
    return routeRegex.test(message) || dynamicServerUsage || bailOutPrerendering;
};
async function buildRequestLike() {
    try {
        const { getHeaders } = await Promise.resolve().then(()=>__turbopack_import__("[project]/node_modules/.pnpm/ezheaders@0.1.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20_jhsdhfxr57i47fzdzqx4pvpwqe/node_modules/ezheaders/dist/index.mjs [middleware] (ecmascript)"));
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextRequest"]("https://placeholder.com", {
            headers: await getHeaders()
        });
    } catch (e) {
        if (e && isPrerenderingBailout(e)) {
            throw e;
        }
        throw new Error(`Clerk: auth() and currentUser() are only supported in App Router (/app directory).
If you're using /pages, try getAuth() instead.
Original error: ${e}`);
    }
}
function getScriptNonceFromHeader(cspHeaderValue) {
    var _a;
    const directives = cspHeaderValue.split(";").map((directive2)=>directive2.trim());
    const directive = directives.find((dir)=>dir.startsWith("script-src")) || directives.find((dir)=>dir.startsWith("default-src"));
    if (!directive) {
        return;
    }
    const nonce = (_a = directive.split(" ").slice(1).map((source)=>source.trim()).find((source)=>source.startsWith("'nonce-") && source.length > 8 && source.endsWith("'"))) == null ? void 0 : _a.slice(7, -1);
    if (!nonce) {
        return;
    }
    if (/[&><\u2028\u2029]/g.test(nonce)) {
        throw new Error("Nonce value from Content-Security-Policy contained invalid HTML escape characters, which is disallowed for security reasons. Make sure that your nonce value does not contain the following characters: `<`, `>`, `&`");
    }
    return nonce;
}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "clerkClient": (()=>clerkClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/index.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/internal.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkMiddleware$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js [middleware] (ecmascript)");
;
;
;
;
;
;
const clerkClientDefaultOptions = {
    secretKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SECRET_KEY"],
    publishableKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PUBLISHABLE_KEY"],
    apiUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["API_URL"],
    apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["API_VERSION"],
    userAgent: `${"@clerk/nextjs"}@${"6.2.0"}`,
    proxyUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PROXY_URL"],
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DOMAIN"],
    isSatellite: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IS_SATELLITE"],
    sdkMetadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SDK_METADATA"],
    telemetry: {
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TELEMETRY_DISABLED"],
        debug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["TELEMETRY_DEBUG"]
    }
};
const createClerkClientWithOptions = (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["createClerkClient"])({
        ...clerkClientDefaultOptions,
        ...options
    });
const clerkClient = async ()=>{
    var _a, _b;
    let requestData;
    try {
        const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["buildRequestLike"])();
        const encryptedRequestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getHeader"])(request, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRequestData);
        requestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decryptClerkRequestData"])(encryptedRequestData);
    } catch (err) {
        if (err && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isPrerenderingBailout"])(err)) {
            throw err;
        }
    }
    const options = (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkMiddleware$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["clerkMiddlewareRequestDataStorage"].getStore()) == null ? void 0 : _a.get("requestData")) != null ? _b : requestData;
    if ((options == null ? void 0 : options.secretKey) || (options == null ? void 0 : options.publishableKey)) {
        return createClerkClientWithOptions(options);
    }
    return createClerkClientWithOptions({});
};
;
 //# sourceMappingURL=clerkClient.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/utils/response.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isRedirect": (()=>isRedirect),
    "setHeader": (()=>setHeader),
    "stringifyHeaders": (()=>stringifyHeaders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/constants.js [middleware] (ecmascript)");
;
const isRedirect = (res)=>{
    return res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constants"].Headers.NextRedirect);
};
const setHeader = (res, name, val)=>{
    res.headers.set(name, val);
    return res;
};
const stringifyHeaders = (headers)=>{
    if (!headers) {
        return JSON.stringify({});
    }
    const obj = {};
    headers.forEach((value, name)=>{
        obj[name] = value;
    });
    return JSON.stringify(obj);
};
;
 //# sourceMappingURL=response.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/utils/serverRedirectWithAuth.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "serverRedirectWithAuth": (()=>serverRedirectWithAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/internal.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$devBrowser$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/devBrowser.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/keys.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$K64INQ4C$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-K64INQ4C.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
;
;
;
;
const serverRedirectWithAuth = (clerkRequest, res, opts)=>{
    const location = res.headers.get("location");
    const shouldAppendDevBrowser = res.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRedirectTo) === "true";
    if (shouldAppendDevBrowser && !!location && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isDevelopmentFromSecretKey"])(opts.secretKey) && clerkRequest.clerkUrl.isCrossOrigin(location)) {
        const dbJwt = clerkRequest.cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$K64INQ4C$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["DEV_BROWSER_JWT_KEY"]) || "";
        const url = new URL(location);
        const urlWithDevBrowser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$K64INQ4C$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["setDevBrowserJWTInURL"])(url, dbJwt);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(urlWithDevBrowser.href, res);
    }
    return res;
};
;
 //# sourceMappingURL=serverRedirectWithAuth.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/nextErrors.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isNextjsNotFoundError": (()=>isNextjsNotFoundError),
    "isNextjsRedirectError": (()=>isNextjsRedirectError),
    "isRedirectToSignInError": (()=>isRedirectToSignInError),
    "nextjsNotFound": (()=>nextjsNotFound),
    "nextjsRedirectError": (()=>nextjsRedirectError),
    "redirectToSignInError": (()=>redirectToSignInError)
});
const CONTROL_FLOW_ERROR = {
    FORCE_NOT_FOUND: "CLERK_PROTECT_REWRITE",
    REDIRECT_TO_URL: "CLERK_PROTECT_REDIRECT_TO_URL",
    REDIRECT_TO_SIGN_IN: "CLERK_PROTECT_REDIRECT_TO_SIGN_IN"
};
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function isNextjsNotFoundError(error) {
    if (typeof error !== "object" || error === null || !("digest" in error)) {
        return false;
    }
    return error.digest === NOT_FOUND_ERROR_CODE;
}
function nextjsNotFound() {
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    error.clerk_digest = CONTROL_FLOW_ERROR.FORCE_NOT_FOUND;
    throw error;
}
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
function nextjsRedirectError(url, extra, type = "replace", statusCode = 307) {
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = `${REDIRECT_ERROR_CODE};${type};${url};${statusCode};`;
    error.clerk_digest = CONTROL_FLOW_ERROR.REDIRECT_TO_URL;
    Object.assign(error, extra);
    throw error;
}
function redirectToSignInError(url, returnBackUrl) {
    nextjsRedirectError(url, {
        clerk_digest: CONTROL_FLOW_ERROR.REDIRECT_TO_SIGN_IN,
        returnBackUrl: returnBackUrl === null ? "" : returnBackUrl || url
    });
}
function isNextjsRedirectError(error) {
    if (typeof error !== "object" || error === null || !("digest" in error) || typeof error.digest !== "string") {
        return false;
    }
    const digest = error.digest.split(";");
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(";");
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string" && !isNaN(statusCode) && statusCode === 307;
}
function isRedirectToSignInError(error) {
    if (isNextjsRedirectError(error) && "clerk_digest" in error) {
        return error.clerk_digest === CONTROL_FLOW_ERROR.REDIRECT_TO_SIGN_IN;
    }
    return false;
}
;
 //# sourceMappingURL=nextErrors.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/nextFetcher.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isNextFetcher": (()=>isNextFetcher)
});
function isNextFetcher(fetch) {
    return "__nextPatched" in fetch && fetch.__nextPatched === true;
}
;
 //# sourceMappingURL=nextFetcher.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/protect.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createProtect": (()=>createProtect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/internal.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextFetcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/nextFetcher.js [middleware] (ecmascript)");
;
;
;
function createProtect(opts) {
    const { redirectToSignIn, authObject, redirect, notFound, request } = opts;
    return async (...args)=>{
        var _a, _b, _c, _d, _e, _f;
        const optionValuesAsParam = ((_a = args[0]) == null ? void 0 : _a.unauthenticatedUrl) || ((_b = args[0]) == null ? void 0 : _b.unauthorizedUrl);
        const paramsOrFunction = optionValuesAsParam ? void 0 : args[0];
        const unauthenticatedUrl = ((_c = args[0]) == null ? void 0 : _c.unauthenticatedUrl) || ((_d = args[1]) == null ? void 0 : _d.unauthenticatedUrl);
        const unauthorizedUrl = ((_e = args[0]) == null ? void 0 : _e.unauthorizedUrl) || ((_f = args[1]) == null ? void 0 : _f.unauthorizedUrl);
        const handleUnauthenticated = ()=>{
            if (unauthenticatedUrl) {
                return redirect(unauthenticatedUrl);
            }
            if (isPageRequest(request)) {
                return redirectToSignIn();
            }
            return notFound();
        };
        const handleUnauthorized = ()=>{
            if (unauthorizedUrl) {
                return redirect(unauthorizedUrl);
            }
            return notFound();
        };
        if (!authObject.userId) {
            return handleUnauthenticated();
        }
        if (!paramsOrFunction) {
            return authObject;
        }
        if (typeof paramsOrFunction === "function") {
            if (paramsOrFunction(authObject.has)) {
                return authObject;
            }
            return handleUnauthorized();
        }
        if (authObject.has(paramsOrFunction)) {
            return authObject;
        }
        return handleUnauthorized();
    };
}
const isServerActionRequest = (req)=>{
    var _a, _b;
    return !!req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constants"].Headers.NextUrl) && (((_a = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.Accept)) == null ? void 0 : _a.includes("text/x-component")) || ((_b = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ContentType)) == null ? void 0 : _b.includes("multipart/form-data")) || !!req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constants"].Headers.NextAction));
};
const isPageRequest = (req)=>{
    var _a;
    return req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.SecFetchDest) === "document" || req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.SecFetchDest) === "iframe" || ((_a = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.Accept)) == null ? void 0 : _a.includes("text/html")) || isAppRouterInternalNavigation(req) || isPagesRouterInternalNavigation(req);
};
const isAppRouterInternalNavigation = (req)=>!!req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constants"].Headers.NextUrl) && !isServerActionRequest(req) || isPagePathAvailable();
const isPagePathAvailable = ()=>{
    const __fetch = globalThis.fetch;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextFetcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isNextFetcher"])(__fetch)) {
        return false;
    }
    const { page, pagePath } = __fetch.__nextGetStaticStore().getStore() || {};
    return Boolean(// available on next@14
    pagePath || // available on next@15
    page);
};
const isPagesRouterInternalNavigation = (req)=>!!req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["constants"].Headers.NextjsData);
;
 //# sourceMappingURL=protect.js.map
}}),
"[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "clerkMiddleware": (()=>clerkMiddleware),
    "clerkMiddlewareRequestDataStorage": (()=>clerkMiddlewareRequestDataStorage),
    "createAuthenticateRequestOptions": (()=>createAuthenticateRequestOptions)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (node:async_hooks, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/internal.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/telemetry.mjs [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/esm/api/server.js [middleware] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$debugLogger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/utils/debugLogger.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errorThrower$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/errorThrower.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TUVJ3GI6$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TUVJ3GI6.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/chunk-HYKPXULP.mjs [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/utils/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$serverRedirectWithAuth$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/utils/serverRedirectWithAuth.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextErrors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/nextErrors.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$protect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+nextjs@6.2.0_next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e82_ge3lh3absj2brzrax3pfndyaau/node_modules/@clerk/nextjs/dist/esm/server/protect.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+backend@1.15.6_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028_ajiozmanuygu4tauxratfwmjaa/node_modules/@clerk/backend/dist/internal.mjs [middleware] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
const clerkMiddlewareRequestDataStore = /* @__PURE__ */ new Map();
const clerkMiddlewareRequestDataStorage = new __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__["AsyncLocalStorage"]();
const clerkMiddleware = (...args)=>{
    const [request, event] = parseRequestAndEvent(args);
    const [handler, params] = parseHandlerAndOptions(args);
    return clerkMiddlewareRequestDataStorage.run(clerkMiddlewareRequestDataStore, ()=>{
        const nextMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$debugLogger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["withLogger"])("clerkMiddleware", (logger)=>async (request2, event2)=>{
                const resolvedParams = typeof params === "function" ? params(request2) : params;
                const publishableKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["assertKey"])(resolvedParams.publishableKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PUBLISHABLE_KEY"], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errorThrower$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["errorThrower"].throwMissingPublishableKeyError());
                const secretKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["assertKey"])(resolvedParams.secretKey || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SECRET_KEY"], ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$errorThrower$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["errorThrower"].throwMissingSecretKeyError());
                const signInUrl = resolvedParams.signInUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SIGN_IN_URL"];
                const signUpUrl = resolvedParams.signUpUrl || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["SIGN_UP_URL"];
                const options = {
                    publishableKey,
                    secretKey,
                    signInUrl,
                    signUpUrl,
                    ...resolvedParams
                };
                clerkMiddlewareRequestDataStore.set("requestData", options);
                const resolvedClerkClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["clerkClient"])();
                resolvedClerkClient.telemetry.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TUVJ3GI6$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["eventMethodCalled"])("clerkMiddleware", {
                    handler: Boolean(handler),
                    satellite: Boolean(options.isSatellite),
                    proxy: Boolean(options.proxyUrl)
                }));
                if (options.debug) {
                    logger.enable();
                }
                const clerkRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClerkRequest"])(request2);
                logger.debug("options", options);
                logger.debug("url", ()=>clerkRequest.toJSON());
                const requestState = await resolvedClerkClient.authenticateRequest(clerkRequest, createAuthenticateRequestOptions(clerkRequest, options));
                logger.debug("requestState", ()=>({
                        status: requestState.status,
                        headers: JSON.stringify(Object.fromEntries(requestState.headers)),
                        reason: requestState.reason
                    }));
                const locationHeader = requestState.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.Location);
                if (locationHeader) {
                    return new Response(null, {
                        status: 307,
                        headers: requestState.headers
                    });
                } else if (requestState.status === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AuthStatus"].Handshake) {
                    throw new Error("Clerk: handshake status without redirect");
                }
                const authObject = requestState.toAuth();
                logger.debug("auth", ()=>({
                        auth: authObject,
                        debug: authObject.debug()
                    }));
                const redirectToSignIn = createMiddlewareRedirectToSignIn(clerkRequest);
                const protect = await createMiddlewareProtect(clerkRequest, authObject, redirectToSignIn);
                const authObjWithMethods = Object.assign(authObject, {
                    redirectToSignIn
                });
                const authHandler = ()=>Promise.resolve(authObjWithMethods);
                authHandler.protect = protect;
                let handlerResult = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
                try {
                    const userHandlerResult = await clerkMiddlewareRequestDataStorage.run(clerkMiddlewareRequestDataStore, async ()=>handler == null ? void 0 : handler(authHandler, request2, event2));
                    handlerResult = userHandlerResult || handlerResult;
                } catch (e) {
                    handlerResult = handleControlFlowErrors(e, clerkRequest, requestState);
                }
                if (requestState.headers) {
                    requestState.headers.forEach((value, key)=>{
                        handlerResult.headers.append(key, value);
                    });
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isRedirect"])(handlerResult)) {
                    logger.debug("handlerResult is redirect");
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$serverRedirectWithAuth$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["serverRedirectWithAuth"])(clerkRequest, handlerResult, options);
                }
                if (options.debug) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["setRequestHeadersOnNextResponse"])(handlerResult, clerkRequest, {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.EnableDebug]: "true"
                    });
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decorateRequest"])(clerkRequest, handlerResult, requestState, resolvedParams);
                return handlerResult;
            });
        if (request && event) {
            return nextMiddleware(request, event);
        }
        return nextMiddleware;
    });
};
const parseRequestAndEvent = (args)=>{
    return [
        args[0] instanceof Request ? args[0] : void 0,
        args[0] instanceof Request ? args[1] : void 0
    ];
};
const parseHandlerAndOptions = (args)=>{
    return [
        typeof args[0] === "function" ? args[0] : void 0,
        (args.length === 2 ? args[1] : typeof args[0] === "function" ? {} : args[0]) || {}
    ];
};
const createAuthenticateRequestOptions = (clerkRequest, options)=>{
    return {
        ...options,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["handleMultiDomainAndProxy"])(clerkRequest, options)
    };
};
const createMiddlewareRedirectToSignIn = (clerkRequest)=>{
    return (opts = {})=>{
        const url = clerkRequest.clerkUrl.toString();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextErrors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["redirectToSignInError"])(url, opts.returnBackUrl);
    };
};
const createMiddlewareProtect = (clerkRequest, authObject, redirectToSignIn)=>{
    return async (params, options)=>{
        const notFound = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextErrors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["nextjsNotFound"])();
        const redirect = (url)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextErrors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["nextjsRedirectError"])(url, {
                redirectUrl: url
            });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$protect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createProtect"])({
            request: clerkRequest,
            redirect,
            notFound,
            authObject,
            redirectToSignIn
        })(params, options);
    };
};
const handleControlFlowErrors = (e, clerkRequest, requestState)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextErrors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isNextjsNotFoundError"])(e)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$utils$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["setHeader"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].rewrite(`${clerkRequest.clerkUrl.origin}/clerk_${Date.now()}`), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HYKPXULP$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.AuthReason, "protect-rewrite");
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextErrors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isRedirectToSignInError"])(e)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$backend$40$1$2e$15$2e$6_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_ajiozmanuygu4tauxratfwmjaa$2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createRedirect"])({
            redirectAdapter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["redirectAdapter"],
            baseUrl: clerkRequest.clerkUrl,
            signInUrl: requestState.signInUrl,
            signUpUrl: requestState.signUpUrl,
            publishableKey: requestState.publishableKey
        }).redirectToSignIn({
            returnBackUrl: e.returnBackUrl
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$nextErrors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isNextjsRedirectError"])(e)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$nextjs$40$6$2e$2$2e$0_next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e82_ge3lh3absj2brzrax3pfndyaau$2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["redirectAdapter"])(e.redirectUrl);
    }
    throw e;
};
;
 //# sourceMappingURL=clerkMiddleware.js.map
}}),
}]);

//# sourceMappingURL=e96f2_%40clerk_nextjs_dist_esm_3d992d._.js.map