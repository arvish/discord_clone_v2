module.exports = {

"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-T4WHYQYX.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/error.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=error.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/error.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-T4WHYQYX.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$error$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/error.mjs [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/authorization.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createCheckAuthorization": (()=>createCheckAuthorization)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TUVJ3GI6.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-BS4QFUKM.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createDeferredPromise": (()=>createDeferredPromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-ssr] (ecmascript)");
;
// src/utils/createDeferredPromise.ts
var createDeferredPromise = ()=>{
    let resolve = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    let reject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-HOTC6IIC.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/authorization-errors.ts
__turbopack_esm__({
    "__experimental_isReverificationHint": (()=>__experimental_isReverificationHint),
    "__experimental_reverificationMismatch": (()=>__experimental_reverificationMismatch),
    "__experimental_reverificationMismatchResponse": (()=>__experimental_reverificationMismatchResponse)
});
var __experimental_reverificationMismatch = (missingConfig)=>({
        clerk_error: {
            type: "forbidden",
            reason: "reverification-mismatch",
            metadata: {
                reverification: missingConfig
            }
        }
    });
var __experimental_reverificationMismatchResponse = (...args)=>new Response(JSON.stringify(__experimental_reverificationMismatch(...args)), {
        status: 403
    });
var __experimental_isReverificationHint = (result)=>{
    var _a, _b;
    return result && typeof result === "object" && "clerk_error" in result && ((_a = result.clerk_error) == null ? void 0 : _a.type) === "forbidden" && ((_b = result.clerk_error) == null ? void 0 : _b.reason) === "reverification-mismatch";
};
;
 //# sourceMappingURL=chunk-HOTC6IIC.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/react/index.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ClerkInstanceContext": (()=>ClerkInstanceContext),
    "ClientContext": (()=>ClientContext),
    "OptionsContext": (()=>OptionsContext),
    "OrganizationProvider": (()=>OrganizationProvider),
    "SessionContext": (()=>SessionContext),
    "UserContext": (()=>UserContext),
    "__experimental_useReverification": (()=>__experimental_useReverification),
    "assertContextExists": (()=>assertContextExists),
    "createContextAndHook": (()=>createContextAndHook),
    "isDeeplyEqual": (()=>isDeeplyEqual),
    "useAssertWrappedByClerkProvider": (()=>useAssertWrappedByClerkProvider),
    "useClerk": (()=>useClerk),
    "useClerkInstanceContext": (()=>useClerkInstanceContext),
    "useClientContext": (()=>useClientContext),
    "useDeepEqualMemo": (()=>useDeepEqualMemo),
    "useOptionsContext": (()=>useOptionsContext),
    "useOrganization": (()=>useOrganization),
    "useOrganizationContext": (()=>useOrganizationContext),
    "useOrganizationList": (()=>useOrganizationList),
    "useSafeLayoutEffect": (()=>useSafeLayoutEffect),
    "useSession": (()=>useSession),
    "useSessionContext": (()=>useSessionContext),
    "useSessionList": (()=>useSessionList),
    "useUser": (()=>useUser),
    "useUserContext": (()=>useUserContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TUVJ3GI6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TUVJ3GI6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BS4QFUKM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-BS4QFUKM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-T4WHYQYX.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$HOTC6IIC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-HOTC6IIC.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
// src/react/hooks/createContextAndHook.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/swr@2.2.5_react@19.0.0-rc-02c0e824-20241028/node_modules/swr/dist/core/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/swr@2.2.5_react@19.0.0-rc-02c0e824-20241028/node_modules/swr/dist/infinite/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/swr@2.2.5_react@19.0.0-rc-02c0e824-20241028/node_modules/swr/dist/core/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/swr@2.2.5_react@19.0.0-rc-02c0e824-20241028/node_modules/swr/dist/core/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
function assertContextExists(contextVal, msgOrCtx) {
    if (!contextVal) {
        throw typeof msgOrCtx === "string" ? new Error(msgOrCtx) : new Error(`${msgOrCtx.displayName} not found`);
    }
}
var createContextAndHook = (displayName, options)=>{
    const { assertCtxFn = assertContextExists } = options || {};
    const Ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(void 0);
    Ctx.displayName = displayName;
    const useCtx = ()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(Ctx);
        assertCtxFn(ctx, `${displayName} not found`);
        return ctx.value;
    };
    const useCtxWithoutGuarantee = ()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(Ctx);
        return ctx ? ctx.value : {};
    };
    return [
        Ctx,
        useCtx,
        useCtxWithoutGuarantee
    ];
};
;
// src/react/clerk-swr.ts
var clerk_swr_exports = {};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__export"])(clerk_swr_exports, {
    SWRConfig: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SWRConfig"],
    useSWR: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    useSWRInfinite: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__reExport"])(clerk_swr_exports, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__);
;
;
;
// src/react/contexts.tsx
var [ClerkInstanceContext, useClerkInstanceContext] = createContextAndHook("ClerkInstanceContext");
var [UserContext, useUserContext] = createContextAndHook("UserContext");
var [ClientContext, useClientContext] = createContextAndHook("ClientContext");
var [SessionContext, useSessionContext] = createContextAndHook("SessionContext");
var OptionsContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext({});
function useOptionsContext() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(OptionsContext);
    if (context === void 0) {
        throw new Error("useOptions must be used within an OptionsContext");
    }
    return context;
}
var [OrganizationContextInternal, useOrganizationContext] = createContextAndHook("OrganizationContext");
var OrganizationProvider = ({ children, organization, swrConfig })=>{
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SWRConfig"], {
        value: swrConfig
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(OrganizationContextInternal.Provider, {
        value: {
            value: {
                organization
            }
        }
    }, children));
};
function useAssertWrappedByClerkProvider(displayNameOrFn) {
    const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(ClerkInstanceContext);
    if (!ctx) {
        if (typeof displayNameOrFn === "function") {
            displayNameOrFn();
            return;
        }
        throw new Error(`${displayNameOrFn} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider`);
    }
}
;
function getDifferentKeys(obj1, obj2) {
    const keysSet = new Set(Object.keys(obj2));
    const differentKeysObject = {};
    for (const key1 of Object.keys(obj1)){
        if (!keysSet.has(key1)) {
            differentKeysObject[key1] = obj1[key1];
        }
    }
    return differentKeysObject;
}
var useWithSafeValues = (params, defaultValues)=>{
    var _a, _b, _c;
    const shouldUseDefaults = typeof params === "boolean" && params;
    const initialPageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(shouldUseDefaults ? defaultValues.initialPage : (_a = params == null ? void 0 : params.initialPage) != null ? _a : defaultValues.initialPage);
    const pageSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(shouldUseDefaults ? defaultValues.pageSize : (_b = params == null ? void 0 : params.pageSize) != null ? _b : defaultValues.pageSize);
    const newObj = {};
    for (const key of Object.keys(defaultValues)){
        newObj[key] = shouldUseDefaults ? defaultValues[key] : (_c = params == null ? void 0 : params[key]) != null ? _c : defaultValues[key];
    }
    return {
        ...newObj,
        initialPage: initialPageRef.current,
        pageSize: pageSizeRef.current
    };
};
var cachingSWROptions = {
    dedupingInterval: 1e3 * 60,
    focusThrottleInterval: 1e3 * 60 * 2
};
var usePagesOrInfinite = (params, fetcher, config, cacheKeys)=>{
    var _a, _b, _c, _d, _e, _f, _g;
    const [paginatedPage, setPaginatedPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((_a = params.initialPage) != null ? _a : 1);
    const initialPageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])((_b = params.initialPage) != null ? _b : 1);
    const pageSizeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])((_c = params.pageSize) != null ? _c : 10);
    const enabled = (_d = config.enabled) != null ? _d : true;
    const triggerInfinite = (_e = config.infinite) != null ? _e : false;
    const keepPreviousData = (_f = config.keepPreviousData) != null ? _f : false;
    const pagesCacheKey = {
        ...cacheKeys,
        ...params,
        initialPage: paginatedPage,
        pageSize: pageSizeRef.current
    };
    const { data: swrData, isValidating: swrIsValidating, isLoading: swrIsLoading, error: swrError, mutate: swrMutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$core$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(!triggerInfinite && !!fetcher && enabled ? pagesCacheKey : null, (cacheKeyParams)=>{
        const requestParams = getDifferentKeys(cacheKeyParams, cacheKeys);
        return fetcher == null ? void 0 : fetcher(requestParams);
    }, {
        keepPreviousData,
        ...cachingSWROptions
    });
    const { data: swrInfiniteData, isLoading: swrInfiniteIsLoading, isValidating: swrInfiniteIsValidating, error: swrInfiniteError, size, setSize, mutate: swrInfiniteMutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$swr$40$2$2e$2$2e$5_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$swr$2f$dist$2f$infinite$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((pageIndex)=>{
        if (!triggerInfinite || !enabled) {
            return null;
        }
        return {
            ...params,
            ...cacheKeys,
            initialPage: initialPageRef.current + pageIndex,
            pageSize: pageSizeRef.current
        };
    }, (cacheKeyParams)=>{
        const requestParams = getDifferentKeys(cacheKeyParams, cacheKeys);
        return fetcher == null ? void 0 : fetcher(requestParams);
    }, cachingSWROptions);
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (triggerInfinite) {
            return size;
        }
        return paginatedPage;
    }, [
        triggerInfinite,
        size,
        paginatedPage
    ]);
    const fetchPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((numberOrgFn)=>{
        if (triggerInfinite) {
            void setSize(numberOrgFn);
            return;
        }
        return setPaginatedPage(numberOrgFn);
    }, [
        setSize
    ]);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        var _a2, _b2;
        if (triggerInfinite) {
            return (_a2 = swrInfiniteData == null ? void 0 : swrInfiniteData.map((a)=>a == null ? void 0 : a.data).flat()) != null ? _a2 : [];
        }
        return (_b2 = swrData == null ? void 0 : swrData.data) != null ? _b2 : [];
    }, [
        triggerInfinite,
        swrData,
        swrInfiniteData
    ]);
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        var _a2, _b2;
        if (triggerInfinite) {
            return ((_a2 = swrInfiniteData == null ? void 0 : swrInfiniteData[(swrInfiniteData == null ? void 0 : swrInfiniteData.length) - 1]) == null ? void 0 : _a2.total_count) || 0;
        }
        return (_b2 = swrData == null ? void 0 : swrData.total_count) != null ? _b2 : 0;
    }, [
        triggerInfinite,
        swrData,
        swrInfiniteData
    ]);
    const isLoading = triggerInfinite ? swrInfiniteIsLoading : swrIsLoading;
    const isFetching = triggerInfinite ? swrInfiniteIsValidating : swrIsValidating;
    const error = (_g = triggerInfinite ? swrInfiniteError : swrError) != null ? _g : null;
    const isError = !!error;
    const fetchNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        fetchPage((n)=>Math.max(0, n + 1));
    }, [
        fetchPage
    ]);
    const fetchPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        fetchPage((n)=>Math.max(0, n - 1));
    }, [
        fetchPage
    ]);
    const offsetCount = (initialPageRef.current - 1) * pageSizeRef.current;
    const pageCount = Math.ceil((count - offsetCount) / pageSizeRef.current);
    const hasNextPage = count - offsetCount * pageSizeRef.current > page * pageSizeRef.current;
    const hasPreviousPage = (page - 1) * pageSizeRef.current > offsetCount * pageSizeRef.current;
    const setData = triggerInfinite ? (value)=>swrInfiniteMutate(value, {
            revalidate: false
        }) : (value)=>swrMutate(value, {
            revalidate: false
        });
    const revalidate = triggerInfinite ? ()=>swrInfiniteMutate() : ()=>swrMutate();
    return {
        data,
        count,
        error,
        isLoading,
        isFetching,
        isError,
        page,
        pageCount,
        fetchPage,
        fetchNext,
        fetchPrevious,
        hasNextPage,
        hasPreviousPage,
        // Let the hook return type define this type
        revalidate,
        // Let the hook return type define this type
        setData
    };
};
// src/react/hooks/useOrganization.tsx
var undefinedPaginatedResource = {
    data: void 0,
    count: void 0,
    error: void 0,
    isLoading: false,
    isFetching: false,
    isError: false,
    page: void 0,
    pageCount: void 0,
    fetchPage: void 0,
    fetchNext: void 0,
    fetchPrevious: void 0,
    hasNextPage: false,
    hasPreviousPage: false,
    revalidate: void 0,
    setData: void 0
};
var useOrganization = (params)=>{
    var _a;
    const { domains: domainListParams, membershipRequests: membershipRequestsListParams, memberships: membersListParams, invitations: invitationsListParams } = params || {};
    useAssertWrappedByClerkProvider("useOrganization");
    const { organization } = useOrganizationContext();
    const session = useSessionContext();
    const domainSafeValues = useWithSafeValues(domainListParams, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false,
        enrollmentMode: void 0
    });
    const membershipRequestSafeValues = useWithSafeValues(membershipRequestsListParams, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const membersSafeValues = useWithSafeValues(membersListParams, {
        initialPage: 1,
        pageSize: 10,
        role: void 0,
        keepPreviousData: false,
        infinite: false
    });
    const invitationsSafeValues = useWithSafeValues(invitationsListParams, {
        initialPage: 1,
        pageSize: 10,
        status: [
            "pending"
        ],
        keepPreviousData: false,
        infinite: false
    });
    const clerk = useClerkInstanceContext();
    (_a = clerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TUVJ3GI6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useOrganization"));
    const domainParams = typeof domainListParams === "undefined" ? void 0 : {
        initialPage: domainSafeValues.initialPage,
        pageSize: domainSafeValues.pageSize,
        enrollmentMode: domainSafeValues.enrollmentMode
    };
    const membershipRequestParams = typeof membershipRequestsListParams === "undefined" ? void 0 : {
        initialPage: membershipRequestSafeValues.initialPage,
        pageSize: membershipRequestSafeValues.pageSize,
        status: membershipRequestSafeValues.status
    };
    const membersParams = typeof membersListParams === "undefined" ? void 0 : {
        initialPage: membersSafeValues.initialPage,
        pageSize: membersSafeValues.pageSize,
        role: membersSafeValues.role
    };
    const invitationsParams = typeof invitationsListParams === "undefined" ? void 0 : {
        initialPage: invitationsSafeValues.initialPage,
        pageSize: invitationsSafeValues.pageSize,
        status: invitationsSafeValues.status
    };
    const domains = usePagesOrInfinite({
        ...domainParams
    }, organization == null ? void 0 : organization.getDomains, {
        keepPreviousData: domainSafeValues.keepPreviousData,
        infinite: domainSafeValues.infinite,
        enabled: !!domainParams
    }, {
        type: "domains",
        organizationId: organization == null ? void 0 : organization.id
    });
    const membershipRequests = usePagesOrInfinite({
        ...membershipRequestParams
    }, organization == null ? void 0 : organization.getMembershipRequests, {
        keepPreviousData: membershipRequestSafeValues.keepPreviousData,
        infinite: membershipRequestSafeValues.infinite,
        enabled: !!membershipRequestParams
    }, {
        type: "membershipRequests",
        organizationId: organization == null ? void 0 : organization.id
    });
    const memberships = usePagesOrInfinite(membersParams || {}, organization == null ? void 0 : organization.getMemberships, {
        keepPreviousData: membersSafeValues.keepPreviousData,
        infinite: membersSafeValues.infinite,
        enabled: !!membersParams
    }, {
        type: "members",
        organizationId: organization == null ? void 0 : organization.id
    });
    const invitations = usePagesOrInfinite({
        ...invitationsParams
    }, organization == null ? void 0 : organization.getInvitations, {
        keepPreviousData: invitationsSafeValues.keepPreviousData,
        infinite: invitationsSafeValues.infinite,
        enabled: !!invitationsParams
    }, {
        type: "invitations",
        organizationId: organization == null ? void 0 : organization.id
    });
    if (organization === void 0) {
        return {
            isLoaded: false,
            organization: void 0,
            membership: void 0,
            domains: undefinedPaginatedResource,
            membershipRequests: undefinedPaginatedResource,
            memberships: undefinedPaginatedResource,
            invitations: undefinedPaginatedResource
        };
    }
    if (organization === null) {
        return {
            isLoaded: true,
            organization: null,
            membership: null,
            domains: null,
            membershipRequests: null,
            memberships: null,
            invitations: null
        };
    }
    if (!clerk.loaded && organization) {
        return {
            isLoaded: true,
            organization,
            membership: void 0,
            domains: undefinedPaginatedResource,
            membershipRequests: undefinedPaginatedResource,
            memberships: undefinedPaginatedResource,
            invitations: undefinedPaginatedResource
        };
    }
    return {
        isLoaded: clerk.loaded,
        organization,
        membership: getCurrentOrganizationMembership(session.user.organizationMemberships, organization.id),
        // your membership in the current org
        domains,
        membershipRequests,
        memberships,
        invitations
    };
};
function getCurrentOrganizationMembership(organizationMemberships, activeOrganizationId) {
    return organizationMemberships.find((organizationMembership)=>organizationMembership.organization.id === activeOrganizationId);
}
// src/react/hooks/useOrganizationList.tsx
var undefinedPaginatedResource2 = {
    data: void 0,
    count: void 0,
    error: void 0,
    isLoading: false,
    isFetching: false,
    isError: false,
    page: void 0,
    pageCount: void 0,
    fetchPage: void 0,
    fetchNext: void 0,
    fetchPrevious: void 0,
    hasNextPage: false,
    hasPreviousPage: false,
    revalidate: void 0,
    setData: void 0
};
var useOrganizationList = (params)=>{
    var _a;
    const { userMemberships, userInvitations, userSuggestions } = params || {};
    useAssertWrappedByClerkProvider("useOrganizationList");
    const userMembershipsSafeValues = useWithSafeValues(userMemberships, {
        initialPage: 1,
        pageSize: 10,
        keepPreviousData: false,
        infinite: false
    });
    const userInvitationsSafeValues = useWithSafeValues(userInvitations, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const userSuggestionsSafeValues = useWithSafeValues(userSuggestions, {
        initialPage: 1,
        pageSize: 10,
        status: "pending",
        keepPreviousData: false,
        infinite: false
    });
    const clerk = useClerkInstanceContext();
    const user = useUserContext();
    (_a = clerk.telemetry) == null ? void 0 : _a.record((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TUVJ3GI6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventMethodCalled"])("useOrganizationList"));
    const userMembershipsParams = typeof userMemberships === "undefined" ? void 0 : {
        initialPage: userMembershipsSafeValues.initialPage,
        pageSize: userMembershipsSafeValues.pageSize
    };
    const userInvitationsParams = typeof userInvitations === "undefined" ? void 0 : {
        initialPage: userInvitationsSafeValues.initialPage,
        pageSize: userInvitationsSafeValues.pageSize,
        status: userInvitationsSafeValues.status
    };
    const userSuggestionsParams = typeof userSuggestions === "undefined" ? void 0 : {
        initialPage: userSuggestionsSafeValues.initialPage,
        pageSize: userSuggestionsSafeValues.pageSize,
        status: userSuggestionsSafeValues.status
    };
    const isClerkLoaded = !!(clerk.loaded && user);
    const memberships = usePagesOrInfinite(userMembershipsParams || {}, user == null ? void 0 : user.getOrganizationMemberships, {
        keepPreviousData: userMembershipsSafeValues.keepPreviousData,
        infinite: userMembershipsSafeValues.infinite,
        enabled: !!userMembershipsParams
    }, {
        type: "userMemberships",
        userId: user == null ? void 0 : user.id
    });
    const invitations = usePagesOrInfinite({
        ...userInvitationsParams
    }, user == null ? void 0 : user.getOrganizationInvitations, {
        keepPreviousData: userInvitationsSafeValues.keepPreviousData,
        infinite: userInvitationsSafeValues.infinite,
        enabled: !!userInvitationsParams
    }, {
        type: "userInvitations",
        userId: user == null ? void 0 : user.id
    });
    const suggestions = usePagesOrInfinite({
        ...userSuggestionsParams
    }, user == null ? void 0 : user.getOrganizationSuggestions, {
        keepPreviousData: userSuggestionsSafeValues.keepPreviousData,
        infinite: userSuggestionsSafeValues.infinite,
        enabled: !!userSuggestionsParams
    }, {
        type: "userSuggestions",
        userId: user == null ? void 0 : user.id
    });
    if (!isClerkLoaded) {
        return {
            isLoaded: false,
            createOrganization: void 0,
            setActive: void 0,
            userMemberships: undefinedPaginatedResource2,
            userInvitations: undefinedPaginatedResource2,
            userSuggestions: undefinedPaginatedResource2
        };
    }
    return {
        isLoaded: isClerkLoaded,
        setActive: clerk.setActive,
        createOrganization: clerk.createOrganization,
        userMemberships: memberships,
        userInvitations: invitations,
        userSuggestions: suggestions
    };
};
;
var useSafeLayoutEffect = typeof window !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useLayoutEffect : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect;
// src/react/hooks/useSession.ts
var useSession = ()=>{
    useAssertWrappedByClerkProvider("useSession");
    const session = useSessionContext();
    if (session === void 0) {
        return {
            isLoaded: false,
            isSignedIn: void 0,
            session: void 0
        };
    }
    if (session === null) {
        return {
            isLoaded: true,
            isSignedIn: false,
            session: null
        };
    }
    return {
        isLoaded: true,
        isSignedIn: true,
        session
    };
};
// src/react/hooks/useSessionList.ts
var useSessionList = ()=>{
    useAssertWrappedByClerkProvider("useSessionList");
    const isomorphicClerk = useClerkInstanceContext();
    const client = useClientContext();
    if (!client) {
        return {
            isLoaded: false,
            sessions: void 0,
            setActive: void 0
        };
    }
    return {
        isLoaded: true,
        sessions: client.sessions,
        setActive: isomorphicClerk.setActive
    };
};
// src/react/hooks/useUser.ts
function useUser() {
    useAssertWrappedByClerkProvider("useUser");
    const user = useUserContext();
    if (user === void 0) {
        return {
            isLoaded: false,
            isSignedIn: void 0,
            user: void 0
        };
    }
    if (user === null) {
        return {
            isLoaded: true,
            isSignedIn: false,
            user: null
        };
    }
    return {
        isLoaded: true,
        isSignedIn: true,
        user
    };
}
// src/react/hooks/useClerk.ts
var useClerk = ()=>{
    useAssertWrappedByClerkProvider("useClerk");
    return useClerkInstanceContext();
};
// ../../node_modules/dequal/dist/index.mjs
var has = Object.prototype.hasOwnProperty;
function find(iter, tar, key) {
    for (key of iter.keys()){
        if (dequal(key, tar)) return key;
    }
}
function dequal(foo, bar) {
    var ctor, len, tmp;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len]));
            }
            return len === -1;
        }
        if (ctor === Set) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len;
                if (tmp && typeof tmp === "object") {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!bar.has(tmp)) return false;
            }
            return true;
        }
        if (ctor === Map) {
            if (foo.size !== bar.size) {
                return false;
            }
            for (len of foo){
                tmp = len[0];
                if (tmp && typeof tmp === "object") {
                    tmp = find(bar, tmp);
                    if (!tmp) return false;
                }
                if (!dequal(len[1], bar.get(tmp))) {
                    return false;
                }
            }
            return true;
        }
        if (ctor === ArrayBuffer) {
            foo = new Uint8Array(foo);
            bar = new Uint8Array(bar);
        } else if (ctor === DataView) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo.getInt8(len) === bar.getInt8(len));
            }
            return len === -1;
        }
        if (ArrayBuffer.isView(foo)) {
            if ((len = foo.byteLength) === bar.byteLength) {
                while(len-- && foo[len] === bar[len]);
            }
            return len === -1;
        }
        if (!ctor || typeof foo === "object") {
            len = 0;
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    return foo !== foo && bar !== bar;
}
;
var useDeepEqualMemoize = (value)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(value);
    if (!dequal(value, ref.current)) {
        ref.current = value;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>ref.current, [
        ref.current
    ]);
};
var useDeepEqualMemo = (factory, dependencyArray)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(factory, useDeepEqualMemoize(dependencyArray));
};
var isDeeplyEqual = dequal;
;
async function resolveResult(result) {
    return result.then((r)=>{
        if (r instanceof Response) {
            return r.json();
        }
        return r;
    }).catch((e)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isClerkAPIResponseError"])(e) && e.errors.find(({ code })=>code == "session_step_up_verification_required")) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$HOTC6IIC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__experimental_reverificationMismatch"])();
        }
        throw e;
    });
}
function createReverificationHandler(params) {
    function assertReverification(fetcher) {
        return async (...args)=>{
            var _a;
            let result = await resolveResult(fetcher(...args));
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$HOTC6IIC$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__experimental_isReverificationHint"])(result)) {
                const resolvers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BS4QFUKM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDeferredPromise"])();
                (_a = params.onOpenModal) == null ? void 0 : _a.call(params, {
                    afterVerification () {
                        resolvers.resolve(true);
                    },
                    afterVerificationCancelled () {
                        resolvers.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClerkRuntimeError"]("User cancelled attempted verification", {
                            code: "reverification_cancelled"
                        }));
                    }
                });
                await resolvers.promise;
                result = await resolveResult(fetcher(...args));
            }
            return result;
        };
    }
    return assertReverification;
}
function __experimental_useReverification(fetcher) {
    const { __experimental_openUserVerification } = useClerk();
    const fetcherRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(fetcher);
    const handleReverification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const handler = createReverificationHandler({
            onOpenModal: __experimental_openUserVerification
        })(fetcherRef.current);
        return [
            handler
        ];
    }, [
        __experimental_openUserVerification,
        fetcherRef.current
    ]);
    useSafeLayoutEffect(()=>{
        fetcherRef.current = fetcher;
    });
    return handleReverification;
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE2A7CJI.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-ssr] (ecmascript)");
;
;
;
// src/keys.ts
var PUBLISHABLE_KEY_LIVE_PREFIX = "pk_live_";
var PUBLISHABLE_KEY_TEST_PREFIX = "pk_test_";
var PUBLISHABLE_FRONTEND_API_DEV_REGEX = /^(([a-z]+)-){2}([0-9]{1,2})\.clerk\.accounts([a-z.]*)(dev|com)$/i;
function buildPublishableKey(frontendApi) {
    const isDevKey = PUBLISHABLE_FRONTEND_API_DEV_REGEX.test(frontendApi) || frontendApi.startsWith("clerk.") && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((s)=>frontendApi.endsWith(s));
    const keyPrefix = isDevKey ? PUBLISHABLE_KEY_TEST_PREFIX : PUBLISHABLE_KEY_LIVE_PREFIX;
    return `${keyPrefix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isomorphicBtoa"])(`${frontendApi}$`)}`;
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
    let frontendApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isomorphicAtob"])(key.split("_")[2]);
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
    const hasValidFrontendApiPostfix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isomorphicAtob"])(key.split("_")[2] || "").endsWith("$");
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
                res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEV_OR_STAGING_SUFFIXES"].some((s)=>hostname.endsWith(s));
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isomorphicBtoa"])(stringDigest).replace(/\+/gi, "-").replace(/\//gi, "_").substring(0, 8);
}
var getSuffixedCookieName = (cookieName, cookieSuffix)=>{
    return `${cookieName}_${cookieSuffix}`;
};
;
 //# sourceMappingURL=chunk-L2BNNARM.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/telemetry.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "TelemetryCollector": (()=>TelemetryCollector),
    "eventComponentMounted": (()=>eventComponentMounted),
    "eventPrebuiltComponentMounted": (()=>eventPrebuiltComponentMounted)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE2A7CJI.mjs [app-ssr] (ecmascript)");
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _TelemetryEventThrottler_instances);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _storageKey, "clerk_telemetry_throttler");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _cacheTtl, DEFAULT_CACHE_TTL_MS);
    }
    isEventThrottled(payload) {
        var _a;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, isValidBrowser_get)) {
            return false;
        }
        const now = Date.now();
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryEventThrottler_instances, generateKey_fn).call(this, payload);
        const entry = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, cache_get)) == null ? void 0 : _a[key];
        if (!entry) {
            const updatedCache = {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, cache_get),
                [key]: now
            };
            localStorage.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey), JSON.stringify(updatedCache));
        }
        const shouldInvalidate = entry && now - entry > (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _cacheTtl);
        if (shouldInvalidate) {
            const updatedCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _TelemetryEventThrottler_instances, cache_get);
            delete updatedCache[key];
            localStorage.setItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey), JSON.stringify(updatedCache));
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
    const cacheString = localStorage.getItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey));
    if (!cacheString) {
        return {};
    }
    return JSON.parse(cacheString);
};
isValidBrowser_get = function() {
    if (typeof window === "undefined") {
        return false;
    }
    const storage = window.localStorage;
    if (!storage) {
        return false;
    }
    try {
        const testKey = "test";
        storage.setItem(testKey, testKey);
        storage.removeItem(testKey);
        return true;
    } catch (err) {
        const isQuotaExceededError = err instanceof DOMException && // Check error names for different browsers
        (err.name === "QuotaExceededError" || err.name === "NS_ERROR_DOM_QUOTA_REACHED");
        if (isQuotaExceededError && storage.length > 0) {
            storage.removeItem((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _storageKey));
        }
        return false;
    }
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _TelemetryCollector_instances);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _config);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _eventThrottler);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _metadata, {});
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _buffer, []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateAdd"])(this, _pendingFlush);
        var _a, _b, _c, _d, _e, _f;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateSet"])(this, _config, {
            maxBufferSize: (_a = options.maxBufferSize) != null ? _a : DEFAULT_CONFIG.maxBufferSize,
            samplingRate: (_b = options.samplingRate) != null ? _b : DEFAULT_CONFIG.samplingRate,
            disabled: (_c = options.disabled) != null ? _c : false,
            debug: (_d = options.debug) != null ? _d : false,
            endpoint: DEFAULT_CONFIG.endpoint
        });
        if (!options.clerkVersion && typeof window === "undefined") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).clerkVersion = "";
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).clerkVersion = (_e = options.clerkVersion) != null ? _e : "";
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdk = options.sdk;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdkVersion = options.sdkVersion;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).publishableKey = (_f = options.publishableKey) != null ? _f : "";
        const parsedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePublishableKey"])(options.publishableKey);
        if (parsedKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).instanceType = parsedKey.instanceType;
        }
        if (options.secretKey) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).secretKey = options.secretKey.substring(0, 16);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateSet"])(this, _eventThrottler, new TelemetryEventThrottler());
    }
    get isEnabled() {
        var _a;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).instanceType !== "development") {
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).disabled || typeof process !== "undefined" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.CLERK_TELEMETRY_DISABLED)) {
            return false;
        }
        if (typeof window !== "undefined" && !!((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.webdriver)) {
            return false;
        }
        return true;
    }
    get isDebug() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).debug || typeof process !== "undefined" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTruthy"])(process.env.CLERK_TELEMETRY_DEBUG);
    }
    record(event) {
        const preparedPayload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, preparePayload_fn).call(this, event.event, event.payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, logEvent_fn).call(this, preparedPayload.event, preparedPayload);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, shouldRecord_fn).call(this, preparedPayload, event.eventSamplingRate)) {
            return;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _buffer).push(preparedPayload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, scheduleFlush_fn).call(this);
    }
};
_config = new WeakMap();
_eventThrottler = new WeakMap();
_metadata = new WeakMap();
_buffer = new WeakMap();
_pendingFlush = new WeakMap();
_TelemetryCollector_instances = new WeakSet();
shouldRecord_fn = function(preparedPayload, eventSamplingRate) {
    return this.isEnabled && !this.isDebug && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, shouldBeSampled_fn).call(this, preparedPayload, eventSamplingRate);
};
shouldBeSampled_fn = function(preparedPayload, eventSamplingRate) {
    const randomSeed = Math.random();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _eventThrottler).isEventThrottled(preparedPayload)) {
        return false;
    }
    return randomSeed <= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).samplingRate && (typeof eventSamplingRate === "undefined" || randomSeed <= eventSamplingRate);
};
scheduleFlush_fn = function() {
    if (typeof window === "undefined") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, flush_fn).call(this);
        return;
    }
    const isBufferFull = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _buffer).length >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).maxBufferSize;
    if (isBufferFull) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _pendingFlush)) {
            const cancel = typeof cancelIdleCallback !== "undefined" ? cancelIdleCallback : clearTimeout;
            cancel((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _pendingFlush));
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, flush_fn).call(this);
        return;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _pendingFlush)) {
        return;
    }
    if ("requestIdleCallback" in window) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateSet"])(this, _pendingFlush, requestIdleCallback(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, flush_fn).call(this);
        }));
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateSet"])(this, _pendingFlush, setTimeout(()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, flush_fn).call(this);
        }, 0));
    }
};
flush_fn = function() {
    fetch(new URL("/v1/event", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _config).endpoint), {
        method: "POST",
        // TODO: We send an array here with that idea that we can eventually send multiple events.
        body: JSON.stringify({
            events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _buffer)
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).catch(()=>void 0).then(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateSet"])(this, _buffer, []);
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
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdk,
        version: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).sdkVersion
    };
    if (typeof window !== "undefined" && window.Clerk) {
        sdkMetadata = {
            ...sdkMetadata,
            ...window.Clerk.constructor.sdkMetadata
        };
    }
    return sdkMetadata;
};
/**
 * Append relevant metadata from the Clerk singleton to the event payload.
 */ preparePayload_fn = function(event, payload) {
    var _a, _b;
    const sdkMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateMethod"])(this, _TelemetryCollector_instances, getSDKMetadata_fn).call(this);
    return {
        event,
        cv: (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).clerkVersion) != null ? _a : "",
        it: (_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).instanceType) != null ? _b : "",
        sdk: sdkMetadata.name,
        sdkv: sdkMetadata.version,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).publishableKey ? {
            pk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).publishableKey
        } : {},
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).secretKey ? {
            sk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__privateGet"])(this, _metadata).secretKey
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/telemetry.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TUVJ3GI6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TUVJ3GI6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE2A7CJI.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$telemetry$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/telemetry.mjs [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-ssr] (ecmascript)");
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
    if (!version && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStaging"])(frontendApi)) {
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((legacyDevSuffix)=>{
        return host.startsWith("accounts.") && host.endsWith(legacyDevSuffix);
    });
}
function isCurrentDevAccountPortalOrigin(host) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENT_DEV_INSTANCE_SUFFIXES"].some((currentDevSuffix)=>{
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-2ACAJ4LJ.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/versionSelector.ts
__turbopack_esm__({
    "getMajorVersion": (()=>getMajorVersion),
    "versionSelector": (()=>versionSelector)
});
var versionSelector = (clerkJSVersion, packageVersion = "5.31.0")=>{
    if (clerkJSVersion) {
        return clerkJSVersion;
    }
    const prereleaseTag = getPrereleaseTag(packageVersion);
    if (prereleaseTag) {
        if (prereleaseTag === "snapshot") {
            return "5.31.0";
        }
        return prereleaseTag;
    }
    return getMajorVersion(packageVersion);
};
var getPrereleaseTag = (packageVersion)=>{
    var _a;
    return (_a = packageVersion.trim().replace(/^v/, "").match(/-(.+?)(\.|$)/)) == null ? void 0 : _a[1];
};
var getMajorVersion = (packageVersion)=>packageVersion.trim().replace(/^v/, "").split(".")[0];
;
 //# sourceMappingURL=chunk-2ACAJ4LJ.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QMOEH4QX.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE36JXB4.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QMOEH4QX.mjs [app-ssr] (ecmascript)");
;
// src/utils/logErrorInDevMode.ts
var logErrorInDevMode = (message)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDevelopmentEnvironment"])()) {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-DKITONR4.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "loadScript": (()=>loadScript)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE36JXB4$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE36JXB4.mjs [app-ssr] (ecmascript)");
;
// src/loadScript.ts
var NO_DOCUMENT_ERROR = "loadScript cannot be called when document does not exist";
var NO_SRC_ERROR = "loadScript cannot be called without a src";
async function loadScript(src = "", opts) {
    const { async, defer, beforeLoad, crossOrigin, nonce } = opts || {};
    const load = ()=>{
        return new Promise((resolve, reject)=>{
            if (!src) {
                reject(NO_SRC_ERROR);
            }
            if (!document || !document.body) {
                reject(NO_DOCUMENT_ERROR);
            }
            const script = document.createElement("script");
            crossOrigin && script.setAttribute("crossorigin", crossOrigin);
            script.async = async || false;
            script.defer = defer || false;
            script.addEventListener("load", ()=>{
                script.remove();
                resolve(script);
            });
            script.addEventListener("error", ()=>{
                script.remove();
                reject();
            });
            script.src = src;
            script.nonce = nonce;
            beforeLoad == null ? void 0 : beforeLoad(script);
            document.body.appendChild(script);
        });
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE36JXB4$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runWithExponentialBackOff"])(load, {
        shouldRetry: (_, iterations)=>iterations < 5
    });
}
;
 //# sourceMappingURL=chunk-DKITONR4.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-YGSWZD6Y.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "buildClerkJsScriptAttributes": (()=>buildClerkJsScriptAttributes),
    "clerkJsScriptUrl": (()=>clerkJsScriptUrl),
    "loadClerkJsScript": (()=>loadClerkJsScript),
    "setClerkJsLoadingErrorPackageName": (()=>setClerkJsLoadingErrorPackageName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$2ACAJ4LJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-2ACAJ4LJ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$DKITONR4$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-DKITONR4.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-T4WHYQYX.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
// src/loadClerkJsScript.ts
var FAILED_TO_LOAD_ERROR = "Clerk: Failed to load Clerk";
var { isDevOrStagingUrl } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDevOrStagingUrlCache"])();
var errorThrower = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildErrorThrower"])({
    packageName: "@clerk/shared"
});
function setClerkJsLoadingErrorPackageName(packageName) {
    errorThrower.setPackageName({
        packageName
    });
}
var loadClerkJsScript = async (opts)=>{
    const existingScript = document.querySelector("script[data-clerk-js-script]");
    if (existingScript) {
        return new Promise((resolve, reject)=>{
            existingScript.addEventListener("load", ()=>{
                resolve(existingScript);
            });
            existingScript.addEventListener("error", ()=>{
                reject(FAILED_TO_LOAD_ERROR);
            });
        });
    }
    if (!(opts == null ? void 0 : opts.publishableKey)) {
        errorThrower.throwMissingPublishableKeyError();
        return;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$DKITONR4$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadScript"])(clerkJsScriptUrl(opts), {
        async: true,
        crossOrigin: "anonymous",
        nonce: opts.nonce,
        beforeLoad: applyClerkJsScriptAttributes(opts)
    }).catch(()=>{
        throw new Error(FAILED_TO_LOAD_ERROR);
    });
};
var clerkJsScriptUrl = (opts)=>{
    var _a, _b;
    const { clerkJSUrl, clerkJSVariant, clerkJSVersion, proxyUrl, domain, publishableKey } = opts;
    if (clerkJSUrl) {
        return clerkJSUrl;
    }
    let scriptHost = "";
    if (!!proxyUrl && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidProxyUrl"])(proxyUrl)) {
        scriptHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["proxyUrlToAbsoluteURL"])(proxyUrl).replace(/http(s)?:\/\//, "");
    } else if (domain && !isDevOrStagingUrl(((_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)) == null ? void 0 : _a.frontendApi) || "")) {
        scriptHost = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addClerkPrefix"])(domain);
    } else {
        scriptHost = ((_b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)) == null ? void 0 : _b.frontendApi) || "";
    }
    const variant = clerkJSVariant ? `${clerkJSVariant.replace(/\.+$/, "")}.` : "";
    const version = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$2ACAJ4LJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["versionSelector"])(clerkJSVersion);
    return `https://${scriptHost}/npm/@clerk/clerk-js@${version}/dist/clerk.${variant}browser.js`;
};
var buildClerkJsScriptAttributes = (options)=>{
    const obj = {};
    if (options.publishableKey) {
        obj["data-clerk-publishable-key"] = options.publishableKey;
    }
    if (options.proxyUrl) {
        obj["data-clerk-proxy-url"] = options.proxyUrl;
    }
    if (options.domain) {
        obj["data-clerk-domain"] = options.domain;
    }
    if (options.nonce) {
        obj.nonce = options.nonce;
    }
    return obj;
};
var applyClerkJsScriptAttributes = (options)=>(script)=>{
        const attributes = buildClerkJsScriptAttributes(options);
        for(const attribute in attributes){
            script.setAttribute(attribute, attributes[attribute]);
        }
    };
;
 //# sourceMappingURL=chunk-YGSWZD6Y.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
 //# sourceMappingURL=loadClerkJsScript.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$YGSWZD6Y$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-YGSWZD6Y.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$6NDGN2IU$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-6NDGN2IU.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$2ACAJ4LJ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-2ACAJ4LJ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$DKITONR4$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-DKITONR4.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE36JXB4$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE36JXB4.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BS4QFUKM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-BS4QFUKM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QMOEH4QX.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$T4WHYQYX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-T4WHYQYX.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$loadClerkJsScript$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/loadClerkJsScript.mjs [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-CFXQSUF6.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/object.ts
__turbopack_esm__({
    "applyFunctionToObj": (()=>applyFunctionToObj),
    "filterProps": (()=>filterProps),
    "removeUndefined": (()=>removeUndefined),
    "without": (()=>without)
});
var without = (obj, ...props)=>{
    const copy = {
        ...obj
    };
    for (const prop of props){
        delete copy[prop];
    }
    return copy;
};
var removeUndefined = (obj)=>{
    return Object.entries(obj).reduce((acc, [key, value])=>{
        if (value !== void 0 && value !== null) {
            acc[key] = value;
        }
        return acc;
    }, {});
};
var applyFunctionToObj = (obj, fn)=>{
    const result = {};
    for(const key in obj){
        result[key] = fn(obj[key], key);
    }
    return result;
};
var filterProps = (obj, filter)=>{
    const result = {};
    for(const key in obj){
        if (obj[key] && filter(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
};
;
 //# sourceMappingURL=chunk-CFXQSUF6.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/object.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=object.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/object.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$CFXQSUF6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-CFXQSUF6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$object$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/object.mjs [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/utils/index.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/utils/index.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE36JXB4$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE36JXB4.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$BS4QFUKM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-BS4QFUKM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7FNX7RWY$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7FNX7RWY.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QMOEH4QX$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QMOEH4QX.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$utils$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/utils/index.mjs [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/keys.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/keys.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/keys.mjs [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-LJ4R7M7R.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/browser.ts
__turbopack_esm__({
    "inBrowser": (()=>inBrowser),
    "isBrowserOnline": (()=>isBrowserOnline),
    "isValidBrowser": (()=>isValidBrowser),
    "isValidBrowserOnline": (()=>isValidBrowserOnline),
    "userAgentIsRobot": (()=>userAgentIsRobot)
});
function inBrowser() {
    return typeof window !== "undefined";
}
var botAgents = [
    "bot",
    "spider",
    "crawl",
    "APIs-Google",
    "AdsBot",
    "Googlebot",
    "mediapartners",
    "Google Favicon",
    "FeedFetcher",
    "Google-Read-Aloud",
    "DuplexWeb-Google",
    "googleweblight",
    "bing",
    "yandex",
    "baidu",
    "duckduck",
    "yahoo",
    "ecosia",
    "ia_archiver",
    "facebook",
    "instagram",
    "pinterest",
    "reddit",
    "slack",
    "twitter",
    "whatsapp",
    "youtube",
    "semrush"
];
var botAgentRegex = new RegExp(botAgents.join("|"), "i");
function userAgentIsRobot(userAgent) {
    return !userAgent ? false : botAgentRegex.test(userAgent);
}
function isValidBrowser() {
    const navigator = inBrowser() ? window == null ? void 0 : window.navigator : null;
    if (!navigator) {
        return false;
    }
    return !userAgentIsRobot(navigator == null ? void 0 : navigator.userAgent) && !(navigator == null ? void 0 : navigator.webdriver);
}
function isBrowserOnline() {
    var _a, _b;
    const navigator = inBrowser() ? window == null ? void 0 : window.navigator : null;
    if (!navigator) {
        return false;
    }
    const isNavigatorOnline = navigator == null ? void 0 : navigator.onLine;
    const isExperimentalConnectionOnline = ((_a = navigator == null ? void 0 : navigator.connection) == null ? void 0 : _a.rtt) !== 0 && ((_b = navigator == null ? void 0 : navigator.connection) == null ? void 0 : _b.downlink) !== 0;
    return isExperimentalConnectionOnline && isNavigatorOnline;
}
function isValidBrowserOnline() {
    return isBrowserOnline() && isValidBrowser();
}
;
 //# sourceMappingURL=chunk-LJ4R7M7R.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/browser.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=browser.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/browser.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$LJ4R7M7R$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-LJ4R7M7R.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$browser$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/browser.mjs [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/router.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ClerkHostRouterContext": (()=>ClerkHostRouterContext),
    "ClerkRouterContext": (()=>ClerkRouterContext),
    "Route": (()=>Route),
    "Router": (()=>Router),
    "createClerkRouter": (()=>createClerkRouter),
    "useClerkHostRouter": (()=>useClerkHostRouter),
    "useClerkRouter": (()=>useClerkRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-IFTVZ2LQ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$3TMSNP4L$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-3TMSNP4L.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
// src/router/react.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
// src/router/router.ts
var PRESERVED_QUERYSTRING_PARAMS = [
    "after_sign_in_url",
    "after_sign_up_url",
    "redirect_url"
];
function normalizePath(path) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withoutTrailingSlash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withLeadingSlash"])(path));
}
function createClerkRouter(router, basePath = "/") {
    const normalizedBasePath = normalizePath(basePath);
    function makeDestinationUrlWithPreservedQueryParameters(path) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$IFTVZ2LQ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbsoluteUrl"])(path)) {
            return path;
        }
        const destinationUrl = new URL(path, window.location.origin);
        const currentSearchParams = router.searchParams();
        PRESERVED_QUERYSTRING_PARAMS.forEach((key)=>{
            const maybeValue = currentSearchParams.get(key);
            if (maybeValue) {
                destinationUrl.searchParams.set(key, maybeValue);
            }
        });
        return `${destinationUrl.pathname}${destinationUrl.search}`;
    }
    function match(path, index) {
        const pathToMatch = path != null ? path : index && "/";
        if (!pathToMatch) {
            throw new Error("[clerk] router.match() requires either a path to match, or the index flag must be set to true.");
        }
        const normalizedPath = normalizePath(pathToMatch);
        return normalizePath(`${normalizedBasePath}${normalizedPath}`) === normalizePath(router.pathname());
    }
    function child(childBasePath) {
        return createClerkRouter(router, `${normalizedBasePath}${normalizePath(childBasePath)}`);
    }
    function push(path) {
        const destinationUrl = makeDestinationUrlWithPreservedQueryParameters(path);
        return router.push(destinationUrl);
    }
    function replace(path) {
        const destinationUrl = makeDestinationUrlWithPreservedQueryParameters(path);
        return router.replace(destinationUrl);
    }
    function shallowPush(path) {
        const destinationUrl = makeDestinationUrlWithPreservedQueryParameters(path);
        return router.shallowPush(destinationUrl);
    }
    function pathname() {
        return router.pathname();
    }
    function searchParams() {
        return router.searchParams();
    }
    return {
        makeDestinationUrlWithPreservedQueryParameters,
        child,
        match,
        mode: router.mode,
        name: router.name,
        push,
        replace,
        shallowPush,
        pathname,
        searchParams,
        basePath: normalizedBasePath
    };
}
;
var ClerkHostRouterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
var ClerkRouterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function useClerkHostRouter() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ClerkHostRouterContext);
    if (!ctx) {
        throw new Error("clerk: Unable to locate ClerkHostRouter, make sure this is rendered within `<ClerkHostRouterContext.Provider>`.");
    }
    return ctx;
}
function useClerkRouter() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ClerkRouterContext);
    if (!ctx) {
        throw new Error("clerk: Unable to locate ClerkRouter, make sure this is rendered within `<Router>`.");
    }
    return ctx;
}
function Router({ basePath, children, router }) {
    const hostRouter = useClerkHostRouter();
    const clerkRouter = createClerkRouter(router != null ? router : hostRouter, basePath);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$2_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ClerkRouterContext.Provider, {
        value: clerkRouter
    }, children);
}
function Route({ path, children, index }) {
    const parentRouter = useClerkRouter();
    if (!path && !index) {
        return children;
    }
    if (!(parentRouter == null ? void 0 : parentRouter.match(path, index))) {
        return null;
    }
    return children;
}
;
 //# sourceMappingURL=router.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/underscore.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=underscore.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/underscore.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QE2A7CJI$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QE2A7CJI.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$underscore$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/underscore.mjs [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QPSU45F4.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "apiUrlFromPublishableKey": (()=>apiUrlFromPublishableKey)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-ssr] (ecmascript)");
;
;
// src/apiUrlFromPublishableKey.ts
var apiUrlFromPublishableKey = (publishableKey)=>{
    var _a;
    const frontendApi = (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parsePublishableKey"])(publishableKey)) == null ? void 0 : _a.frontendApi;
    if ((frontendApi == null ? void 0 : frontendApi.startsWith("clerk.")) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LEGACY_DEV_INSTANCE_SUFFIXES"].some((suffix)=>frontendApi == null ? void 0 : frontendApi.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROD_API_URL"];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_ENV_SUFFIXES"].some((suffix)=>frontendApi == null ? void 0 : frontendApi.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCAL_API_URL"];
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STAGING_ENV_SUFFIXES"].some((suffix)=>frontendApi == null ? void 0 : frontendApi.endsWith(suffix))) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STAGING_API_URL"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROD_API_URL"];
};
;
 //# sourceMappingURL=chunk-QPSU45F4.mjs.map
}}),
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$QPSU45F4$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-QPSU45F4.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$L2BNNARM$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-L2BNNARM.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$TETGTEI2$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-TETGTEI2.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$KOH7GTJO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-KOH7GTJO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$I6MTSTOF$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-I6MTSTOF.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$chunk$2d$7ELT755Q$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/chunk-7ELT755Q.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$clerk$2b$shared$40$2$2e$11$2e$4_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_$5f$slmpk543rwhdx6yzw3j3d2nbze$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$apiUrlFromPublishableKey$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@clerk+shared@2.11.4_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__slmpk543rwhdx6yzw3j3d2nbze/node_modules/@clerk/shared/dist/apiUrlFromPublishableKey.mjs [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=94ce0_%40clerk_shared_dist_e5d0c1._.js.map