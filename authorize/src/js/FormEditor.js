import CodeMirror from "codemirror"; 
import SummerNoteJs from "./summernote";
import $ from "jquery"; 


export default function FormEditorJs() {
    SummerNoteJs()

    $(".codeeditor").each(function () {
        const editor = CodeMirror.fromTextArea(this, {
            lineNumbers: true,
            theme: "duotone-dark",
            mode: "javascript",
            height: 200,
        });
        editor.setSize("100%", 200);
    });
    $("select").selectric(); 
    $(".inputtags").tagsinput("items");

}