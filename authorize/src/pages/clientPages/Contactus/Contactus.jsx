import React, { useState, useEffect, useContext } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import Breadcrumb from '../../../components/admin/breadcrumb';
import swal from "sweetalert";
import contactusContext from '../../../context/common/Contact/contactusContext';
import adminContext from "../../../context/auth/adminContext";

function Contactus() {
    const [contactAllData, setcontactAllData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(5);
    const admincontext = useContext(adminContext);
    const { checkAuthToken } = admincontext;
    const context = useContext(contactusContext);
    const { allContact, loading, getAllContactus, deleteContactus, perRowsChange } = context;

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
            width: "15%"
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            width: "20%"
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
            width: "12%"
        },
        {
            name: 'Message',
            selector: row => row.message,
            sortable: true
        }, {
            name: "Action",
            cell: (row) => (
                <button type="button" onClick={() => { removeItem(row._id) }} className="btn btn-danger btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
            ),
            width: "7%"
        }
    ];

    const getContactList = () => {
        setcontactAllData(allContact);
    };

    /* ************************************************
                   REMOVE RECORDS
   ***********************************************/
    // Remove Item through axios API
    const removeItem = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    deleteContactus(id, page, limit);
                    swal("Yeah! Your file has been deleted!", {
                        icon: "success",
                    });
                } catch (error) {
                    swal("Oops!", error.message, "danger");
                }
            }
        });
    }

    // change per page or anything in datatable
    const handlePerRowsChange = async (newPerPage, page) => {
        setlimit(newPerPage);
        perRowsChange(newPerPage, page);
    };

    useEffect(() => {
        // SummerNoteJs();    
        checkAuthToken()  // check whether token has been created or not (if not then redirect to login) 
        getAllContactus(page, limit);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        getContactList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allContact]);

    
    return (
        <>
            <div className="main-content">
                <section className="section">
                    <Breadcrumb title="Contact us" />
                    
                    <div className="section-body">
                        <DataTableExtensions columns={columns} data={contactAllData.data}>
                            <DataTable
                                title="Contact Data"
                                columns={columns}
                                data={contactAllData.data}
                                progressPending={loading}
                                highlightOnHover
                                selectableRows
                                selectableRowsHighlight
                                fixedHeader
                                responsive
                                pagination
                                paginationServer
                                paginationTotalRows={contactAllData.totalItems}
                                paginationPerPage={limit}
                                onChangeRowsPerPage={handlePerRowsChange}
                                paginationRowsPerPageOptions={[5, 10, 15, 25, 50, 100, 200]}
                                onChangePage={page => setPage(page)}
                                onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
                            />
                        </DataTableExtensions>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Contactus;