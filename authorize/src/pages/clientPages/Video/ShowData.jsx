import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import videoContext from '../../../context/common/Video/videoContext';
import swal from "sweetalert";
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";

const ShowData = (props) => {
    const { getEditItem, videoAllData, page, setPage, limit, setlimit } = props;
    const context = useContext(videoContext);
    const { deleteVideo, perRowsChange, loading } = context;

    // define number of columns
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
            width: "65%"
        },
        {
            name: 'Video',
            cell: (row) => (
                <>
                    <a className='btn btn-primary btn-sm' href={(row.type === 'upload') ? ("../../" + ((row.path) ? row.path : 'assets/img/404.png')) : row.path} title={'Click to view full screen'} target={'_blank'}>Watch Video</a>
                </>
            ),
            sortable: true,
            width: "20%"
        },
        {
            name: "Action",
            cell: (row) => (
                <>
                    <button type="button" onClick={() => { removeItem(row._id) }} className="btn btn-danger btn-sm" title="Delete">
                        <i className="fas fa-trash" title="Delete"></i>
                    </button> &nbsp;
                    <button type="button" onClick={() => { getEditItem(row._id) }} className="btn btn-primary btn-sm" title='Edit' data-backdrop="static" data-keyboard="false" data-toggle="modal" data-target="#updateModal">
                        <i className="fas fa-pen" title='Edit'></i>
                    </button>
                </>
            ),
            width: "15%"
        }
    ];

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
                    deleteVideo(id, page, limit);
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

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-6">
                        <h2 className="section-title mt-0">Show Video Data</h2>
                        <p className="section-lead">
                            Get information Video yourself on this page.
                        </p>
                    </div>
                    <div className="col-6 text-right">
                        <Link to="/clientPages/video/add" className="btn btn-info">Add Video</Link>
                    </div>
                </div>
                <div className="row mt-sm-4">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card card-primary">
                            <div className="card-body">
                                <DataTableExtensions columns={columns} data={videoAllData.data}>
                                    <DataTable
                                        title="Video Data"
                                        columns={columns}
                                        data={videoAllData.data}
                                        progressPending={loading}
                                        highlightOnHover
                                        selectableRows
                                        selectableRowsHighlight
                                        fixedHeader
                                        responsive
                                        pagination
                                        paginationServer
                                        paginationTotalRows={videoAllData.totalItems}
                                        paginationPerPage={limit}
                                        onChangeRowsPerPage={handlePerRowsChange}
                                        paginationRowsPerPageOptions={[5, 10, 15, 25, 50, 100, 200]}
                                        onChangePage={page => setPage(page)}
                                        onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
                                    />
                                </DataTableExtensions>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowData