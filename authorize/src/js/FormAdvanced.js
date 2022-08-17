// import pwstrength from "../../node_modules/@aacassandra";

import moment from "moment";
import $ from "jquery";
import Cleave from "cleave.js";
import * as jQuery from "jquery"
import "cleave.js/dist/addons/cleave-phone.us.js";

export default function AdvanceForm() {
    // eslint-disable-next-line
    var cleavePN = new Cleave(".phone-number", {
        phone: true,
        phoneRegionCode: "us",
    }); 
    // eslint-disable-next-line
    var cleaveC = new Cleave(".currency", {
        numeral: true,
        numeralThousandsGroupStyle: "thousand",
    });
    // eslint-disable-next-line
    var cleavePC = new Cleave(".purchase-code", {
        delimiter: "-",
        blocks: [4, 4, 4, 4],
        uppercase: true,
    });
    // eslint-disable-next-line
    var cleaveI = new Cleave(".invoice-input", {
        prefix: "INV",
        delimiter: "-",
        blocks: [10],
        uppercase: true,
    });
    // eslint-disable-next-line
    var cleaveD = new Cleave(".datemask", {
        date: true,
        datePattern: ["Y", "m", "d"],
    });
    var cc_last_type;
    // eslint-disable-next-line
    var cleaveCC = new Cleave(".creditcard", {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
            if (type !== "unknown") {
                if (type === "amex") {
                    type = "americanexpress";
                } else if (type === "mastercard") {
                    type = "mastercard";
                } else if (type === "visa") {
                    type = "visa";
                } else if (type === "diners") {
                    type = "dinersclub";
                } else if (type === "discover") {
                    type = "discover";
                } else if (type === "jcb") {
                    type = "jcb";
                }
                $(".creditcard").removeClass(cc_last_type);
                $(".creditcard").addClass(type);
                cc_last_type = type;
            }
        },
    });

    // $(".pwstrength").pwstrength();

    $(".daterange-cus").daterangepicker({
        locale: {
            format: "YYYY-MM-DD",
        },
        drops: "down",
        opens: "right",
    });
    $(".daterange-btn").daterangepicker({
            ranges: {
                Today: [moment(), moment()],
                Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                "Last 7 Days": [moment().subtract(6, "days"), moment()],
                "Last 30 Days": [moment().subtract(29, "days"), moment()],
                "This Month": [moment().startOf("month"), moment().endOf("month")],
                "Last Month": [
                    moment()
                    .subtract(1, "month")
                    .startOf("month"),
                    moment()
                    .subtract(1, "month")
                    .endOf("month"),
                ],
            },
            startDate: moment().subtract(29, "days"),
            endDate: moment(),
        },
        function (start, end) {
            $(".daterange-btn span").html(
                start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
            );
        }
    );

    $(".colorpickerinput").colorpicker({
        format: "hex",
        component: ".input-group-append",
    });
    $(".inputtags").tagsinput("items");

    if (jQuery().daterangepicker) {
        if ($('.datepicker').length) {
            $('.datepicker').daterangepicker({
                locale: {
                    format: 'YYYY-MM-DD'
                },
                singleDatePicker: true
            });
        }
        if ($('.datetimepicker').length) {
            $('.datetimepicker').daterangepicker({
                locale: {
                    format: 'YYYY-MM-DD hh:mm'
                },
                singleDatePicker: true,
                timePicker: true,
                timePicker24Hour: true
            });
        }
        if ($('.daterange').length) {
            $('.daterange').daterangepicker({
                locale: {
                    format: 'YYYY-MM-DD'
                },
                drops: 'down',
                opens: 'right'
            });
        }
    }
    if (jQuery().timepicker && $('.timepicker').length) {
        $('.timepicker').timepicker({
            icons: {
                up: 'fas fa-chevron-up',
                down: 'fas fa-chevron-down'
            }
        });
    }
    $(".colorpickerinput").colorpicker({
        format: 'hex',
        component: '.input-group-append',
    });
    $(".inputtags").tagsinput('items');



}