(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/rsc/app_notes_[id]_page.tsx.js", {

"[project-with-next]/app/notes/[id]/page.tsx (ecmascript, rsc)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, p: process, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>NotePage
});
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__ = __turbopack_import__("[project-with-next]/node_modules/next/dist/compiled/react/jsx-runtime.js (ecmascript, rsc)");
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$app$2f$notes$2f$Notes$2e$module$2e$css__ = __turbopack_import__("[project-with-next]/app/notes/Notes.module.css (css module, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
async function getNote(noteId) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/notesDemo/records/${noteId}`, {
        next: {
            revalidate: 10
        }
    });
    const data = await res.json();
    return data;
}
async function NotePage({ params  }) {
    const note = await getNote(params.id);
    return __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsxs"]("div", {
        children: [
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsxs"]("h1", {
                children: [
                    "notes/",
                    note.id
                ]
            }),
            __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsxs"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$app$2f$notes$2f$Notes$2e$module$2e$css__["default"].note,
                children: [
                    __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"]("h3", {
                        children: note.title
                    }),
                    __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"]("h5", {
                        children: note.content
                    }),
                    __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__["jsx"]("p", {
                        children: note.created
                    })
                ]
            })
        ]
    });
}

})()),
}]);


//# sourceMappingURL=app_notes_[id]_page.tsx.js.map