module.exports = {

"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/database.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
"use strict"; //# sourceMappingURL=database.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "performAsyncSyscall": (()=>performAsyncSyscall),
    "performJsSyscall": (()=>performJsSyscall),
    "performSyscall": (()=>performSyscall)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
;
;
function performSyscall(op, arg) {
    if (typeof Convex === "undefined" || Convex.syscall === void 0) {
        throw new Error("The Convex database and auth objects are being used outside of a Convex backend. Did you mean to use `useQuery` or `useMutation` to call a Convex function?");
    }
    const resultStr = Convex.syscall(op, JSON.stringify(arg));
    return JSON.parse(resultStr);
}
async function performAsyncSyscall(op, arg) {
    if (typeof Convex === "undefined" || Convex.asyncSyscall === void 0) {
        throw new Error("The Convex database and auth objects are being used outside of a Convex backend. Did you mean to use `useQuery` or `useMutation` to call a Convex function?");
    }
    let resultStr;
    try {
        resultStr = await Convex.asyncSyscall(op, JSON.stringify(arg));
    } catch (e) {
        if (e.data !== void 0) {
            const rethrown = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexError"](e.message);
            rethrown.data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(e.data);
            throw rethrown;
        }
        throw new Error(e.message);
    }
    return JSON.parse(resultStr);
}
function performJsSyscall(op, arg) {
    if (typeof Convex === "undefined" || Convex.jsSyscall === void 0) {
        throw new Error("The Convex database and auth objects are being used outside of a Convex backend. Did you mean to use `useQuery` or `useMutation` to call a Convex function?");
    }
    return Convex.jsSyscall(op, arg);
} //# sourceMappingURL=syscall.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/actions_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "setupActionCalls": (()=>setupActionCalls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/paths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
;
;
;
;
;
function syscallArgs(requestId, functionReference, args) {
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionAddress"])(functionReference);
    return {
        ...address,
        args: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args)),
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"],
        requestId
    };
}
function setupActionCalls(requestId) {
    return {
        runQuery: async (query, args)=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/actions/query", syscallArgs(requestId, query, args));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(result);
        },
        runMutation: async (mutation, args)=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/actions/mutation", syscallArgs(requestId, mutation, args));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(result);
        },
        runAction: async (action, args)=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/actions/action", syscallArgs(requestId, action, args));
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(result);
        }
    };
} //# sourceMappingURL=actions_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/vector_search.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "FilterExpression": (()=>FilterExpression)
});
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class FilterExpression {
    /**
   * @internal
   */ constructor(){
        // Property for nominal type support.
        __publicField(this, "_isExpression");
        // Property to distinguish expressions by the type they resolve to.
        __publicField(this, "_value");
    }
} //# sourceMappingURL=vector_search.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/validate.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "validateArg": (()=>validateArg),
    "validateArgIsInteger": (()=>validateArgIsInteger),
    "validateArgIsNonNegativeInteger": (()=>validateArgIsNonNegativeInteger)
});
"use strict";
function validateArg(arg, idx, method, argName) {
    if (arg === void 0) {
        throw new TypeError(`Must provide arg ${idx} \`${argName}\` to \`${method}\``);
    }
}
function validateArgIsInteger(arg, idx, method, argName) {
    if (!Number.isInteger(arg)) {
        throw new TypeError(`Arg ${idx} \`${argName}\` to \`${method}\` must be an integer`);
    }
}
function validateArgIsNonNegativeInteger(arg, idx, method, argName) {
    if (!Number.isInteger(arg) || arg < 0) {
        throw new TypeError(`Arg ${idx} \`${argName}\` to \`${method}\` must be a non-negative integer`);
    }
} //# sourceMappingURL=validate.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/vector_search_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ExpressionImpl": (()=>ExpressionImpl),
    "VectorQueryImpl": (()=>VectorQueryImpl),
    "filterBuilderImpl": (()=>filterBuilderImpl),
    "serializeExpression": (()=>serializeExpression),
    "setupActionVectorSearch": (()=>setupActionVectorSearch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$vector_search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/vector_search.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/validate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
;
;
function setupActionVectorSearch(requestId) {
    return async (tableName, indexName, query)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(tableName, 1, "vectorSearch", "tableName");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(indexName, 2, "vectorSearch", "indexName");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(query, 3, "vectorSearch", "query");
        if (!query.vector || !Array.isArray(query.vector) || query.vector.length === 0) {
            throw Error("`vector` must be a non-empty Array in vectorSearch");
        }
        return await new VectorQueryImpl(requestId, tableName + "." + indexName, query).collect();
    };
}
class VectorQueryImpl {
    constructor(requestId, indexName, query){
        __publicField(this, "requestId");
        __publicField(this, "state");
        this.requestId = requestId;
        const filters = query.filter ? serializeExpression(query.filter(filterBuilderImpl)) : null;
        this.state = {
            type: "preparing",
            query: {
                indexName,
                limit: query.limit,
                vector: query.vector,
                expressions: filters
            }
        };
    }
    async collect() {
        if (this.state.type === "consumed") {
            throw new Error("This query is closed and can't emit any more values.");
        }
        const query = this.state.query;
        this.state = {
            type: "consumed"
        };
        const { results } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/actions/vectorSearch", {
            requestId: this.requestId,
            version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"],
            query
        });
        return results;
    }
}
class ExpressionImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$vector_search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterExpression"] {
    constructor(inner){
        super();
        __publicField(this, "inner");
        this.inner = inner;
    }
    serialize() {
        return this.inner;
    }
}
function serializeExpression(expr) {
    if (expr instanceof ExpressionImpl) {
        return expr.serialize();
    } else {
        return {
            $literal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexOrUndefinedToJson"])(expr)
        };
    }
}
const filterBuilderImpl = {
    //  Comparisons  /////////////////////////////////////////////////////////////
    eq (fieldName, value) {
        if (typeof fieldName !== "string") {
            throw new Error("The first argument to `q.eq` must be a field name.");
        }
        return new ExpressionImpl({
            $eq: [
                serializeExpression(new ExpressionImpl({
                    $field: fieldName
                })),
                serializeExpression(value)
            ]
        });
    },
    //  Logic  ///////////////////////////////////////////////////////////////////
    or (...exprs) {
        return new ExpressionImpl({
            $or: exprs.map(serializeExpression)
        });
    }
}; //# sourceMappingURL=vector_search_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/authentication_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "setupAuth": (()=>setupAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
"use strict";
;
function setupAuth(requestId) {
    return {
        getUserIdentity: async ()=>{
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/getUserIdentity", {
                requestId
            });
        }
    };
} //# sourceMappingURL=authentication_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/filter_builder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Expression": (()=>Expression)
});
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class Expression {
    /**
   * @internal
   */ constructor(){
        // Property for nominal type support.
        __publicField(this, "_isExpression");
        // Property to distinguish expressions by the type they resolve to.
        __publicField(this, "_value");
    }
} //# sourceMappingURL=filter_builder.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/filter_builder_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ExpressionImpl": (()=>ExpressionImpl),
    "filterBuilderImpl": (()=>filterBuilderImpl),
    "serializeExpression": (()=>serializeExpression)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$filter_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/filter_builder.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
class ExpressionImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$filter_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Expression"] {
    constructor(inner){
        super();
        __publicField(this, "inner");
        this.inner = inner;
    }
    serialize() {
        return this.inner;
    }
}
function serializeExpression(expr) {
    if (expr instanceof ExpressionImpl) {
        return expr.serialize();
    } else {
        return {
            $literal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexOrUndefinedToJson"])(expr)
        };
    }
}
const filterBuilderImpl = {
    //  Comparisons  /////////////////////////////////////////////////////////////
    eq (l, r) {
        return new ExpressionImpl({
            $eq: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    neq (l, r) {
        return new ExpressionImpl({
            $neq: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    lt (l, r) {
        return new ExpressionImpl({
            $lt: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    lte (l, r) {
        return new ExpressionImpl({
            $lte: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    gt (l, r) {
        return new ExpressionImpl({
            $gt: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    gte (l, r) {
        return new ExpressionImpl({
            $gte: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    //  Arithmetic  //////////////////////////////////////////////////////////////
    add (l, r) {
        return new ExpressionImpl({
            $add: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    sub (l, r) {
        return new ExpressionImpl({
            $sub: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    mul (l, r) {
        return new ExpressionImpl({
            $mul: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    div (l, r) {
        return new ExpressionImpl({
            $div: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    mod (l, r) {
        return new ExpressionImpl({
            $mod: [
                serializeExpression(l),
                serializeExpression(r)
            ]
        });
    },
    neg (x) {
        return new ExpressionImpl({
            $neg: serializeExpression(x)
        });
    },
    //  Logic  ///////////////////////////////////////////////////////////////////
    and (...exprs) {
        return new ExpressionImpl({
            $and: exprs.map(serializeExpression)
        });
    },
    or (...exprs) {
        return new ExpressionImpl({
            $or: exprs.map(serializeExpression)
        });
    },
    not (x) {
        return new ExpressionImpl({
            $not: serializeExpression(x)
        });
    },
    //  Other  ///////////////////////////////////////////////////////////////////
    field (fieldPath) {
        return new ExpressionImpl({
            $field: fieldPath
        });
    }
}; //# sourceMappingURL=filter_builder_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/index_range_builder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "IndexRange": (()=>IndexRange)
});
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class IndexRange {
    /**
   * @internal
   */ constructor(){
        // Property for nominal type support.
        __publicField(this, "_isIndexRange");
    }
} //# sourceMappingURL=index_range_builder.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/index_range_builder_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "IndexRangeBuilderImpl": (()=>IndexRangeBuilderImpl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$index_range_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/index_range_builder.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
class IndexRangeBuilderImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$index_range_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexRange"] {
    constructor(rangeExpressions){
        super();
        __publicField(this, "rangeExpressions");
        __publicField(this, "isConsumed");
        this.rangeExpressions = rangeExpressions;
        this.isConsumed = false;
    }
    static new() {
        return new IndexRangeBuilderImpl([]);
    }
    consume() {
        if (this.isConsumed) {
            throw new Error("IndexRangeBuilder has already been used! Chain your method calls like `q => q.eq(...).eq(...)`. See https://docs.convex.dev/using/indexes");
        }
        this.isConsumed = true;
    }
    eq(fieldName, value) {
        this.consume();
        return new IndexRangeBuilderImpl(this.rangeExpressions.concat({
            type: "Eq",
            fieldPath: fieldName,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexOrUndefinedToJson"])(value)
        }));
    }
    gt(fieldName, value) {
        this.consume();
        return new IndexRangeBuilderImpl(this.rangeExpressions.concat({
            type: "Gt",
            fieldPath: fieldName,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(value)
        }));
    }
    gte(fieldName, value) {
        this.consume();
        return new IndexRangeBuilderImpl(this.rangeExpressions.concat({
            type: "Gte",
            fieldPath: fieldName,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(value)
        }));
    }
    lt(fieldName, value) {
        this.consume();
        return new IndexRangeBuilderImpl(this.rangeExpressions.concat({
            type: "Lt",
            fieldPath: fieldName,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(value)
        }));
    }
    lte(fieldName, value) {
        this.consume();
        return new IndexRangeBuilderImpl(this.rangeExpressions.concat({
            type: "Lte",
            fieldPath: fieldName,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(value)
        }));
    }
    export() {
        this.consume();
        return this.rangeExpressions;
    }
} //# sourceMappingURL=index_range_builder_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/search_filter_builder.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SearchFilter": (()=>SearchFilter)
});
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class SearchFilter {
    /**
   * @internal
   */ constructor(){
        // Property for nominal type support.
        __publicField(this, "_isSearchFilter");
    }
} //# sourceMappingURL=search_filter_builder.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/search_filter_builder_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SearchFilterBuilderImpl": (()=>SearchFilterBuilderImpl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$search_filter_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/search_filter_builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/validate.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
class SearchFilterBuilderImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$search_filter_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchFilter"] {
    constructor(filters){
        super();
        __publicField(this, "filters");
        __publicField(this, "isConsumed");
        this.filters = filters;
        this.isConsumed = false;
    }
    static new() {
        return new SearchFilterBuilderImpl([]);
    }
    consume() {
        if (this.isConsumed) {
            throw new Error("SearchFilterBuilder has already been used! Chain your method calls like `q => q.search(...).eq(...)`.");
        }
        this.isConsumed = true;
    }
    search(fieldName, query) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(fieldName, 1, "search", "fieldName");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(query, 2, "search", "query");
        this.consume();
        return new SearchFilterBuilderImpl(this.filters.concat({
            type: "Search",
            fieldPath: fieldName,
            value: query
        }));
    }
    eq(fieldName, value) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(fieldName, 1, "eq", "fieldName");
        if (arguments.length !== 2) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(value, 2, "search", "value");
        }
        this.consume();
        return new SearchFilterBuilderImpl(this.filters.concat({
            type: "Eq",
            fieldPath: fieldName,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexOrUndefinedToJson"])(value)
        }));
    }
    export() {
        this.consume();
        return this.filters;
    }
} //# sourceMappingURL=search_filter_builder_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/query_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "QueryImpl": (()=>QueryImpl),
    "QueryInitializerImpl": (()=>QueryInitializerImpl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$filter_builder_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/filter_builder_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$index_range_builder_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/index_range_builder_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$search_filter_builder_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/search_filter_builder_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/validate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
;
;
;
;
class QueryInitializerImpl {
    constructor(tableName){
        __publicField(this, "tableName");
        this.tableName = tableName;
    }
    withIndex(indexName, indexRange) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(indexName, 1, "withIndex", "indexName");
        let rangeBuilder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$index_range_builder_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexRangeBuilderImpl"].new();
        if (indexRange !== void 0) {
            rangeBuilder = indexRange(rangeBuilder);
        }
        return new QueryImpl({
            source: {
                type: "IndexRange",
                indexName: this.tableName + "." + indexName,
                range: rangeBuilder.export(),
                order: null
            },
            operators: []
        });
    }
    withSearchIndex(indexName, searchFilter) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(indexName, 1, "withSearchIndex", "indexName");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(searchFilter, 2, "withSearchIndex", "searchFilter");
        const searchFilterBuilder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$search_filter_builder_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchFilterBuilderImpl"].new();
        return new QueryImpl({
            source: {
                type: "Search",
                indexName: this.tableName + "." + indexName,
                filters: searchFilter(searchFilterBuilder).export()
            },
            operators: []
        });
    }
    fullTableScan() {
        return new QueryImpl({
            source: {
                type: "FullTableScan",
                tableName: this.tableName,
                order: null
            },
            operators: []
        });
    }
    order(order) {
        return this.fullTableScan().order(order);
    }
    // This is internal API and should not be exposed to developers yet.
    async count() {
        const syscallJSON = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/count", {
            table: this.tableName
        });
        const syscallResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(syscallJSON);
        return syscallResult;
    }
    filter(predicate) {
        return this.fullTableScan().filter(predicate);
    }
    limit(n) {
        return this.fullTableScan().limit(n);
    }
    collect() {
        return this.fullTableScan().collect();
    }
    take(n) {
        return this.fullTableScan().take(n);
    }
    paginate(paginationOpts) {
        return this.fullTableScan().paginate(paginationOpts);
    }
    first() {
        return this.fullTableScan().first();
    }
    unique() {
        return this.fullTableScan().unique();
    }
    [Symbol.asyncIterator]() {
        return this.fullTableScan()[Symbol.asyncIterator]();
    }
}
function throwClosedError(type) {
    throw new Error(type === "consumed" ? "This query is closed and can't emit any more values." : "This query has been chained with another operator and can't be reused.");
}
class QueryImpl {
    constructor(query){
        __publicField(this, "state");
        this.state = {
            type: "preparing",
            query
        };
    }
    takeQuery() {
        if (this.state.type !== "preparing") {
            throw new Error("A query can only be chained once and can't be chained after iteration begins.");
        }
        const query = this.state.query;
        this.state = {
            type: "closed"
        };
        return query;
    }
    startQuery() {
        if (this.state.type === "executing") {
            throw new Error("Iteration can only begin on a query once.");
        }
        if (this.state.type === "closed" || this.state.type === "consumed") {
            throwClosedError(this.state.type);
        }
        const query = this.state.query;
        const { queryId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performSyscall"])("1.0/queryStream", {
            query,
            version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]
        });
        this.state = {
            type: "executing",
            queryId
        };
        return queryId;
    }
    closeQuery() {
        if (this.state.type === "executing") {
            const queryId = this.state.queryId;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performSyscall"])("1.0/queryCleanup", {
                queryId
            });
        }
        this.state = {
            type: "consumed"
        };
    }
    order(order) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(order, 1, "order", "order");
        const query = this.takeQuery();
        if (query.source.type === "Search") {
            throw new Error("Search queries must always be in relevance order. Can not set order manually.");
        }
        if (query.source.order !== null) {
            throw new Error("Queries may only specify order at most once");
        }
        query.source.order = order;
        return new QueryImpl(query);
    }
    filter(predicate) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(predicate, 1, "filter", "predicate");
        const query = this.takeQuery();
        query.operators.push({
            filter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$filter_builder_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeExpression"])(predicate(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$filter_builder_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterBuilderImpl"]))
        });
        return new QueryImpl(query);
    }
    limit(n) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(n, 1, "limit", "n");
        const query = this.takeQuery();
        query.operators.push({
            limit: n
        });
        return new QueryImpl(query);
    }
    [Symbol.asyncIterator]() {
        this.startQuery();
        return this;
    }
    async next() {
        if (this.state.type === "closed" || this.state.type === "consumed") {
            throwClosedError(this.state.type);
        }
        const queryId = this.state.type === "preparing" ? this.startQuery() : this.state.queryId;
        const { value, done } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/queryStreamNext", {
            queryId
        });
        if (done) {
            this.closeQuery();
        }
        const convexValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(value);
        return {
            value: convexValue,
            done
        };
    }
    return() {
        this.closeQuery();
        return Promise.resolve({
            done: true,
            value: void 0
        });
    }
    async paginate(paginationOpts) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(paginationOpts, 1, "paginate", "options");
        if (typeof paginationOpts?.numItems !== "number" || paginationOpts.numItems < 0) {
            throw new Error(`\`options.numItems\` must be a positive number. Received \`${paginationOpts?.numItems}\`.`);
        }
        const query = this.takeQuery();
        const pageSize = paginationOpts.numItems;
        const cursor = paginationOpts.cursor;
        const endCursor = paginationOpts?.endCursor ?? null;
        const maximumRowsRead = paginationOpts.maximumRowsRead ?? null;
        const { page, isDone, continueCursor, splitCursor, pageStatus } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/queryPage", {
            query,
            cursor,
            endCursor,
            pageSize,
            maximumRowsRead,
            maximumBytesRead: paginationOpts.maximumBytesRead,
            version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]
        });
        return {
            page: page.map((json)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(json)),
            isDone,
            continueCursor,
            splitCursor,
            pageStatus
        };
    }
    async collect() {
        const out = [];
        for await (const item of this){
            out.push(item);
        }
        return out;
    }
    async take(n) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(n, 1, "take", "n");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArgIsNonNegativeInteger"])(n, 1, "take", "n");
        return this.limit(n).collect();
    }
    async first() {
        const first_array = await this.take(1);
        return first_array.length === 0 ? null : first_array[0];
    }
    async unique() {
        const first_two_array = await this.take(2);
        if (first_two_array.length === 0) {
            return null;
        }
        if (first_two_array.length === 2) {
            throw new Error("unique() query returned more than one result");
        }
        return first_two_array[0];
    }
} //# sourceMappingURL=query_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/database_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "setupReader": (()=>setupReader),
    "setupWriter": (()=>setupWriter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$query_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/query_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/validate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
;
;
;
;
;
;
async function get(id, isSystem) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(id, 1, "get", "id");
    if (typeof id !== "string") {
        throw new Error(`Invalid argument \`id\` for \`db.get\`, expected string but got '${typeof id}': ${id}`);
    }
    const args = {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(id),
        isSystem,
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]
    };
    const syscallJSON = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/get", args);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(syscallJSON);
}
function setupReader() {
    const reader = (isSystem = false)=>{
        return {
            get: async (id)=>{
                return await get(id, isSystem);
            },
            query: (tableName)=>{
                return new TableReader(tableName, isSystem).query();
            },
            normalizeId: (tableName, id)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(tableName, 1, "normalizeId", "tableName");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(id, 2, "normalizeId", "id");
                const accessingSystemTable = tableName.startsWith("_");
                if (accessingSystemTable !== isSystem) {
                    throw new Error(`${accessingSystemTable ? "System" : "User"} tables can only be accessed from db.${isSystem ? "" : "system."}normalizeId().`);
                }
                const syscallJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performSyscall"])("1.0/db/normalizeId", {
                    table: tableName,
                    idString: id
                });
                const syscallResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(syscallJSON);
                return syscallResult.id;
            },
            // We set the system reader on the next line
            system: null,
            table: (tableName)=>{
                return new TableReader(tableName, isSystem);
            }
        };
    };
    const { system: _, ...rest } = reader(true);
    const r = reader();
    r.system = rest;
    return r;
}
async function insert(tableName, value) {
    if (tableName.startsWith("_")) {
        throw new Error("System tables (prefixed with `_`) are read-only.");
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(tableName, 1, "insert", "table");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(value, 2, "insert", "value");
    const syscallJSON = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/insert", {
        table: tableName,
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(value)
    });
    const syscallResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(syscallJSON);
    return syscallResult._id;
}
async function patch(id, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(id, 1, "patch", "id");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(value, 2, "patch", "value");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/shallowMerge", {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(id),
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchValueToJson"])(value)
    });
}
async function replace(id, value) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(id, 1, "replace", "id");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(value, 2, "replace", "value");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/replace", {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(id),
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(value)
    });
}
async function delete_(id) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(id, 1, "delete", "id");
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/remove", {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(id)
    });
}
function setupWriter() {
    const reader = setupReader();
    return {
        get: reader.get,
        query: reader.query,
        normalizeId: reader.normalizeId,
        system: reader.system,
        insert: async (table, value)=>{
            return await insert(table, value);
        },
        patch: async (id, value)=>{
            return await patch(id, value);
        },
        replace: async (id, value)=>{
            return await replace(id, value);
        },
        delete: async (id)=>{
            return await delete_(id);
        },
        table: (tableName)=>{
            return new TableWriter(tableName, false);
        }
    };
}
class TableReader {
    constructor(tableName, isSystem){
        this.tableName = tableName;
        this.isSystem = isSystem;
    }
    async get(id) {
        return get(id, this.isSystem);
    }
    query() {
        const accessingSystemTable = this.tableName.startsWith("_");
        if (accessingSystemTable !== this.isSystem) {
            throw new Error(`${accessingSystemTable ? "System" : "User"} tables can only be accessed from db.${this.isSystem ? "" : "system."}query().`);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$query_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryInitializerImpl"](this.tableName);
    }
}
class TableWriter extends TableReader {
    async insert(value) {
        return insert(this.tableName, value);
    }
    async patch(id, value) {
        return patch(id, value);
    }
    async replace(id, value) {
        return replace(id, value);
    }
    async delete(id) {
        return delete_(id);
    }
} //# sourceMappingURL=database_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/scheduler_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "setupActionScheduler": (()=>setupActionScheduler),
    "setupMutationScheduler": (()=>setupMutationScheduler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/validate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/paths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
;
;
;
;
;
;
function setupMutationScheduler() {
    return {
        runAfter: async (delayMs, functionReference, args)=>{
            const syscallArgs = runAfterSyscallArgs(delayMs, functionReference, args);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/schedule", syscallArgs);
        },
        runAt: async (ms_since_epoch_or_date, functionReference, args)=>{
            const syscallArgs = runAtSyscallArgs(ms_since_epoch_or_date, functionReference, args);
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/schedule", syscallArgs);
        },
        cancel: async (id)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(id, 1, "cancel", "id");
            const args = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(id)
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/cancel_job", args);
        }
    };
}
function setupActionScheduler(requestId) {
    return {
        runAfter: async (delayMs, functionReference, args)=>{
            const syscallArgs = {
                requestId,
                ...runAfterSyscallArgs(delayMs, functionReference, args)
            };
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/actions/schedule", syscallArgs);
        },
        runAt: async (ms_since_epoch_or_date, functionReference, args)=>{
            const syscallArgs = {
                requestId,
                ...runAtSyscallArgs(ms_since_epoch_or_date, functionReference, args)
            };
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/actions/schedule", syscallArgs);
        },
        cancel: async (id)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(id, 1, "cancel", "id");
            const syscallArgs = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(id)
            };
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/actions/cancel_job", syscallArgs);
        }
    };
}
function runAfterSyscallArgs(delayMs, functionReference, args) {
    if (typeof delayMs !== "number") {
        throw new Error("`delayMs` must be a number");
    }
    if (!isFinite(delayMs)) {
        throw new Error("`delayMs` must be a finite number");
    }
    if (delayMs < 0) {
        throw new Error("`delayMs` must be non-negative");
    }
    const functionArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionAddress"])(functionReference);
    const ts = (Date.now() + delayMs) / 1e3;
    return {
        ...address,
        ts,
        args: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(functionArgs),
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]
    };
}
function runAtSyscallArgs(ms_since_epoch_or_date, functionReference, args) {
    let ts;
    if (ms_since_epoch_or_date instanceof Date) {
        ts = ms_since_epoch_or_date.valueOf() / 1e3;
    } else if (typeof ms_since_epoch_or_date === "number") {
        ts = ms_since_epoch_or_date / 1e3;
    } else {
        throw new Error("The invoke time must a Date or a timestamp");
    }
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionAddress"])(functionReference);
    const functionArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
    return {
        ...address,
        ts,
        args: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(functionArgs),
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]
    };
} //# sourceMappingURL=scheduler_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/storage_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "setupStorageActionWriter": (()=>setupStorageActionWriter),
    "setupStorageReader": (()=>setupStorageReader),
    "setupStorageWriter": (()=>setupStorageWriter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/validate.js [app-ssr] (ecmascript)");
"use strict";
;
;
;
function setupStorageReader(requestId) {
    return {
        getUrl: async (storageId)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateArg"])(storageId, 1, "getUrl", "storageId");
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/storageGetUrl", {
                requestId,
                version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"],
                storageId
            });
        },
        getMetadata: async (storageId)=>{
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/storageGetMetadata", {
                requestId,
                version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"],
                storageId
            });
        }
    };
}
function setupStorageWriter(requestId) {
    const reader = setupStorageReader(requestId);
    return {
        generateUploadUrl: async ()=>{
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/storageGenerateUploadUrl", {
                requestId,
                version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]
            });
        },
        delete: async (storageId)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/storageDelete", {
                requestId,
                version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"],
                storageId
            });
        },
        getUrl: reader.getUrl,
        getMetadata: reader.getMetadata
    };
}
function setupStorageActionWriter(requestId) {
    const writer = setupStorageWriter(requestId);
    return {
        ...writer,
        store: async (blob, options)=>{
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performJsSyscall"])("storage/storeBlob", {
                requestId,
                version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"],
                blob,
                options
            });
        },
        get: async (storageId)=>{
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performJsSyscall"])("storage/getBlob", {
                requestId,
                version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"],
                storageId
            });
        }
    };
} //# sourceMappingURL=storage_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/registration_impl.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "actionGeneric": (()=>actionGeneric),
    "httpActionGeneric": (()=>httpActionGeneric),
    "internalActionGeneric": (()=>internalActionGeneric),
    "internalMutationGeneric": (()=>internalMutationGeneric),
    "internalQueryGeneric": (()=>internalQueryGeneric),
    "invokeFunction": (()=>invokeFunction),
    "mutationGeneric": (()=>mutationGeneric),
    "queryGeneric": (()=>queryGeneric),
    "validateReturnValue": (()=>validateReturnValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$actions_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/actions_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$vector_search_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/vector_search_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$authentication_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/authentication_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$database_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/database_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$query_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/query_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$scheduler_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/scheduler_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$storage_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/storage_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/validator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/paths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
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
async function invokeMutation(func, argsStr) {
    const requestId = "";
    const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(JSON.parse(argsStr));
    const mutationCtx = {
        db: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$database_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupWriter"])(),
        auth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$authentication_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupAuth"])(requestId),
        storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$storage_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupStorageWriter"])(requestId),
        scheduler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$scheduler_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupMutationScheduler"])(),
        runQuery: (reference, args2)=>runUdf("query", reference, args2),
        runMutation: (reference, args2)=>runUdf("mutation", reference, args2)
    };
    const result = await invokeFunction(func, mutationCtx, args);
    validateReturnValue(result);
    return JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(result === void 0 ? null : result));
}
function validateReturnValue(v2) {
    if (v2 instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$query_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryInitializerImpl"] || v2 instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$query_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryImpl"]) {
        throw new Error("Return value is a Query. Results must be retrieved with `.collect()`, `.take(n), `.unique()`, or `.first()`.");
    }
}
async function invokeFunction(func, ctx, args) {
    let result;
    try {
        result = await Promise.resolve(func(ctx, ...args));
    } catch (thrown) {
        throw serializeConvexErrorData(thrown);
    }
    return result;
}
function serializeConvexErrorData(thrown) {
    if (typeof thrown === "object" && thrown !== null && Symbol.for("ConvexError") in thrown) {
        const error = thrown;
        error.data = JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(error.data === void 0 ? null : error.data));
        error.ConvexErrorSymbol = Symbol.for("ConvexError");
        return error;
    } else {
        return thrown;
    }
}
function assertNotBrowser() {
    if (typeof window === "undefined" || !window.__convexAllowFunctionsInBrowser) {
        return;
    }
    const isRealBrowser = Object.getOwnPropertyDescriptor(globalThis, "window")?.get?.toString().includes("[native code]") ?? false;
    if (isRealBrowser) {
        throw new Error("Convex functions should not be imported in the browser.");
    }
}
function exportArgs(functionDefinition) {
    return ()=>{
        let args = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].any();
        if (typeof functionDefinition === "object" && functionDefinition.args !== void 0) {
            args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asObjectValidator"])(functionDefinition.args);
        }
        return JSON.stringify(args.json);
    };
}
function exportReturns(functionDefinition) {
    return ()=>{
        let returns;
        if (typeof functionDefinition === "object" && functionDefinition.returns !== void 0) {
            returns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asObjectValidator"])(functionDefinition.returns);
        }
        return JSON.stringify(returns ? returns.json : null);
    };
}
const mutationGeneric = (functionDefinition)=>{
    const handler = typeof functionDefinition === "function" ? functionDefinition : functionDefinition.handler;
    const func = (ctx, args)=>handler(ctx, args);
    if (func.isRegistered) {
        throw new Error("Function registered twice " + func);
    }
    assertNotBrowser();
    func.isRegistered = true;
    func.isMutation = true;
    func.isPublic = true;
    func.invokeMutation = (argsStr)=>invokeMutation(func, argsStr);
    func.exportArgs = exportArgs(functionDefinition);
    func.exportReturns = exportReturns(functionDefinition);
    func._handler = handler;
    return func;
};
const internalMutationGeneric = (functionDefinition)=>{
    const handler = typeof functionDefinition === "function" ? functionDefinition : functionDefinition.handler;
    const func = (ctx, args)=>handler(ctx, args);
    if (func.isRegistered) {
        throw new Error("Function registered twice " + func);
    }
    assertNotBrowser();
    func.isRegistered = true;
    func.isMutation = true;
    func.isInternal = true;
    func.invokeMutation = (argsStr)=>invokeMutation(func, argsStr);
    func.exportArgs = exportArgs(functionDefinition);
    func.exportReturns = exportReturns(functionDefinition);
    func._handler = handler;
    return func;
};
async function invokeQuery(func, argsStr) {
    const requestId = "";
    const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(JSON.parse(argsStr));
    const queryCtx = {
        db: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$database_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupReader"])(),
        auth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$authentication_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupAuth"])(requestId),
        storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$storage_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupStorageReader"])(requestId),
        runQuery: (reference, args2)=>runUdf("query", reference, args2)
    };
    const result = await invokeFunction(func, queryCtx, args);
    validateReturnValue(result);
    return JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(result === void 0 ? null : result));
}
const queryGeneric = (functionDefinition)=>{
    const handler = typeof functionDefinition === "function" ? functionDefinition : functionDefinition.handler;
    const func = (ctx, args)=>handler(ctx, args);
    if (func.isRegistered) {
        throw new Error("Function registered twice " + func);
    }
    assertNotBrowser();
    func.isRegistered = true;
    func.isQuery = true;
    func.isPublic = true;
    func.invokeQuery = (argsStr)=>invokeQuery(func, argsStr);
    func.exportArgs = exportArgs(functionDefinition);
    func.exportReturns = exportReturns(functionDefinition);
    func._handler = handler;
    return func;
};
const internalQueryGeneric = (functionDefinition)=>{
    const handler = typeof functionDefinition === "function" ? functionDefinition : functionDefinition.handler;
    const func = (ctx, args)=>handler(ctx, args);
    if (func.isRegistered) {
        throw new Error("Function registered twice " + func);
    }
    assertNotBrowser();
    func.isRegistered = true;
    func.isQuery = true;
    func.isInternal = true;
    func.invokeQuery = (argsStr)=>invokeQuery(func, argsStr);
    func.exportArgs = exportArgs(functionDefinition);
    func.exportReturns = exportReturns(functionDefinition);
    func._handler = handler;
    return func;
};
async function invokeAction(func, requestId, argsStr) {
    const args = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(JSON.parse(argsStr));
    const calls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$actions_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupActionCalls"])(requestId);
    const ctx = {
        ...calls,
        auth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$authentication_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupAuth"])(requestId),
        scheduler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$scheduler_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupActionScheduler"])(requestId),
        storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$storage_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupStorageActionWriter"])(requestId),
        vectorSearch: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$vector_search_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupActionVectorSearch"])(requestId)
    };
    const result = await invokeFunction(func, ctx, args);
    return JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(result === void 0 ? null : result));
}
const actionGeneric = (functionDefinition)=>{
    const handler = typeof functionDefinition === "function" ? functionDefinition : functionDefinition.handler;
    const func = (ctx, args)=>handler(ctx, args);
    if (func.isRegistered) {
        throw new Error("Function registered twice " + func);
    }
    assertNotBrowser();
    func.isRegistered = true;
    func.isAction = true;
    func.isPublic = true;
    func.invokeAction = (requestId, argsStr)=>invokeAction(func, requestId, argsStr);
    func.exportArgs = exportArgs(functionDefinition);
    func.exportReturns = exportReturns(functionDefinition);
    func._handler = handler;
    return func;
};
const internalActionGeneric = (functionDefinition)=>{
    const handler = typeof functionDefinition === "function" ? functionDefinition : functionDefinition.handler;
    const func = (ctx, args)=>handler(ctx, args);
    if (func.isRegistered) {
        throw new Error("Function registered twice " + func);
    }
    assertNotBrowser();
    func.isRegistered = true;
    func.isAction = true;
    func.isInternal = true;
    func.invokeAction = (requestId, argsStr)=>invokeAction(func, requestId, argsStr);
    func.exportArgs = exportArgs(functionDefinition);
    func.exportReturns = exportReturns(functionDefinition);
    func._handler = handler;
    return func;
};
async function invokeHttpAction(func, request) {
    const requestId = "";
    const calls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$actions_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupActionCalls"])(requestId);
    const ctx = {
        ...calls,
        auth: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$authentication_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupAuth"])(requestId),
        storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$storage_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupStorageActionWriter"])(requestId),
        scheduler: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$scheduler_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupActionScheduler"])(requestId),
        vectorSearch: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$vector_search_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupActionVectorSearch"])(requestId)
    };
    return await invokeFunction(func, ctx, [
        request
    ]);
}
const httpActionGeneric = (func)=>{
    const handler = func;
    const q = (ctx, request)=>handler(ctx, request);
    if (q.isRegistered) {
        throw new Error("Function registered twice " + func);
    }
    assertNotBrowser();
    q.isRegistered = true;
    q.isHttp = true;
    q.invokeHttpAction = (request)=>invokeHttpAction(func, request);
    q._handler = func;
    return q;
};
async function runUdf(udfType, f, args) {
    const queryArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
    const syscallArgs = {
        udfType,
        args: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(queryArgs),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionAddress"])(f)
    };
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/runUdf", syscallArgs);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonToConvex"])(result);
} //# sourceMappingURL=registration_impl.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/pagination.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "paginationOptsValidator": (()=>paginationOptsValidator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/validator.js [app-ssr] (ecmascript)");
"use strict";
;
const paginationOptsValidator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].object({
    numItems: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].number(),
    cursor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].union(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].null()),
    endCursor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].union(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].null())),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].number()),
    maximumRowsRead: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].number()),
    maximumBytesRead: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].number())
}); //# sourceMappingURL=pagination.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/storage.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
"use strict"; //# sourceMappingURL=storage.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/cron.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Crons": (()=>Crons),
    "cronJobs": (()=>cronJobs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/common/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
const DAYS_OF_WEEK = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];
const cronJobs = ()=>new Crons();
function validateIntervalNumber(n) {
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error("Interval must be an integer greater than 0");
    }
}
function validatedDayOfMonth(n) {
    if (!Number.isInteger(n) || n < 1 || n > 31) {
        throw new Error("Day of month must be an integer from 1 to 31");
    }
    return n;
}
function validatedDayOfWeek(s) {
    if (typeof s !== "string" || !DAYS_OF_WEEK.includes(s)) {
        throw new Error('Day of week must be a string like "monday".');
    }
    return s;
}
function validatedHourOfDay(n) {
    if (!Number.isInteger(n) || n < 0 || n > 23) {
        throw new Error("Hour of day must be an integer from 0 to 23");
    }
    return n;
}
function validatedMinuteOfHour(n) {
    if (!Number.isInteger(n) || n < 0 || n > 59) {
        throw new Error("Minute of hour must be an integer from 0 to 59");
    }
    return n;
}
function validatedCronString(s) {
    return s;
}
function validatedCronIdentifier(s) {
    if (!s.match(/^[ -~]*$/)) {
        throw new Error(`Invalid cron identifier ${s}: use ASCII letters that are not control characters`);
    }
    return s;
}
class Crons {
    constructor(){
        __publicField(this, "crons");
        __publicField(this, "isCrons");
        this.isCrons = true;
        this.crons = {};
    }
    /** @internal */ schedule(cronIdentifier, schedule, functionReference, args) {
        const cronArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$common$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseArgs"])(args);
        validatedCronIdentifier(cronIdentifier);
        if (cronIdentifier in this.crons) {
            throw new Error(`Cron identifier registered twice: ${cronIdentifier}`);
        }
        this.crons[cronIdentifier] = {
            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionName"])(functionReference),
            args: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(cronArgs)
            ],
            schedule
        };
    }
    /**
   * Schedule a mutation or action to run on an hourly basis.
   *
   * ```js
   * crons.interval("Clear presence data", {seconds: 30}, api.presence.clear);
   * ```
   *
   * @param identifier - A unique name for this scheduled job.
   * @param schedule - The time between runs for this scheduled job.
   * @param functionReference - A {@link FunctionReference} for the function
   * to schedule.
   * @param args - The arguments to the function.
   */ interval(cronIdentifier, schedule, functionReference, ...args) {
        const s = schedule;
        const hasSeconds = +("seconds" in s && s.seconds !== void 0);
        const hasMinutes = +("minutes" in s && s.minutes !== void 0);
        const hasHours = +("hours" in s && s.hours !== void 0);
        const total = hasSeconds + hasMinutes + hasHours;
        if (total !== 1) {
            throw new Error("Must specify one of seconds, minutes, or hours");
        }
        if (hasSeconds) {
            validateIntervalNumber(schedule.seconds);
        } else if (hasMinutes) {
            validateIntervalNumber(schedule.minutes);
        } else if (hasHours) {
            validateIntervalNumber(schedule.hours);
        }
        this.schedule(cronIdentifier, {
            ...schedule,
            type: "interval"
        }, functionReference, ...args);
    }
    /**
   * Schedule a mutation or action to run on a daily basis.
   *
   * ```js
   * crons.daily(
   *   "Reset high scores",
   *   {
   *     hourUTC: 17, // (9:30am Pacific/10:30am Daylight Savings Pacific)
   *     minuteUTC: 30,
   *   },
   *   api.scores.reset
   * )
   * ```
   *
   * @param cronIdentifier - A unique name for this scheduled job.
   * @param schedule - What time (UTC) each day to run this function.
   * @param functionReference - A {@link FunctionReference} for the function
   * to schedule.
   * @param args - The arguments to the function.
   */ hourly(cronIdentifier, schedule, functionReference, ...args) {
        const minuteUTC = validatedMinuteOfHour(schedule.minuteUTC);
        this.schedule(cronIdentifier, {
            minuteUTC,
            type: "hourly"
        }, functionReference, ...args);
    }
    /**
   * Schedule a mutation or action to run on a daily basis.
   *
   * ```js
   * crons.daily(
   *   "Reset high scores",
   *   {
   *     hourUTC: 17, // (9:30am Pacific/10:30am Daylight Savings Pacific)
   *     minuteUTC: 30,
   *   },
   *   api.scores.reset
   * )
   * ```
   *
   * @param cronIdentifier - A unique name for this scheduled job.
   * @param schedule - What time (UTC) each day to run this function.
   * @param functionReference - A {@link FunctionReference} for the function
   * to schedule.
   * @param args - The arguments to the function.
   */ daily(cronIdentifier, schedule, functionReference, ...args) {
        const hourUTC = validatedHourOfDay(schedule.hourUTC);
        const minuteUTC = validatedMinuteOfHour(schedule.minuteUTC);
        this.schedule(cronIdentifier, {
            hourUTC,
            minuteUTC,
            type: "daily"
        }, functionReference, ...args);
    }
    /**
   * Schedule a mutation or action to run on a weekly basis.
   *
   * ```js
   * crons.weekly(
   *   "Weekly re-engagement email",
   *   {
   *     hourUTC: 17, // (9:30am Pacific/10:30am Daylight Savings Pacific)
   *     minuteUTC: 30,
   *   },
   *   api.emails.send
   * )
   * ```
   *
   * @param cronIdentifier - A unique name for this scheduled job.
   * @param schedule - What day and time (UTC) each week to run this function.
   * @param functionReference - A {@link FunctionReference} for the function
   * to schedule.
   */ weekly(cronIdentifier, schedule, functionReference, ...args) {
        const dayOfWeek = validatedDayOfWeek(schedule.dayOfWeek);
        const hourUTC = validatedHourOfDay(schedule.hourUTC);
        const minuteUTC = validatedMinuteOfHour(schedule.minuteUTC);
        this.schedule(cronIdentifier, {
            dayOfWeek,
            hourUTC,
            minuteUTC,
            type: "weekly"
        }, functionReference, ...args);
    }
    /**
   * Schedule a mutation or action to run on a monthly basis.
   *
   * Note that some months have fewer days than others, so e.g. a function
   * scheduled to run on the 30th will not run in February.
   *
   * ```js
   * crons.monthly(
   *   "Bill customers at ",
   *   {
   *     hourUTC: 17, // (9:30am Pacific/10:30am Daylight Savings Pacific)
   *     minuteUTC: 30,
   *     day: 1,
   *   },
   *   api.billing.billCustomers
   * )
   * ```
   *
   * @param cronIdentifier - A unique name for this scheduled job.
   * @param schedule - What day and time (UTC) each month to run this function.
   * @param functionReference - A {@link FunctionReference} for the function
   * to schedule.
   * @param args - The arguments to the function.
   */ monthly(cronIdentifier, schedule, functionReference, ...args) {
        const day = validatedDayOfMonth(schedule.day);
        const hourUTC = validatedHourOfDay(schedule.hourUTC);
        const minuteUTC = validatedMinuteOfHour(schedule.minuteUTC);
        this.schedule(cronIdentifier, {
            day,
            hourUTC,
            minuteUTC,
            type: "monthly"
        }, functionReference, ...args);
    }
    /**
   * Schedule a mutation or action to run on a recurring basis.
   *
   * Like the unix command `cron`, Sunday is 0, Monday is 1, etc.
   *
   * ```
   *  ┌─ minute (0 - 59)
   *  │ ┌─ hour (0 - 23)
   *  │ │ ┌─ day of the month (1 - 31)
   *  │ │ │ ┌─ month (1 - 12)
   *  │ │ │ │ ┌─ day of the week (0 - 6) (Sunday to Saturday)
   * "* * * * *"
   * ```
   *
   * @param cronIdentifier - A unique name for this scheduled job.
   * @param cron - Cron string like `"15 7 * * *"` (Every day at 7:15 UTC)
   * @param functionReference - A {@link FunctionReference} for the function
   * to schedule.
   * @param args - The arguments to the function.
   */ cron(cronIdentifier, cron, functionReference, ...args) {
        const c = validatedCronString(cron);
        this.schedule(cronIdentifier, {
            cron: c,
            type: "cron"
        }, functionReference, ...args);
    }
    /** @internal */ export() {
        return JSON.stringify(this.crons);
    }
} //# sourceMappingURL=cron.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/router.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "HttpRouter": (()=>HttpRouter),
    "ROUTABLE_HTTP_METHODS": (()=>ROUTABLE_HTTP_METHODS),
    "httpRouter": (()=>httpRouter),
    "normalizeMethod": (()=>normalizeMethod)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
const ROUTABLE_HTTP_METHODS = [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "OPTIONS",
    "PATCH"
];
function normalizeMethod(method) {
    if (method === "HEAD") return "GET";
    return method;
}
const httpRouter = ()=>new HttpRouter();
class HttpRouter {
    constructor(){
        __publicField(this, "exactRoutes", /* @__PURE__ */ new Map());
        __publicField(this, "prefixRoutes", /* @__PURE__ */ new Map());
        __publicField(this, "isRouter", true);
        /**
     * Specify an HttpAction to be used to respond to requests
     * for an HTTP method (e.g. "GET") and a path or pathPrefix.
     *
     * Paths must begin with a slash. Path prefixes must also end in a slash.
     *
     * ```js
     * // matches `/profile` (but not `/profile/`)
     * http.route({ path: "/profile", method: "GET", handler: getProfile})
     *
     * // matches `/profiles/`, `/profiles/abc`, and `/profiles/a/c/b` (but not `/profile`)
     * http.route({ pathPrefix: "/profile/", method: "GET", handler: getProfile})
     * ```
     */ __publicField(this, "route", (spec)=>{
            if (!spec.handler) throw new Error(`route requires handler`);
            if (!spec.method) throw new Error(`route requires method`);
            const { method, handler } = spec;
            if (!ROUTABLE_HTTP_METHODS.includes(method)) {
                throw new Error(`'${method}' is not an allowed HTTP method (like GET, POST, PUT etc.)`);
            }
            if ("path" in spec) {
                if ("pathPrefix" in spec) {
                    throw new Error(`Invalid httpRouter route: cannot contain both 'path' and 'pathPrefix'`);
                }
                if (!spec.path.startsWith("/")) {
                    throw new Error(`path '${spec.path}' does not start with a /`);
                }
                const methods = this.exactRoutes.has(spec.path) ? this.exactRoutes.get(spec.path) : /* @__PURE__ */ new Map();
                if (methods.has(method)) {
                    throw new Error(`Path '${spec.path}' for method ${method} already in use`);
                }
                methods.set(method, handler);
                this.exactRoutes.set(spec.path, methods);
            } else if ("pathPrefix" in spec) {
                if (!spec.pathPrefix.startsWith("/")) {
                    throw new Error(`pathPrefix '${spec.pathPrefix}' does not start with a /`);
                }
                if (!spec.pathPrefix.endsWith("/")) {
                    throw new Error(`pathPrefix ${spec.pathPrefix} must end with a /`);
                }
                const prefixes = this.prefixRoutes.get(method) || /* @__PURE__ */ new Map();
                if (prefixes.has(spec.pathPrefix)) {
                    throw new Error(`${spec.method} pathPrefix ${spec.pathPrefix} is already defined`);
                }
                prefixes.set(spec.pathPrefix, handler);
                this.prefixRoutes.set(method, prefixes);
            } else {
                throw new Error(`Invalid httpRouter route entry: must contain either field 'path' or 'pathPrefix'`);
            }
        });
        /**
     * Returns a list of routed HTTP actions.
     *
     * These are used to populate the list of routes shown in the Functions page of the Convex dashboard.
     *
     * @returns - an array of [path, method, endpoint] tuples.
     */ __publicField(this, "getRoutes", ()=>{
            const exactPaths = [
                ...this.exactRoutes.keys()
            ].sort();
            const exact = exactPaths.flatMap((path)=>[
                    ...this.exactRoutes.get(path).keys()
                ].sort().map((method)=>[
                        path,
                        method,
                        this.exactRoutes.get(path).get(method)
                    ]));
            const prefixPathMethods = [
                ...this.prefixRoutes.keys()
            ].sort();
            const prefixes = prefixPathMethods.flatMap((method)=>[
                    ...this.prefixRoutes.get(method).keys()
                ].sort().map((pathPrefix)=>[
                        `${pathPrefix}*`,
                        method,
                        this.prefixRoutes.get(method).get(pathPrefix)
                    ]));
            return [
                ...exact,
                ...prefixes
            ];
        });
        /**
     * Returns the appropriate HTTP action and its routed request path and method.
     *
     * The path and method returned are used for logging and metrics, and should
     * match up with one of the routes returned by `getRoutes`.
     *
     * For example,
     *
     * ```js
     * http.route({ pathPrefix: "/profile/", method: "GET", handler: getProfile});
     *
     * http.lookup("/profile/abc", "GET") // returns [getProfile, "GET", "/profile/*"]
     *```
     *
     * @returns - a tuple [{@link PublicHttpAction}, method, path] or null.
     */ __publicField(this, "lookup", (path, method)=>{
            method = normalizeMethod(method);
            const exactMatch = this.exactRoutes.get(path)?.get(method);
            if (exactMatch) return [
                exactMatch,
                method,
                path
            ];
            const prefixes = this.prefixRoutes.get(method) || /* @__PURE__ */ new Map();
            const prefixesSorted = [
                ...prefixes.entries()
            ].sort(([prefixA, _a], [prefixB, _b])=>prefixB.length - prefixA.length);
            for (const [pathPrefix, endpoint] of prefixesSorted){
                if (path.startsWith(pathPrefix)) {
                    return [
                        endpoint,
                        method,
                        `${pathPrefix}*`
                    ];
                }
            }
            return null;
        });
        /**
     * Given a JSON string representation of a Request object, return a Response
     * by routing the request and running the appropriate endpoint or returning
     * a 404 Response.
     *
     * @param argsStr - a JSON string representing a Request object.
     *
     * @returns - a Response object.
     */ __publicField(this, "runRequest", async (argsStr, requestRoute)=>{
            const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performJsSyscall"])("requestFromConvexJson", {
                convexJson: JSON.parse(argsStr)
            });
            let pathname = requestRoute;
            if (!pathname || typeof pathname !== "string") {
                pathname = new URL(request.url).pathname;
            }
            const method = request.method;
            const match = this.lookup(pathname, method);
            if (!match) {
                const response2 = new Response(`No HttpAction routed for ${pathname}`, {
                    status: 404
                });
                return JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performJsSyscall"])("convexJsonFromResponse", {
                    response: response2
                }));
            }
            const [endpoint, _method, _path] = match;
            const response = await endpoint.invokeHttpAction(request);
            return JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performJsSyscall"])("convexJsonFromResponse", {
                response
            }));
        });
    }
} //# sourceMappingURL=router.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "componentsGeneric": (()=>componentsGeneric),
    "createFunctionHandle": (()=>createFunctionHandle),
    "currentSystemUdfInComponent": (()=>currentSystemUdfInComponent),
    "defineApp": (()=>defineApp),
    "defineComponent": (()=>defineComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/paths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/value.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
;
;
;
;
async function createFunctionHandle(functionReference) {
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFunctionAddress"])(functionReference);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["performAsyncSyscall"])("1.0/createFunctionHandle", {
        ...address,
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]
    });
}
class InstalledComponent {
    constructor(definition, name){
        /**
     * @internal
     */ __publicField(this, "_definition");
        /**
     * @internal
     */ __publicField(this, "_name");
        this._definition = definition;
        this._name = name;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setReferencePath"])(this, `_reference/childComponent/${name}`);
    }
    get exports() {
        return createExports(this._name, []);
    }
}
function createExports(name, pathParts) {
    const handler = {
        get (_, prop) {
            if (typeof prop === "string") {
                const newParts = [
                    ...pathParts,
                    prop
                ];
                return createExports(name, newParts);
            } else if (prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toReferencePath"]) {
                let reference = `_reference/childComponent/${name}`;
                for (const part of pathParts){
                    reference += `/${part}`;
                }
                return reference;
            } else {
                return void 0;
            }
        }
    };
    return new Proxy({}, handler);
}
function use(definition, options) {
    const importedComponentDefinition = definition;
    if (typeof importedComponentDefinition.componentDefinitionPath !== "string") {
        throw new Error("Component definition does not have the required componentDefinitionPath property. This code only works in Convex runtime.");
    }
    const name = options?.name || // added recently
    importedComponentDefinition.defaultName || // can be removed once backend is out
    importedComponentDefinition.componentDefinitionPath.split("/").pop();
    this._childComponents.push([
        name,
        importedComponentDefinition,
        {}
    ]);
    return new InstalledComponent(definition, name);
}
function exportAppForAnalysis() {
    const definitionType = {
        type: "app"
    };
    const childComponents = serializeChildComponents(this._childComponents);
    return {
        definitionType,
        childComponents,
        httpMounts: {},
        exports: serializeExportTree(this._exportTree)
    };
}
function serializeExportTree(tree) {
    const branch = [];
    for (const [key, child] of Object.entries(tree)){
        let node;
        if (typeof child === "string") {
            node = {
                type: "leaf",
                leaf: child
            };
        } else {
            node = serializeExportTree(child);
        }
        branch.push([
            key,
            node
        ]);
    }
    return {
        type: "branch",
        branch
    };
}
function serializeChildComponents(childComponents) {
    return childComponents.map(([name, definition, p])=>{
        let args = null;
        if (p !== null) {
            args = [];
            for (const [name2, value] of Object.entries(p)){
                if (value !== void 0) {
                    args.push([
                        name2,
                        {
                            type: "value",
                            value: JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$value$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convexToJson"])(value))
                        }
                    ]);
                }
            }
        }
        const path = definition.componentDefinitionPath;
        if (!path) throw new Error("no .componentPath for component definition " + JSON.stringify(definition, null, 2));
        return {
            name,
            path,
            args
        };
    });
}
function exportComponentForAnalysis() {
    const args = Object.entries(this._args).map(([name, validator])=>[
            name,
            {
                type: "value",
                value: JSON.stringify(validator.json)
            }
        ]);
    const definitionType = {
        type: "childComponent",
        name: this._name,
        args
    };
    const childComponents = serializeChildComponents(this._childComponents);
    return {
        name: this._name,
        definitionType,
        childComponents,
        httpMounts: {},
        exports: serializeExportTree(this._exportTree)
    };
}
function defineComponent(name) {
    const ret = {
        _isRoot: false,
        _name: name,
        _args: {},
        _childComponents: [],
        _exportTree: {},
        _onInitCallbacks: {},
        export: exportComponentForAnalysis,
        use,
        // pretend to conform to ComponentDefinition, which temporarily expects __args
        ...{}
    };
    return ret;
}
function defineApp() {
    const ret = {
        _isRoot: true,
        _childComponents: [],
        _exportTree: {},
        export: exportAppForAnalysis,
        use
    };
    return ret;
}
function currentSystemUdfInComponent(componentId) {
    return {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toReferencePath"]]: `_reference/currentSystemUdfInComponent/${componentId}`
    };
}
function createChildComponents(root, pathParts) {
    const handler = {
        get (_, prop) {
            if (typeof prop === "string") {
                const newParts = [
                    ...pathParts,
                    prop
                ];
                return createChildComponents(root, newParts);
            } else if (prop === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toReferencePath"]) {
                if (pathParts.length < 1) {
                    const found = [
                        root,
                        ...pathParts
                    ].join(".");
                    throw new Error(`API path is expected to be of the form \`${root}.childComponent.functionName\`. Found: \`${found}\``);
                }
                return `_reference/childComponent/` + pathParts.join("/");
            } else {
                return void 0;
            }
        }
    };
    return new Proxy({}, handler);
}
const componentsGeneric = ()=>createChildComponents("components", []); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$syscall$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/syscall.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$paths$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/paths.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/index.js [app-ssr] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/schema.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SchemaDefinition": (()=>SchemaDefinition),
    "TableDefinition": (()=>TableDefinition),
    "defineSchema": (()=>defineSchema),
    "defineTable": (()=>defineTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/values/validator.js [app-ssr] (ecmascript)");
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value;
var __publicField = (obj, key, value)=>__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
;
class TableDefinition {
    /**
   * @internal
   */ constructor(documentType){
        __publicField(this, "indexes");
        __publicField(this, "searchIndexes");
        __publicField(this, "vectorIndexes");
        // The type of documents stored in this table.
        __publicField(this, "validator");
        this.indexes = [];
        this.searchIndexes = [];
        this.vectorIndexes = [];
        this.validator = documentType;
    }
    /**
   * Define an index on this table.
   *
   * To learn about indexes, see [Defining Indexes](https://docs.convex.dev/using/indexes).
   *
   * @param name - The name of the index.
   * @param fields - The fields to index, in order. Must specify at least one
   * field.
   * @returns A {@link TableDefinition} with this index included.
   */ index(name, fields) {
        this.indexes.push({
            indexDescriptor: name,
            fields
        });
        return this;
    }
    /**
   * Define a search index on this table.
   *
   * To learn about search indexes, see [Search](https://docs.convex.dev/text-search).
   *
   * @param name - The name of the index.
   * @param indexConfig - The search index configuration object.
   * @returns A {@link TableDefinition} with this search index included.
   */ searchIndex(name, indexConfig) {
        this.searchIndexes.push({
            indexDescriptor: name,
            searchField: indexConfig.searchField,
            filterFields: indexConfig.filterFields || []
        });
        return this;
    }
    /**
   * Define a vector index on this table.
   *
   * To learn about vector indexes, see [Vector Search](https://docs.convex.dev/vector-search).
   *
   * @param name - The name of the index.
   * @param indexConfig - The vector index configuration object.
   * @returns A {@link TableDefinition} with this vector index included.
   */ vectorIndex(name, indexConfig) {
        this.vectorIndexes.push({
            indexDescriptor: name,
            vectorField: indexConfig.vectorField,
            dimensions: indexConfig.dimensions,
            filterFields: indexConfig.filterFields || []
        });
        return this;
    }
    /**
   * Work around for https://github.com/microsoft/TypeScript/issues/57035
   */ self() {
        return this;
    }
    /**
   * Export the contents of this definition.
   *
   * This is called internally by the Convex framework.
   * @internal
   */ export() {
        return {
            indexes: this.indexes,
            searchIndexes: this.searchIndexes,
            vectorIndexes: this.vectorIndexes,
            documentType: this.validator.json
        };
    }
}
function defineTable(documentSchema) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidator"])(documentSchema)) {
        return new TableDefinition(documentSchema);
    } else {
        return new TableDefinition(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].object(documentSchema));
    }
}
class SchemaDefinition {
    /**
   * @internal
   */ constructor(tables, options){
        __publicField(this, "tables");
        __publicField(this, "strictTableNameTypes");
        __publicField(this, "schemaValidation");
        this.tables = tables;
        this.schemaValidation = options?.schemaValidation === void 0 ? true : options.schemaValidation;
    }
    /**
   * Export the contents of this definition.
   *
   * This is called internally by the Convex framework.
   * @internal
   */ export() {
        return JSON.stringify({
            tables: Object.entries(this.tables).map(([tableName, definition])=>{
                const { indexes, searchIndexes, vectorIndexes, documentType } = definition.export();
                return {
                    tableName,
                    indexes,
                    searchIndexes,
                    vectorIndexes,
                    documentType
                };
            }),
            schemaValidation: this.schemaValidation
        });
    }
}
function defineSchema(schema, options) {
    return new SchemaDefinition(schema, options);
}
const _systemSchema = defineSchema({
    _scheduled_functions: defineTable({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].string(),
        args: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].any()),
        scheduledTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].float64(),
        completedTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].float64()),
        state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].union(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].object({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].literal("pending")
        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].object({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].literal("inProgress")
        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].object({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].literal("success")
        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].object({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].literal("failed"),
            error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].string()
        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].object({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].literal("canceled")
        }))
    }),
    _storage: defineTable({
        sha256: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].string(),
        size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].float64(),
        contentType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$values$2f$validator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"].string())
    })
}); //# sourceMappingURL=schema.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
"use strict";
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
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/index.js [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/database.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$impl$2f$registration_impl$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/impl/registration_impl.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$pagination$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/pagination.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$search_filter_builder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/search_filter_builder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$storage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/storage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$cron$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/cron.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/router.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/components/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$convex$40$1$2e$17$2e$0_$40$clerk$2b$clerk$2d$react$40$5$2e$15$2e$0_react$2d$dom$40$19$2e$0$2e$0$2d$rc$2d$02c0e824$2d$20241028_react$40$19$2e$0$2e$0$2d$rc_emqgfpme5hpl4mnefkof4abziy$2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/convex@1.17.0_@clerk+clerk-react@5.15.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc_emqgfpme5hpl4mnefkof4abziy/node_modules/convex/dist/esm/server/index.js [app-ssr] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=002f1_convex_dist_esm_server_9306ef._.js.map