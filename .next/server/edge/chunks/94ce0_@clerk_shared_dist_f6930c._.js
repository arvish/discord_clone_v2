(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/94ce0_@clerk_shared_dist_f6930c._.js", {

"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/isomorphicAtob.ts
__turbopack_esm__({
    "isomorphicAtob": (()=>isomorphicAtob)
});
var isomorphicAtob = (data)=>{
    if (typeof atob !== "undefined" && typeof atob === "function") {
        return atob(data);
    } else if (typeof global !== "undefined" && global.Buffer) {
        return new global.Buffer(data, "base64").toString();
    }
    return data;
};
;
 //# sourceMappingURL=chunk-TETGTEI2.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "__export": (()=>__export),
    "__privateAdd": (()=>__privateAdd),
    "__privateGet": (()=>__privateGet),
    "__privateMethod": (()=>__privateMethod),
    "__privateSet": (()=>__privateSet),
    "__reExport": (()=>__reExport)
});
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __reExport = (target, mod, secondTarget)=>(__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
;
 //# sourceMappingURL=chunk-7ELT755Q.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/isomorphicAtob.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=isomorphicAtob.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/isomorphicAtob.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$isomorphicAtob$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/isomorphicAtob.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-T4WHYQYX.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/error.ts
__turbopack_esm__({
    "ClerkAPIResponseError": (()=>ClerkAPIResponseError),
    "ClerkRuntimeError": (()=>ClerkRuntimeError),
    "EmailLinkError": (()=>EmailLinkError),
    "EmailLinkErrorCode": (()=>EmailLinkErrorCode),
    "buildErrorThrower": (()=>buildErrorThrower),
    "is4xxError": (()=>is4xxError),
    "isCaptchaError": (()=>isCaptchaError),
    "isClerkAPIResponseError": (()=>isClerkAPIResponseError),
    "isClerkRuntimeError": (()=>isClerkRuntimeError),
    "isEmailLinkError": (()=>isEmailLinkError),
    "isKnownError": (()=>isKnownError),
    "isMetamaskError": (()=>isMetamaskError),
    "isNetworkError": (()=>isNetworkError),
    "isPasswordPwnedError": (()=>isPasswordPwnedError),
    "isUnauthorizedError": (()=>isUnauthorizedError),
    "isUserLockedError": (()=>isUserLockedError),
    "parseError": (()=>parseError),
    "parseErrors": (()=>parseErrors)
});
function isUnauthorizedError(e) {
    var _a, _b;
    const status = e == null ? void 0 : e.status;
    const code = (_b = (_a = e == null ? void 0 : e.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.code;
    return code === "authentication_invalid" && status === 401;
}
function isCaptchaError(e) {
    return [
        "captcha_invalid",
        "captcha_not_enabled",
        "captcha_missing_token"
    ].includes(e.errors[0].code);
}
function is4xxError(e) {
    const status = e == null ? void 0 : e.status;
    return !!status && status >= 400 && status < 500;
}
function isNetworkError(e) {
    const message = (`${e.message}${e.name}` || "").toLowerCase().replace(/\s+/g, "");
    return message.includes("networkerror");
}
function isKnownError(error) {
    return isClerkAPIResponseError(error) || isMetamaskError(error) || isClerkRuntimeError(error);
}
function isClerkAPIResponseError(err) {
    return "clerkError" in err;
}
function isClerkRuntimeError(err) {
    return "clerkRuntimeError" in err;
}
function isMetamaskError(err) {
    return "code" in err && [
        4001,
        32602,
        32603
    ].includes(err.code) && "message" in err;
}
function isUserLockedError(err) {
    var _a, _b;
    return isClerkAPIResponseError(err) && ((_b = (_a = err.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.code) === "user_locked";
}
function isPasswordPwnedError(err) {
    var _a, _b;
    return isClerkAPIResponseError(err) && ((_b = (_a = err.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.code) === "form_password_pwned";
}
function parseErrors(data = []) {
    return data.length > 0 ? data.map(parseError) : [];
}
function parseError(error) {
    var _a, _b, _c, _d, _e;
    return {
        code: error.code,
        message: error.message,
        longMessage: error.long_message,
        meta: {
            paramName: (_a = error == null ? void 0 : error.meta) == null ? void 0 : _a.param_name,
            sessionId: (_b = error == null ? void 0 : error.meta) == null ? void 0 : _b.session_id,
            emailAddresses: (_c = error == null ? void 0 : error.meta) == null ? void 0 : _c.email_addresses,
            identifiers: (_d = error == null ? void 0 : error.meta) == null ? void 0 : _d.identifiers,
            zxcvbn: (_e = error == null ? void 0 : error.meta) == null ? void 0 : _e.zxcvbn
        }
    };
}
var ClerkAPIResponseError = class _ClerkAPIResponseError extends Error {
    constructor(message, { data, status, clerkTraceId }){
        super(message);
        this.toString = ()=>{
            let message = `[${this.name}]
Message:${this.message}
Status:${this.status}
Serialized errors: ${this.errors.map((e)=>JSON.stringify(e))}`;
            if (this.clerkTraceId) {
                message += `
Clerk Trace ID: ${this.clerkTraceId}`;
            }
            return message;
        };
        Object.setPrototypeOf(this, _ClerkAPIResponseError.prototype);
        this.status = status;
        this.message = message;
        this.clerkTraceId = clerkTraceId;
        this.clerkError = true;
        this.errors = parseErrors(data);
    }
};
var ClerkRuntimeError = class _ClerkRuntimeError extends Error {
    constructor(message, { code }){
        super(message);
        /**
     * Returns a string representation of the error.
     *
     * @returns {string} A formatted string with the error name and message.
     * @memberof ClerkRuntimeError
     */ this.toString = ()=>{
            return `[${this.name}]
Message:${this.message}`;
        };
        Object.setPrototypeOf(this, _ClerkRuntimeError.prototype);
        this.code = code;
        this.message = message;
        this.clerkRuntimeError = true;
    }
};
var EmailLinkError = class _EmailLinkError extends Error {
    constructor(code){
        super(code);
        this.code = code;
        Object.setPrototypeOf(this, _EmailLinkError.prototype);
    }
};
function isEmailLinkError(err) {
    return err instanceof EmailLinkError;
}
var EmailLinkErrorCode = {
    Expired: "expired",
    Failed: "failed",
    ClientMismatch: "client_mismatch"
};
var DefaultMessages = Object.freeze({
    InvalidProxyUrlErrorMessage: `The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})`,
    InvalidPublishableKeyErrorMessage: `The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})`,
    MissingPublishableKeyErrorMessage: `Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
    MissingSecretKeyErrorMessage: `Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.`,
    MissingClerkProvider: `{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`
});
function buildErrorThrower({ packageName, customMessages }) {
    let pkg = packageName;
    const messages = {
        ...DefaultMessages,
        ...customMessages
    };
    function buildMessage(rawMessage, replacements) {
        if (!replacements) {
            return `${pkg}: ${rawMessage}`;
        }
        let msg = rawMessage;
        const matches = rawMessage.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);
        for (const match of matches){
            const replacement = (replacements[match[1]] || "").toString();
            msg = msg.replace(`{{${match[1]}}}`, replacement);
        }
        return `${pkg}: ${msg}`;
    }
    return {
        setPackageName ({ packageName: packageName2 }) {
            if (typeof packageName2 === "string") {
                pkg = packageName2;
            }
            return this;
        },
        setMessages ({ customMessages: customMessages2 }) {
            Object.assign(messages, customMessages2 || {});
            return this;
        },
        throwInvalidPublishableKeyError (params) {
            throw new Error(buildMessage(messages.InvalidPublishableKeyErrorMessage, params));
        },
        throwInvalidProxyUrl (params) {
            throw new Error(buildMessage(messages.InvalidProxyUrlErrorMessage, params));
        },
        throwMissingPublishableKeyError () {
            throw new Error(buildMessage(messages.MissingPublishableKeyErrorMessage));
        },
        throwMissingSecretKeyError () {
            throw new Error(buildMessage(messages.MissingSecretKeyErrorMessage));
        },
        throwMissingClerkProviderError (params) {
            throw new Error(buildMessage(messages.MissingClerkProvider, params));
        },
        throw (message) {
            throw new Error(buildMessage(message));
        }
    };
}
;
 //# sourceMappingURL=chunk-T4WHYQYX.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/error.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=error.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/error.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-T4WHYQYX.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/error.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/utils/instance.ts
__turbopack_esm__({
    "isStaging": (()=>isStaging)
});
function isStaging(frontendApi) {
    return frontendApi.endsWith(".lclstage.dev") || frontendApi.endsWith(".stgstage.dev") || frontendApi.endsWith(".clerkstage.dev") || frontendApi.endsWith(".accountsstage.dev");
}
;
 //# sourceMappingURL=chunk-3TMSNP4L.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/constants.ts
__turbopack_esm__({
    "CURRENT_DEV_INSTANCE_SUFFIXES": (()=>CURRENT_DEV_INSTANCE_SUFFIXES),
    "DEV_OR_STAGING_SUFFIXES": (()=>DEV_OR_STAGING_SUFFIXES),
    "LEGACY_DEV_INSTANCE_SUFFIXES": (()=>LEGACY_DEV_INSTANCE_SUFFIXES),
    "LOCAL_API_URL": (()=>LOCAL_API_URL),
    "LOCAL_ENV_SUFFIXES": (()=>LOCAL_ENV_SUFFIXES),
    "PROD_API_URL": (()=>PROD_API_URL),
    "STAGING_API_URL": (()=>STAGING_API_URL),
    "STAGING_ENV_SUFFIXES": (()=>STAGING_ENV_SUFFIXES),
    "iconImageUrl": (()=>iconImageUrl)
});
var LEGACY_DEV_INSTANCE_SUFFIXES = [
    ".lcl.dev",
    ".lclstage.dev",
    ".lclclerk.com"
];
var CURRENT_DEV_INSTANCE_SUFFIXES = [
    ".accounts.dev",
    ".accountsstage.dev",
    ".accounts.lclclerk.com"
];
var DEV_OR_STAGING_SUFFIXES = [
    ".lcl.dev",
    ".stg.dev",
    ".lclstage.dev",
    ".stgstage.dev",
    ".dev.lclclerk.com",
    ".stg.lclclerk.com",
    ".accounts.lclclerk.com",
    "accountsstage.dev",
    "accounts.dev"
];
var LOCAL_ENV_SUFFIXES = [
    ".lcl.dev",
    "lclstage.dev",
    ".lclclerk.com",
    ".accounts.lclclerk.com"
];
var STAGING_ENV_SUFFIXES = [
    ".accountsstage.dev"
];
var LOCAL_API_URL = "https://api.lclclerk.com";
var STAGING_API_URL = "https://api.clerkstage.dev";
var PROD_API_URL = "https://api.clerk.com";
function iconImageUrl(id, format = "svg") {
    return `https://img.clerk.com/static/${id}.${format}`;
}
;
 //# sourceMappingURL=chunk-I6MTSTOF.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addClerkPrefix": (()=>addClerkPrefix),
    "cleanDoubleSlashes": (()=>cleanDoubleSlashes),
    "getClerkJsMajorVersionOrTag": (()=>getClerkJsMajorVersionOrTag),
    "getScriptUrl": (()=>getScriptUrl),
    "hasLeadingSlash": (()=>hasLeadingSlash),
    "hasTrailingSlash": (()=>hasTrailingSlash),
    "isAbsoluteUrl": (()=>isAbsoluteUrl),
    "isCurrentDevAccountPortalOrigin": (()=>isCurrentDevAccountPortalOrigin),
    "isLegacyDevAccountPortalOrigin": (()=>isLegacyDevAccountPortalOrigin),
    "isNonEmptyURL": (()=>isNonEmptyURL),
    "joinURL": (()=>joinURL),
    "parseSearchParams": (()=>parseSearchParams),
    "stripScheme": (()=>stripScheme),
    "withLeadingSlash": (()=>withLeadingSlash),
    "withTrailingSlash": (()=>withTrailingSlash),
    "withoutLeadingSlash": (()=>withoutLeadingSlash),
    "withoutTrailingSlash": (()=>withoutTrailingSlash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [middleware] (ecmascript)");
;
;
// src/url.ts
function parseSearchParams(queryString = "") {
    if (queryString.startsWith("?")) {
        queryString = queryString.slice(1);
    }
    return new URLSearchParams(queryString);
}
function stripScheme(url = "") {
    return (url || "").replace(/^.+:\/\//, "");
}
function addClerkPrefix(str) {
    if (!str) {
        return "";
    }
    let regex;
    if (str.match(/^(clerk\.)+\w*$/)) {
        regex = /(clerk\.)*(?=clerk\.)/;
    } else if (str.match(/\.clerk.accounts/)) {
        return str;
    } else {
        regex = /^(clerk\.)*/gi;
    }
    const stripped = str.replace(regex, "");
    return `clerk.${stripped}`;
}
var getClerkJsMajorVersionOrTag = (frontendApi, version)=>{
    if (!version && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isStaging"])(frontendApi)) {
        return "canary";
    }
    if (!version) {
        return "latest";
    }
    return version.split(".")[0] || "latest";
};
var getScriptUrl = (frontendApi, { clerkJSVersion })=>{
    const noSchemeFrontendApi = frontendApi.replace(/http(s)?:\/\//, "");
    const major = getClerkJsMajorVersionOrTag(frontendApi, clerkJSVersion);
    return `https://${noSchemeFrontendApi}/npm/@clerk/clerk-js@${clerkJSVersion || major}/dist/clerk.browser.js`;
};
function isLegacyDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((legacyDevSuffix)=>{
        return host.startsWith("accounts.") && host.endsWith(legacyDevSuffix);
    });
}
function isCurrentDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["CURRENT_DEV_INSTANCE_SUFFIXES"].some((currentDevSuffix)=>{
        return host.endsWith(currentDevSuffix) && !host.endsWith(".clerk" + currentDevSuffix);
    });
}
var TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
function hasTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) {
        return input.endsWith("/");
    }
    return TRAILING_SLASH_RE.test(input);
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) {
        return input.endsWith("/") ? input : input + "/";
    }
    if (hasTrailingSlash(input, true)) {
        return input || "/";
    }
    let path = input;
    let fragment = "";
    const fragmentIndex = input.indexOf("#");
    if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
        if (!path) {
            return fragment;
        }
    }
    const [s0, ...s] = path.split("?");
    return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
    if (!respectQueryAndFragment) {
        return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
    }
    if (!hasTrailingSlash(input, true)) {
        return input || "/";
    }
    let path = input;
    let fragment = "";
    const fragmentIndex = input.indexOf("#");
    if (fragmentIndex >= 0) {
        path = input.slice(0, fragmentIndex);
        fragment = input.slice(fragmentIndex);
    }
    const [s0, ...s] = path.split("?");
    return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
    return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
    return (hasLeadingSlash(input) ? input.slice(1) : input) || "/";
}
function withLeadingSlash(input = "") {
    return hasLeadingSlash(input) ? input : "/" + input;
}
function cleanDoubleSlashes(input = "") {
    return input.split("://").map((string_)=>string_.replace(/\/{2,}/g, "/")).join("://");
}
function isNonEmptyURL(url) {
    return url && url !== "/";
}
var JOIN_LEADING_SLASH_RE = /^\.?\//;
function joinURL(base, ...input) {
    let url = base || "";
    for (const segment of input.filter((url2)=>isNonEmptyURL(url2))){
        if (url) {
            const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
            url = withTrailingSlash(url) + _segment;
        } else {
            url = segment;
        }
    }
    return url;
}
var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
var isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
;
 //# sourceMappingURL=chunk-IFTVZ2LQ.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/url.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
 //# sourceMappingURL=url.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/url.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/url.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-4PW5MDZA.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/callWithRetry.ts
__turbopack_esm__({
    "callWithRetry": (()=>callWithRetry)
});
function wait(ms) {
    return new Promise((res)=>setTimeout(res, ms));
}
var MAX_NUMBER_OF_RETRIES = 5;
async function callWithRetry(fn, attempt = 1, maxAttempts = MAX_NUMBER_OF_RETRIES) {
    try {
        return await fn();
    } catch (e) {
        if (attempt >= maxAttempts) {
            throw e;
        }
        await wait(2 ** attempt * 100);
        return callWithRetry(fn, attempt + 1, maxAttempts);
    }
}
;
 //# sourceMappingURL=chunk-4PW5MDZA.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/callWithRetry.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=callWithRetry.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/callWithRetry.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$4PW5MDZA$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-4PW5MDZA.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$callWithRetry$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/callWithRetry.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/isomorphicBtoa.ts
__turbopack_esm__({
    "isomorphicBtoa": (()=>isomorphicBtoa)
});
var isomorphicBtoa = (data)=>{
    if (typeof btoa !== "undefined" && typeof btoa === "function") {
        return btoa(data);
    } else if (typeof global !== "undefined" && global.Buffer) {
        return new global.Buffer(data).toString("base64");
    }
    return data;
};
;
 //# sourceMappingURL=chunk-KOH7GTJO.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "buildPublishableKey": (()=>buildPublishableKey),
    "createDevOrStagingUrlCache": (()=>createDevOrStagingUrlCache),
    "getCookieSuffix": (()=>getCookieSuffix),
    "getSuffixedCookieName": (()=>getSuffixedCookieName),
    "isDevelopmentFromPublishableKey": (()=>isDevelopmentFromPublishableKey),
    "isDevelopmentFromSecretKey": (()=>isDevelopmentFromSecretKey),
    "isProductionFromPublishableKey": (()=>isProductionFromPublishableKey),
    "isProductionFromSecretKey": (()=>isProductionFromSecretKey),
    "isPublishableKey": (()=>isPublishableKey),
    "parsePublishableKey": (()=>parsePublishableKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [middleware] (ecmascript)");
;
;
;
// src/keys.ts
var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
var PUBLISHABLE_FRONTEND_API_DEV_REGEX = /^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i;
function buildPublishableKey(frontendApi) {
    const isDevKey = PUBLISHABLE_FRONTEND_API_DEV_REGEX.test(frontendApi) || frontendApi.startsWith("clerk.") && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((s)=>frontendApi.endsWith(s));
    const keyPrefix = isDevKey ? PUBLISHABLE_KEY_TEST_PREFIX : PUBLISHABLE_KEY_LIVE_PREFIX;
    return `${keyPrefix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isomorphicBtoa"])(`${frontendApi}$`)}`;
}
function parsePublishableKey(key, options = {}) {
    key = key || "";
    if (!key || !isPublishableKey(key)) {
        if (options.fatal) {
            throw new Error("Publishable key not valid.");
        }
        return null;
    }
    const instanceType = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) ? "production" : "development";
    let frontendApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isomorphicAtob"])(key.split("_")[2]);
    frontendApi = frontendApi.slice(0, -1);
    if (options.proxyUrl) {
        frontendApi = options.proxyUrl;
    } else if (instanceType !== "development" && options.domain) {
        frontendApi = `clerk.${options.domain}`;
    }
    return {
        instanceType,
        frontendApi
    };
}
function isPublishableKey(key) {
    key = key || "";
    const hasValidPrefix = key.startsWith(PUBLISHABLE_KEY_LIVE_PREFIX) || key.startsWith(PUBLISHABLE_KEY_TEST_PREFIX);
    const hasValidFrontendApiPostfix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isomorphicAtob"])(key.split("_")[2] || "").endsWith("$");
    return hasValidPrefix && hasValidFrontendApiPostfix;
}
function createDevOrStagingUrlCache() {
    const devOrStagingUrlCache = /* @__PURE__ */ new Map();
    return {
        isDevOrStagingUrl: (url)=>{
            if (!url) {
                return false;
            }
            const hostname = typeof url === "string" ? url : url.hostname;
            let res = devOrStagingUrlCache.get(hostname);
            if (res === void 0) {
                res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["DEV_OR_STAGING_SUFFIXES"].some((s)=>hostname.endsWith(s));
                devOrStagingUrlCache.set(hostname, res);
            }
            return res;
        }
    };
}
function isDevelopmentFromPublishableKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("pk_test_");
}
function isProductionFromPublishableKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("pk_live_");
}
function isDevelopmentFromSecretKey(apiKey) {
    return apiKey.startsWith("test_") || apiKey.startsWith("sk_test_");
}
function isProductionFromSecretKey(apiKey) {
    return apiKey.startsWith("live_") || apiKey.startsWith("sk_live_");
}
async function getCookieSuffix(publishableKey, subtle = globalThis.crypto.subtle) {
    const data = new TextEncoder().encode(publishableKey);
    const digest = await subtle.digest("sha-1", data);
    const stringDigest = String.fromCharCode(...new Uint8Array(digest));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isomorphicBtoa"])(stringDigest).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
}
var getSuffixedCookieName = (cookieName, cookieSuffix)=>{
    return `${cookieName}_${cookieSuffix}`;
};
;
 //# sourceMappingURL=chunk-L2BNNARM.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/keys.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
 //# sourceMappingURL=keys.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/keys.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/keys.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QMOEH4QX.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/utils/runtimeEnvironment.ts
__turbopack_esm__({
    "isDevelopmentEnvironment": (()=>isDevelopmentEnvironment),
    "isProductionEnvironment": (()=>isProductionEnvironment),
    "isTestEnvironment": (()=>isTestEnvironment)
});
var isDevelopmentEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "development";
    } catch (err) {}
    return false;
};
var isTestEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "test";
    } catch (err) {}
    return false;
};
var isProductionEnvironment = ()=>{
    try {
        return ("TURBOPACK compile-time value", "development") === "production";
    } catch (err) {}
    return false;
};
;
 //# sourceMappingURL=chunk-QMOEH4QX.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-4EIZQYWK.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "deprecated": (()=>deprecated),
    "deprecatedObjectProperty": (()=>deprecatedObjectProperty),
    "deprecatedProperty": (()=>deprecatedProperty)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QMOEH4QX.mjs [middleware] (ecmascript)");
;
// src/deprecated.ts
var displayedWarnings = /* @__PURE__ */ new Set();
var deprecated = (fnName, warning, key)=>{
    const hideWarning = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isTestEnvironment"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isProductionEnvironment"])();
    const messageId = key != null ? key : fnName;
    if (displayedWarnings.has(messageId) || hideWarning) {
        return;
    }
    displayedWarnings.add(messageId);
    console.warn(`Clerk - DEPRECATION WARNING: "${fnName}" is deprecated and will be removed in the next major release.
${warning}`);
};
var deprecatedProperty = (cls, propName, warning, isStatic = false)=>{
    const target = isStatic ? cls : cls.prototype;
    let value = target[propName];
    Object.defineProperty(target, propName, {
        get () {
            deprecated(propName, warning, `${cls.name}:${propName}`);
            return value;
        },
        set (v) {
            value = v;
        }
    });
};
var deprecatedObjectProperty = (obj, propName, warning, key)=>{
    let value = obj[propName];
    Object.defineProperty(obj, propName, {
        get () {
            deprecated(propName, warning, key);
            return value;
        },
        set (v) {
            value = v;
        }
    });
};
;
 //# sourceMappingURL=chunk-4EIZQYWK.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/deprecated.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
 //# sourceMappingURL=deprecated.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/deprecated.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$4EIZQYWK$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-4EIZQYWK.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QMOEH4QX.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$deprecated$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/deprecated.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/authorization.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createCheckAuthorization": (()=>createCheckAuthorization)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
;
// src/authorization.ts
var TYPES_TO_OBJECTS = {
    veryStrict: {
        afterMinutes: 10,
        level: "multiFactor"
    },
    strict: {
        afterMinutes: 10,
        level: "secondFactor"
    },
    moderate: {
        afterMinutes: 60,
        level: "secondFactor"
    },
    lax: {
        afterMinutes: 1440,
        level: "secondFactor"
    }
};
var ALLOWED_LEVELS = /* @__PURE__ */ new Set([
    "firstFactor",
    "secondFactor",
    "multiFactor"
]);
var ALLOWED_TYPES = /* @__PURE__ */ new Set([
    "veryStrict",
    "strict",
    "moderate",
    "lax"
]);
var isValidMaxAge = (maxAge)=>typeof maxAge === "number" && maxAge > 0;
var isValidLevel = (level)=>ALLOWED_LEVELS.has(level);
var isValidVerificationType = (type)=>ALLOWED_TYPES.has(type);
var checkOrgAuthorization = (params, options)=>{
    const { orgId, orgRole, orgPermissions } = options;
    if (!params.role && !params.permission) {
        return null;
    }
    if (!orgId || !orgRole || !orgPermissions) {
        return null;
    }
    if (params.permission) {
        return orgPermissions.includes(params.permission);
    }
    if (params.role) {
        return orgRole === params.role;
    }
    return null;
};
var validateReverificationConfig = (config)=>{
    const convertConfigToObject = (config2)=>{
        if (typeof config2 === "string") {
            return TYPES_TO_OBJECTS[config2];
        }
        return config2;
    };
    if (typeof config === "string" && isValidVerificationType(config)) {
        return convertConfigToObject.bind(null, config);
    }
    if (typeof config === "object" && isValidLevel(config.level) && isValidMaxAge(config.afterMinutes)) {
        return convertConfigToObject.bind(null, config);
    }
    return false;
};
var checkStepUpAuthorization = (params, { __experimental_factorVerificationAge })=>{
    if (!params.__experimental_reverification || !__experimental_factorVerificationAge) {
        return null;
    }
    const isValidReverification = validateReverificationConfig(params.__experimental_reverification);
    if (!isValidReverification) {
        return null;
    }
    const { level, afterMinutes } = isValidReverification();
    const [factor1Age, factor2Age] = __experimental_factorVerificationAge;
    const isValidFactor1 = factor1Age !== -1 ? afterMinutes > factor1Age : null;
    const isValidFactor2 = factor2Age !== -1 ? afterMinutes > factor2Age : null;
    switch(level){
        case "firstFactor":
            return isValidFactor1;
        case "secondFactor":
            return factor2Age !== -1 ? isValidFactor2 : isValidFactor1;
        case "multiFactor":
            return factor2Age === -1 ? isValidFactor1 : isValidFactor1 && isValidFactor2;
    }
};
var createCheckAuthorization = (options)=>{
    return (params)=>{
        if (!options.userId) {
            return false;
        }
        const orgAuthorization = checkOrgAuthorization(params, options);
        const stepUpAuthorization = checkStepUpAuthorization(params, options);
        if ([
            orgAuthorization,
            stepUpAuthorization
        ].some((a)=>a === null)) {
            return [
                orgAuthorization,
                stepUpAuthorization
            ].some((a)=>a === true);
        }
        return [
            orgAuthorization,
            stepUpAuthorization
        ].every((a)=>a === true);
    };
};
;
 //# sourceMappingURL=authorization.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/pathToRegexp.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "match": (()=>match),
    "pathToRegexp": (()=>pathToRegexp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
;
// src/compiled/path-to-regexp/index.js
function _(r) {
    for(var n = [], e = 0; e < r.length;){
        var a = r[e];
        if (a === "*" || a === "+" || a === "?") {
            n.push({
                type: "MODIFIER",
                index: e,
                value: r[e++]
            });
            continue;
        }
        if (a === "\\") {
            n.push({
                type: "ESCAPED_CHAR",
                index: e++,
                value: r[e++]
            });
            continue;
        }
        if (a === "{") {
            n.push({
                type: "OPEN",
                index: e,
                value: r[e++]
            });
            continue;
        }
        if (a === "}") {
            n.push({
                type: "CLOSE",
                index: e,
                value: r[e++]
            });
            continue;
        }
        if (a === ":") {
            for(var u = "", t = e + 1; t < r.length;){
                var c = r.charCodeAt(t);
                if (c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || c === 95) {
                    u += r[t++];
                    continue;
                }
                break;
            }
            if (!u) throw new TypeError("Missing parameter name at ".concat(e));
            n.push({
                type: "NAME",
                index: e,
                value: u
            }), e = t;
            continue;
        }
        if (a === "(") {
            var o = 1, m = "", t = e + 1;
            if (r[t] === "?") throw new TypeError('Pattern cannot start with "?" at '.concat(t));
            for(; t < r.length;){
                if (r[t] === "\\") {
                    m += r[t++] + r[t++];
                    continue;
                }
                if (r[t] === ")") {
                    if (o--, o === 0) {
                        t++;
                        break;
                    }
                } else if (r[t] === "(" && (o++, r[t + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at ".concat(t));
                m += r[t++];
            }
            if (o) throw new TypeError("Unbalanced pattern at ".concat(e));
            if (!m) throw new TypeError("Missing pattern at ".concat(e));
            n.push({
                type: "PATTERN",
                index: e,
                value: m
            }), e = t;
            continue;
        }
        n.push({
            type: "CHAR",
            index: e,
            value: r[e++]
        });
    }
    return n.push({
        type: "END",
        index: e,
        value: ""
    }), n;
}
function F(r, n) {
    n === void 0 && (n = {});
    for(var e = _(r), a = n.prefixes, u = a === void 0 ? "./" : a, t = n.delimiter, c = t === void 0 ? "/#?" : t, o = [], m = 0, h = 0, p = "", f = function(l) {
        if (h < e.length && e[h].type === l) return e[h++].value;
    }, w = function(l) {
        var v = f(l);
        if (v !== void 0) return v;
        var E = e[h], N = E.type, S = E.index;
        throw new TypeError("Unexpected ".concat(N, " at ").concat(S, ", expected ").concat(l));
    }, d = function() {
        for(var l = "", v; v = f("CHAR") || f("ESCAPED_CHAR");)l += v;
        return l;
    }, M = function(l) {
        for(var v = 0, E = c; v < E.length; v++){
            var N = E[v];
            if (l.indexOf(N) > -1) return true;
        }
        return false;
    }, A = function(l) {
        var v = o[o.length - 1], E = l || (v && typeof v == "string" ? v : "");
        if (v && !E) throw new TypeError('Must have text between two parameters, missing text after "'.concat(v.name, '"'));
        return !E || M(E) ? "[^".concat(s(c), "]+?") : "(?:(?!".concat(s(E), ")[^").concat(s(c), "])+?");
    }; h < e.length;){
        var T = f("CHAR"), x = f("NAME"), C = f("PATTERN");
        if (x || C) {
            var g = T || "";
            u.indexOf(g) === -1 && (p += g, g = ""), p && (o.push(p), p = ""), o.push({
                name: x || m++,
                prefix: g,
                suffix: "",
                pattern: C || A(g),
                modifier: f("MODIFIER") || ""
            });
            continue;
        }
        var i = T || f("ESCAPED_CHAR");
        if (i) {
            p += i;
            continue;
        }
        p && (o.push(p), p = "");
        var R = f("OPEN");
        if (R) {
            var g = d(), y = f("NAME") || "", O = f("PATTERN") || "", b = d();
            w("CLOSE"), o.push({
                name: y || (O ? m++ : ""),
                pattern: y && !O ? A(g) : O,
                prefix: g,
                suffix: b,
                modifier: f("MODIFIER") || ""
            });
            continue;
        }
        w("END");
    }
    return o;
}
function H(r, n) {
    var e = [], a = P(r, e, n);
    return I(a, e, n);
}
function I(r, n, e) {
    e === void 0 && (e = {});
    var a = e.decode, u = a === void 0 ? function(t) {
        return t;
    } : a;
    return function(t) {
        var c = r.exec(t);
        if (!c) return false;
        for(var o = c[0], m = c.index, h = /* @__PURE__ */ Object.create(null), p = function(w) {
            if (c[w] === void 0) return "continue";
            var d = n[w - 1];
            d.modifier === "*" || d.modifier === "+" ? h[d.name] = c[w].split(d.prefix + d.suffix).map(function(M) {
                return u(M, d);
            }) : h[d.name] = u(c[w], d);
        }, f = 1; f < c.length; f++)p(f);
        return {
            path: o,
            index: m,
            params: h
        };
    };
}
function s(r) {
    return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function D(r) {
    return r && r.sensitive ? "" : "i";
}
function $(r, n) {
    if (!n) return r;
    for(var e = /\((?:\?<(.*?)>)?(?!\?)/g, a = 0, u = e.exec(r.source); u;)n.push({
        name: u[1] || a++,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
    }), u = e.exec(r.source);
    return r;
}
function W(r, n, e) {
    var a = r.map(function(u) {
        return P(u, n, e).source;
    });
    return new RegExp("(?:".concat(a.join("|"), ")"), D(e));
}
function L(r, n, e) {
    return U(F(r, e), n, e);
}
function U(r, n, e) {
    e === void 0 && (e = {});
    for(var a = e.strict, u = a === void 0 ? false : a, t = e.start, c = t === void 0 ? true : t, o = e.end, m = o === void 0 ? true : o, h = e.encode, p = h === void 0 ? function(v) {
        return v;
    } : h, f = e.delimiter, w = f === void 0 ? "/#?" : f, d = e.endsWith, M = d === void 0 ? "" : d, A = "[".concat(s(M), "]|$"), T = "[".concat(s(w), "]"), x = c ? "^" : "", C = 0, g = r; C < g.length; C++){
        var i = g[C];
        if (typeof i == "string") x += s(p(i));
        else {
            var R = s(p(i.prefix)), y = s(p(i.suffix));
            if (i.pattern) if (n && n.push(i), R || y) if (i.modifier === "+" || i.modifier === "*") {
                var O = i.modifier === "*" ? "?" : "";
                x += "(?:".concat(R, "((?:").concat(i.pattern, ")(?:").concat(y).concat(R, "(?:").concat(i.pattern, "))*)").concat(y, ")").concat(O);
            } else x += "(?:".concat(R, "(").concat(i.pattern, ")").concat(y, ")").concat(i.modifier);
            else {
                if (i.modifier === "+" || i.modifier === "*") throw new TypeError('Can not repeat "'.concat(i.name, '" without a prefix and suffix'));
                x += "(".concat(i.pattern, ")").concat(i.modifier);
            }
            else x += "(?:".concat(R).concat(y, ")").concat(i.modifier);
        }
    }
    if (m) u || (x += "".concat(T, "?")), x += e.endsWith ? "(?=".concat(A, ")") : "$";
    else {
        var b = r[r.length - 1], l = typeof b == "string" ? T.indexOf(b[b.length - 1]) > -1 : b === void 0;
        u || (x += "(?:".concat(T, "(?=").concat(A, "))?")), l || (x += "(?=".concat(T, "|").concat(A, ")"));
    }
    return new RegExp(x, D(e));
}
function P(r, n, e) {
    return r instanceof RegExp ? $(r, n) : Array.isArray(r) ? W(r, n, e) : L(r, n, e);
}
// src/pathToRegexp.ts
var pathToRegexp = (path)=>{
    try {
        return P(path);
    } catch (e) {
        throw new Error(`Invalid path: ${path}.
Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp/tree/6.x
${e.message}`);
    }
};
function match(str, options) {
    try {
        return H(str, options);
    } catch (e) {
        throw new Error(`Invalid path and options: Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp/tree/6.x
${e.message}`);
    }
}
;
 //# sourceMappingURL=pathToRegexp.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TUVJ3GI6.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/telemetry/events/method-called.ts
__turbopack_esm__({
    "eventMethodCalled": (()=>eventMethodCalled)
});
var EVENT_METHOD_CALLED = "METHOD_CALLED";
function eventMethodCalled(method, payload) {
    return {
        event: EVENT_METHOD_CALLED,
        payload: {
            method,
            ...payload
        }
    };
}
;
 //# sourceMappingURL=chunk-TUVJ3GI6.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE2A7CJI.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/underscore.ts
__turbopack_esm__({
    "camelToSnake": (()=>camelToSnake),
    "deepCamelToSnake": (()=>deepCamelToSnake),
    "deepSnakeToCamel": (()=>deepSnakeToCamel),
    "getNonUndefinedValues": (()=>getNonUndefinedValues),
    "isIPV4Address": (()=>isIPV4Address),
    "isTruthy": (()=>isTruthy),
    "snakeToCamel": (()=>snakeToCamel),
    "titleize": (()=>titleize),
    "toSentence": (()=>toSentence)
});
var toSentence = (items)=>{
    if (items.length == 0) {
        return "";
    }
    if (items.length == 1) {
        return items[0];
    }
    let sentence = items.slice(0, -1).join(", ");
    sentence += `, or ${items.slice(-1)}`;
    return sentence;
};
var IP_V4_ADDRESS_REGEX = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
function isIPV4Address(str) {
    return IP_V4_ADDRESS_REGEX.test(str || "");
}
function titleize(str) {
    const s = str || "";
    return s.charAt(0).toUpperCase() + s.slice(1);
}
function snakeToCamel(str) {
    return str ? str.replace(/([-_][a-z])/g, (match)=>match.toUpperCase().replace(/-|_/, "")) : "";
}
function camelToSnake(str) {
    return str ? str.replace(/[A-Z]/g, (letter)=>`_${letter.toLowerCase()}`) : "";
}
var createDeepObjectTransformer = (transform)=>{
    const deepTransform = (obj)=>{
        if (!obj) {
            return obj;
        }
        if (Array.isArray(obj)) {
            return obj.map((el)=>{
                if (typeof el === "object" || Array.isArray(el)) {
                    return deepTransform(el);
                }
                return el;
            });
        }
        const copy = {
            ...obj
        };
        const keys = Object.keys(copy);
        for (const oldName of keys){
            const newName = transform(oldName.toString());
            if (newName !== oldName) {
                copy[newName] = copy[oldName];
                delete copy[oldName];
            }
            if (typeof copy[newName] === "object") {
                copy[newName] = deepTransform(copy[newName]);
            }
        }
        return copy;
    };
    return deepTransform;
};
var deepCamelToSnake = createDeepObjectTransformer(camelToSnake);
var deepSnakeToCamel = createDeepObjectTransformer(snakeToCamel);
function isTruthy(value) {
    if (typeof value === `boolean`) {
        return value;
    }
    if (value === void 0 || value === null) {
        return false;
    }
    if (typeof value === `string`) {
        if (value.toLowerCase() === `true`) {
            return true;
        }
        if (value.toLowerCase() === `false`) {
            return false;
        }
    }
    const number = parseInt(value, 10);
    if (isNaN(number)) {
        return false;
    }
    if (number > 0) {
        return true;
    }
    return false;
}
function getNonUndefinedValues(obj) {
    return Object.entries(obj).reduce((acc, [key, value])=>{
        if (value !== void 0) {
            acc[key] = value;
        }
        return acc;
    }, {});
}
;
 //# sourceMappingURL=chunk-QE2A7CJI.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/telemetry.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "TelemetryCollector": (()=>TelemetryCollector),
    "eventComponentMounted": (()=>eventComponentMounted),
    "eventPrebuiltComponentMounted": (()=>eventPrebuiltComponentMounted)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE2A7CJI.mjs [middleware] (ecmascript)");
;
;
;
;
;
;
;
// src/telemetry/throttler.ts
var DEFAULT_CACHE_TTL_MS = 864e5;
var _storageKey, _cacheTtl, _TelemetryEventThrottler_instances, generateKey_fn, cache_get, isValidBrowser_get;
var TelemetryEventThrottler = class {
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _TelemetryEventThrottler_instances);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _storageKey, "clerk_telemetry_throttler");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _cacheTtl, DEFAULT_CACHE_TTL_MS);
    }
    isEventThrottled(payload) {
        var _a;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, isValidBrowser_get)) {
            return false;
        }
        const now = Date.now();
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryEventThrottler_instances, generateKey_fn).call(this, payload);
        const entry = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, cache_get)) == null ? void 0 : _a[key];
        if (!entry) {
            const updatedCache = {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, cache_get),
                [key]: now
            };
            localStorage.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey), JSON.stringify(updatedCache));
        }
        const shouldInvalidate = entry && now - entry > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _cacheTtl);
        if (shouldInvalidate) {
            const updatedCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, cache_get);
            delete updatedCache[key];
            localStorage.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey), JSON.stringify(updatedCache));
        }
        return !!entry;
    }
};
_storageKey = new WeakMap();
_cacheTtl = new WeakMap();
_TelemetryEventThrottler_instances = new WeakSet();
/**
 * Generates a consistent unique key for telemetry events by sorting payload properties.
 * This ensures that payloads with identical content in different orders produce the same key.
 */ generateKey_fn = function(event) {
    const { sk: _sk, pk: _pk, payload, ...rest } = event;
    const sanitizedEvent = {
        ...payload,
        ...rest
    };
    return JSON.stringify(Object.keys({
        ...payload,
        ...rest
    }).sort().map((key)=>sanitizedEvent[key]));
};
cache_get = function() {
    const cacheString = localStorage.getItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey));
    if (!cacheString) {
        return {};
    }
    return JSON.parse(cacheString);
};
isValidBrowser_get = function() {
    if ("TURBOPACK compile-time truthy", 1) {
        return false;
    }
    "TURBOPACK unreachable";
    const storage = undefined;
};
// src/telemetry/collector.ts
var DEFAULT_CONFIG = {
    samplingRate: 1,
    maxBufferSize: 5,
    // Production endpoint: https://clerk-telemetry.com
    // Staging endpoint: https://staging.clerk-telemetry.com
    // Local: http://localhost:8787
    endpoint: "https://clerk-telemetry.com"
};
var _config, _eventThrottler, _metadata, _buffer, _pendingFlush, _TelemetryCollector_instances, shouldRecord_fn, shouldBeSampled_fn, scheduleFlush_fn, flush_fn, logEvent_fn, getSDKMetadata_fn, preparePayload_fn;
var TelemetryCollector = class {
    constructor(options){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _TelemetryCollector_instances);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _config);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _eventThrottler);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _metadata, {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _buffer, []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _pendingFlush);
        var _a, _b, _c, _d, _e, _f;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateSet"])(this, _config, {
            maxBufferSize: (_a = options.maxBufferSize) != null ? _a : DEFAULT_CONFIG.maxBufferSize,
            samplingRate: (_b = options.samplingRate) != null ? _b : DEFAULT_CONFIG.samplingRate,
            disabled: (_c = options.disabled) != null ? _c : false,
            debug: (_d = options.debug) != null ? _d : false,
            endpoint: DEFAULT_CONFIG.endpoint
        });
        if (!options.clerkVersion && "undefined" === "undefined") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).clerkVersion = "";
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).clerkVersion = (_e = options.clerkVersion) != null ? _e : "";
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdk = options.sdk;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdkVersion = options.sdkVersion;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).publishableKey = (_f = options.publishableKey) != null ? _f : "";
        const parsedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["parsePublishableKey"])(options.publishableKey);
        if (parsedKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).instanceType = parsedKey.instanceType;
        }
        if (options.secretKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).secretKey = options.secretKey.substring(0, 16);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateSet"])(this, _eventThrottler, new TelemetryEventThrottler());
    }
    get isEnabled() {
        var _a;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).instanceType !== "development") {
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).disabled || typeof process !== "undefined" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.CLERK_TELEMETRY_DISABLED)) {
            return false;
        }
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return true;
    }
    get isDebug() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).debug || typeof process !== "undefined" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.CLERK_TELEMETRY_DEBUG);
    }
    record(event) {
        const preparedPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, preparePayload_fn).call(this, event.event, event.payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, logEvent_fn).call(this, preparedPayload.event, preparedPayload);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, shouldRecord_fn).call(this, preparedPayload, event.eventSamplingRate)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _buffer).push(preparedPayload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, scheduleFlush_fn).call(this);
    }
};
_config = new WeakMap();
_eventThrottler = new WeakMap();
_metadata = new WeakMap();
_buffer = new WeakMap();
_pendingFlush = new WeakMap();
_TelemetryCollector_instances = new WeakSet();
shouldRecord_fn = function(preparedPayload, eventSamplingRate) {
    return this.isEnabled && !this.isDebug && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, shouldBeSampled_fn).call(this, preparedPayload, eventSamplingRate);
};
shouldBeSampled_fn = function(preparedPayload, eventSamplingRate) {
    const randomSeed = Math.random();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventThrottler).isEventThrottled(preparedPayload)) {
        return false;
    }
    return randomSeed <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).samplingRate && (typeof eventSamplingRate === "undefined" || randomSeed <= eventSamplingRate);
};
scheduleFlush_fn = function() {
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, flush_fn).call(this);
        return;
    }
    "TURBOPACK unreachable";
    const isBufferFull = undefined;
};
flush_fn = function() {
    fetch(new URL("/v1/event", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).endpoint), {
        method: "POST",
        // TODO: We send an array here with that idea that we can eventually send multiple events.
        body: JSON.stringify({
            events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _buffer)
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).catch(()=>void 0).then(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateSet"])(this, _buffer, []);
    }).catch(()=>void 0);
};
/**
 * If running in debug mode, log the event and its payload to the console.
 */ logEvent_fn = function(event, payload) {
    if (!this.isDebug) {
        return;
    }
    if (typeof console.groupCollapsed !== "undefined") {
        console.groupCollapsed("[clerk/telemetry]", event);
        console.log(payload);
        console.groupEnd();
    } else {
        console.log("[clerk/telemetry]", event, payload);
    }
};
/**
 * If in browser, attempt to lazily grab the SDK metadata from the Clerk singleton, otherwise fallback to the initially passed in values.
 *
 * This is necessary because the sdkMetadata can be set by the host SDK after the TelemetryCollector is instantiated.
 */ getSDKMetadata_fn = function() {
    let sdkMetadata = {
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdk,
        version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdkVersion
    };
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return sdkMetadata;
};
/**
 * Append relevant metadata from the Clerk singleton to the event payload.
 */ preparePayload_fn = function(event, payload) {
    var _a, _b;
    const sdkMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, getSDKMetadata_fn).call(this);
    return {
        event,
        cv: (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).clerkVersion) != null ? _a : "",
        it: (_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).instanceType) != null ? _b : "",
        sdk: sdkMetadata.name,
        sdkv: sdkMetadata.version,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).publishableKey ? {
            pk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).publishableKey
        } : {},
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).secretKey ? {
            sk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).secretKey
        } : {},
        payload
    };
};
// src/telemetry/events/component-mounted.ts
var EVENT_COMPONENT_MOUNTED = "COMPONENT_MOUNTED";
var EVENT_SAMPLING_RATE = 0.1;
function eventPrebuiltComponentMounted(component, props) {
    var _a, _b, _c;
    return {
        event: EVENT_COMPONENT_MOUNTED,
        eventSamplingRate: EVENT_SAMPLING_RATE,
        payload: {
            component,
            appearanceProp: Boolean(props == null ? void 0 : props.appearance),
            baseTheme: Boolean((_a = props == null ? void 0 : props.appearance) == null ? void 0 : _a.baseTheme),
            elements: Boolean((_b = props == null ? void 0 : props.appearance) == null ? void 0 : _b.elements),
            variables: Boolean((_c = props == null ? void 0 : props.appearance) == null ? void 0 : _c.variables)
        }
    };
}
function eventComponentMounted(component, props = {}) {
    return {
        event: EVENT_COMPONENT_MOUNTED,
        eventSamplingRate: EVENT_SAMPLING_RATE,
        payload: {
            component,
            ...props
        }
    };
}
;
 //# sourceMappingURL=telemetry.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/telemetry.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TUVJ3GI6$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TUVJ3GI6.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE2A7CJI.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/telemetry.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/logger.ts
__turbopack_esm__({
    "logger": (()=>logger)
});
var loggedMessages = /* @__PURE__ */ new Set();
var logger = {
    /**
   * A custom logger that ensures messages are logged only once.
   * Reduces noise and duplicated messages when logs are in a hot codepath.
   */ warnOnce: (msg)=>{
        if (loggedMessages.has(msg)) {
            return;
        }
        loggedMessages.add(msg);
        console.warn(msg);
    },
    logOnce: (msg)=>{
        if (loggedMessages.has(msg)) {
            return;
        }
        console.log(msg);
        loggedMessages.add(msg);
    }
};
;
 //# sourceMappingURL=chunk-CYDR2ZSA.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/logger.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=logger.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/logger.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CYDR2ZSA$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-CYDR2ZSA.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$logger$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/logger.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/proxy.ts
__turbopack_esm__({
    "isHttpOrHttps": (()=>isHttpOrHttps),
    "isProxyUrlRelative": (()=>isProxyUrlRelative),
    "isValidProxyUrl": (()=>isValidProxyUrl),
    "proxyUrlToAbsoluteURL": (()=>proxyUrlToAbsoluteURL)
});
function isValidProxyUrl(key) {
    if (!key) {
        return true;
    }
    return isHttpOrHttps(key) || isProxyUrlRelative(key);
}
function isHttpOrHttps(key) {
    return /^http(s)?:\/\//.test(key || "");
}
function isProxyUrlRelative(key) {
    return key.startsWith("/");
}
function proxyUrlToAbsoluteURL(url) {
    if (!url) {
        return "";
    }
    return isProxyUrlRelative(url) ? new URL(url, window.location.origin).toString() : url;
}
;
 //# sourceMappingURL=chunk-6NDGN2IU.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/proxy.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=proxy.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/proxy.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$proxy$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/proxy.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE36JXB4.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "fastDeepMergeAndKeep": (()=>fastDeepMergeAndKeep),
    "fastDeepMergeAndReplace": (()=>fastDeepMergeAndReplace),
    "handleValueOrFn": (()=>handleValueOrFn),
    "logErrorInDevMode": (()=>logErrorInDevMode),
    "runWithExponentialBackOff": (()=>runWithExponentialBackOff)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QMOEH4QX.mjs [middleware] (ecmascript)");
;
// src/utils/logErrorInDevMode.ts
var logErrorInDevMode = (message)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isDevelopmentEnvironment"])()) {
        console.error(`Clerk: ${message}`);
    }
};
// src/utils/runWithExponentialBackOff.ts
var defaultOptions = {
    firstDelay: 125,
    maxDelay: 0,
    timeMultiple: 2,
    shouldRetry: ()=>true
};
var sleep = async (ms)=>new Promise((s)=>setTimeout(s, ms));
var createExponentialDelayAsyncFn = (opts)=>{
    let timesCalled = 0;
    const calculateDelayInMs = ()=>{
        const constant = opts.firstDelay;
        const base = opts.timeMultiple;
        const delay = constant * Math.pow(base, timesCalled);
        return Math.min(opts.maxDelay || delay, delay);
    };
    return async ()=>{
        await sleep(calculateDelayInMs());
        timesCalled++;
    };
};
var runWithExponentialBackOff = async (callback, options = {})=>{
    let iterationsCount = 0;
    const { shouldRetry, firstDelay, maxDelay, timeMultiple } = {
        ...defaultOptions,
        ...options
    };
    const delay = createExponentialDelayAsyncFn({
        firstDelay,
        maxDelay,
        timeMultiple
    });
    while(true){
        try {
            return await callback();
        } catch (e) {
            iterationsCount++;
            if (!shouldRetry(e, iterationsCount)) {
                throw e;
            }
            await delay();
        }
    }
};
// src/utils/handleValueOrFn.ts
function handleValueOrFn(value, url, defaultValue) {
    if (typeof value === "function") {
        return value(url);
    }
    if (typeof value !== "undefined") {
        return value;
    }
    if (typeof defaultValue !== "undefined") {
        return defaultValue;
    }
    return void 0;
}
// src/utils/fastDeepMerge.ts
var fastDeepMergeAndReplace = (source, target)=>{
    if (!source || !target) {
        return;
    }
    for(const key in source){
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== null && typeof source[key] === `object`) {
            if (target[key] === void 0) {
                target[key] = new (Object.getPrototypeOf(source[key])).constructor();
            }
            fastDeepMergeAndReplace(source[key], target[key]);
        } else if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
};
var fastDeepMergeAndKeep = (source, target)=>{
    if (!source || !target) {
        return;
    }
    for(const key in source){
        if (Object.prototype.hasOwnProperty.call(source, key) && source[key] !== null && typeof source[key] === `object`) {
            if (target[key] === void 0) {
                target[key] = new (Object.getPrototypeOf(source[key])).constructor();
            }
            fastDeepMergeAndKeep(source[key], target[key]);
        } else if (Object.prototype.hasOwnProperty.call(source, key) && target[key] === void 0) {
            target[key] = source[key];
        }
    }
};
;
 //# sourceMappingURL=chunk-QE36JXB4.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/utils/noop.ts
__turbopack_esm__({
    "noop": (()=>noop)
});
var noop = (..._args)=>{};
;
 //# sourceMappingURL=chunk-7FNX7RWY.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-BS4QFUKM.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createDeferredPromise": (()=>createDeferredPromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [middleware] (ecmascript)");
;
// src/utils/createDeferredPromise.ts
var createDeferredPromise = ()=>{
    let resolve = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["noop"];
    let reject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["noop"];
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        promise,
        resolve,
        reject
    };
};
;
 //# sourceMappingURL=chunk-BS4QFUKM.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/utils/index.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/utils/index.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE36JXB4$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE36JXB4.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BS4QFUKM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-BS4QFUKM.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QMOEH4QX.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/utils/index.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QPSU45F4.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "apiUrlFromPublishableKey": (()=>apiUrlFromPublishableKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [middleware] (ecmascript)");
;
;
// src/apiUrlFromPublishableKey.ts
var apiUrlFromPublishableKey = (publishableKey)=>{
    var _a;
    const frontendApi = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)) == null ? void 0 : _a.frontendApi;
    if ((frontendApi == null ? void 0 : frontendApi.startsWith("clerk.")) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((suffix)=>frontendApi == null ? void 0 : frontendApi.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["PROD_API_URL"];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["LOCAL_ENV_SUFFIXES"].some((suffix)=>frontendApi == null ? void 0 : frontendApi.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["LOCAL_API_URL"];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["STAGING_ENV_SUFFIXES"].some((suffix)=>frontendApi == null ? void 0 : frontendApi.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["STAGING_API_URL"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["PROD_API_URL"];
};
;
 //# sourceMappingURL=chunk-QPSU45F4.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
 //# sourceMappingURL=apiUrlFromPublishableKey.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QPSU45F4$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QPSU45F4.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$apiUrlFromPublishableKey$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/underscore.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=underscore.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/underscore.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE2A7CJI.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/underscore.mjs [middleware] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-K64INQ4C.mjs [middleware] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/devBrowser.ts
__turbopack_esm__({
    "DEV_BROWSER_JWT_HEADER": (()=>DEV_BROWSER_JWT_HEADER),
    "DEV_BROWSER_JWT_KEY": (()=>DEV_BROWSER_JWT_KEY),
    "extractDevBrowserJWTFromURL": (()=>extractDevBrowserJWTFromURL),
    "setDevBrowserJWTInURL": (()=>setDevBrowserJWTInURL)
});
var DEV_BROWSER_JWT_KEY = "__clerk_db_jwt";
var DEV_BROWSER_JWT_HEADER = "Clerk-Db-Jwt";
function setDevBrowserJWTInURL(url, jwt) {
    const resultURL = new URL(url);
    const jwtFromSearch = resultURL.searchParams.get(DEV_BROWSER_JWT_KEY);
    resultURL.searchParams.delete(DEV_BROWSER_JWT_KEY);
    const jwtToSet = jwtFromSearch || jwt;
    if (jwtToSet) {
        resultURL.searchParams.set(DEV_BROWSER_JWT_KEY, jwtToSet);
    }
    return resultURL;
}
function extractDevBrowserJWTFromURL(url) {
    const jwt = readDevBrowserJwtFromSearchParams(url);
    const cleanUrl = removeDevBrowserJwt(url);
    if (cleanUrl.href !== url.href && typeof globalThis.history !== "undefined") {
        globalThis.history.replaceState(null, "", removeDevBrowserJwt(url));
    }
    return jwt;
}
var readDevBrowserJwtFromSearchParams = (url)=>{
    return url.searchParams.get(DEV_BROWSER_JWT_KEY) || "";
};
var removeDevBrowserJwt = (url)=>{
    return removeDevBrowserJwtFromURLSearchParams(removeLegacyDevBrowserJwt(url));
};
var removeDevBrowserJwtFromURLSearchParams = (_url)=>{
    const url = new URL(_url);
    url.searchParams.delete(DEV_BROWSER_JWT_KEY);
    return url;
};
var removeLegacyDevBrowserJwt = (_url)=>{
    const DEV_BROWSER_JWT_MARKER_REGEXP = /__clerk_db_jwt\[(.*)\]/;
    const DEV_BROWSER_JWT_LEGACY_KEY = "__dev_session";
    const url = new URL(_url);
    url.searchParams.delete(DEV_BROWSER_JWT_LEGACY_KEY);
    url.hash = decodeURI(url.hash).replace(DEV_BROWSER_JWT_MARKER_REGEXP, "");
    if (url.href.endsWith("#")) {
        url.hash = "";
    }
    return url;
};
;
 //# sourceMappingURL=chunk-K64INQ4C.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/devBrowser.mjs [middleware] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=devBrowser.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/devBrowser.mjs [middleware] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$K64INQ4C$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-K64INQ4C.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$devBrowser$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/devBrowser.mjs [middleware] (ecmascript) <locals>");
}}),
}]);

//# sourceMappingURL=94ce0_%40clerk_shared_dist_f6930c._.js.map