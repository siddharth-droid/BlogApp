(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/ssr/app_notes_CreateNote.tsx.js", {

"[project-with-next]/app/notes/CreateNote.tsx (ecmascript, ssr)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, p: process, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>CreateNote
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/jsx-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$navigation$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/navigation.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function CreateNote() {
    const [title, setTitle] = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__["useState"]("");
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__["useState"]("");
    const router = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$navigation$2e$js__["useRouter"]();
    const create = async ()=>{
        await fetch("http://127.0.0.1:8090/api/collections/notesDemo/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content
            })
        });
        setContent("");
        setTitle("");
        router.refresh();
    };
    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsxs"]("form", {
        onSubmit: create,
        children: [
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"]("h3", {
                children: "Create a new Note"
            }),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"]("input", {
                type: "text",
                placeholder: "Title",
                value: title,
                onChange: (e)=>setTitle(e.target.value)
            }),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"]("textarea", {
                placeholder: "Content",
                value: content,
                onChange: (e)=>setContent(e.target.value)
            }),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"]("button", {
                type: "submit",
                children: "Create note"
            })
        ]
    });
}

})()),
}]);


//# sourceMappingURL=app_notes_CreateNote.tsx.js.map