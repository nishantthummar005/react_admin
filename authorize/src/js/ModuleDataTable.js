import $ from "jquery";
export default function ModuleDataTabl() {

    $("[data-checkboxes]").each(function () {
        var me = $(this),
            group = me.data("checkboxes"),
            role = me.data("checkbox-role");

        me.change(function () {
            var all = $(
                '[data-checkboxes="' + group + '"]:not([data-checkbox-role="dad"])'
            ),
                checked = $(
                    '[data-checkboxes="' +
                    group +
                    '"]:not([data-checkbox-role="dad"]):checked'
                ),
                dad = $(
                    '[data-checkboxes="' + group + '"][data-checkbox-role="dad"]'
                ),
                total = all.length,
                checked_length = checked.length;

            if (role === "dad") {
                if (me.is(":checked")) {
                    all.prop("checked", true);
                } else {
                    all.prop("checked", false);
                }
            } else {
                if (checked_length >= total) {
                    dad.prop("checked", true);
                } else {
                    dad.prop("checked", false);
                }
            }
        });
    });
    if (!$.fn.DataTable.isDataTable("#myTable")) {
        $(document).ready(function () {
            setTimeout(function () {
                // if (typeof dt == 'undefined') {
                    $("#dataTable").DataTable({
                        pagingType: "full_numbers",
                        pageLength: 10,
                        processing: true,
                        dom: "Bfrtip",
                        select: {
                            style: "single",
                        },
                        buttons: [
                            {
                                extend: "pageLength",
                                className: "btn btn-dark",
                            },
                            {
                                extend: "copy",
                                className: "btn btn-primary",
                            },
                            {
                                extend: "csv",
                                className: "btn btn-primary",
                            },
                            {
                                extend: "print",
                                customize: function (win) {
                                    $(win.document.body).css("font-size", "10pt");
                                    $(win.document.body)
                                        .find("table")
                                        .addClass("compact")
                                        .css("font-size", "inherit");
                                },
                                className: "btn btn-primary",
                            },
                        ],

                        fnRowCallback: function (
                            nRow,
                            aData,
                            iDisplayIndex,
                            iDisplayIndexFull
                        ) {
                            var index = iDisplayIndexFull + 1;
                            $("td:first", nRow).html(index);
                            return nRow;
                        },

                        lengthMenu: [
                            [10, 20, 30, 50, -1],
                            [10, 20, 30, 50, "All"],
                        ],
                        columnDefs: [
                            {
                                targets: 0,
                                render: function (data, type, row, meta) {
                                    return type === "export" ? meta.row + 1 : data;
                                },
                            },
                        ],
                    });
                // }
            }, 1000);
        });
    }

    $("#table-1").dataTable({
        columnDefs: [{
            sortable: true,
            targets: [0, 2, 3],
            dom: 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
        }],
    });

    $("#table-2").dataTable({
        columnDefs: [{
            sortable: false,
            targets: [0, 2, 3]
        }],
    });
}