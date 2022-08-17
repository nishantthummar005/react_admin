import React, { useContext, useState } from 'react'
import termsContext from '../../../context/common/Terms/termsContext';
import $ from 'jquery';
import ReactSummernote from 'react-summernote';

const UpdateData = (props) => {
    const { getEditData, page, limit } = props;
    const [getSummerval, setSummerval] = useState('');
    const context = useContext(termsContext);
    const { updateTermsRecord } = context;
    // call udpate API 
    const updateData = async () => {
        updateTermsRecord(getEditData._id, getSummerval, page, limit);
        $('#updateModal').modal('toggle');   // close modal
    }

    // Get Summernote value
    const getSummernoteVal = (content) => {
        setSummerval(content.trim())
    }
    // Upload Image in Summernote
    const onImageUpload = (fileList) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            ReactSummernote.insertImage(reader.result);
        }
        reader.readAsDataURL(fileList[0]);
    }

    return (
        <>
            <div className="modal fade" id="updateModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Data</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form name='editForm' method="post" autoComplete="off"> 
                                <div className="form-group">
                                    <label htmlFor="terms" className="form-label"><span className='text-danger'>*</span>Edit Data</label> 
                                    <ReactSummernote
                                        value={getEditData.terms}
                                        options={{
                                            lang: 'en',
                                            height: 150,
                                            dialogsInBody: true,
                                            toolbar: [
                                                ['style', ['style']],
                                                ['font', ['bold', 'underline', 'clear']],
                                                ['fontname', ['fontname', 'fontsize']],
                                                ['para', ['ul', 'ol', 'paragraph']],
                                                ['table', ['table']],
                                                ['color', ['forecolor', 'backcolor']],
                                                ['insert', ['link', 'picture', 'video']],
                                                ['view', ['codeview']]
                                            ]
                                        }}
                                        onChange={getSummernoteVal}
                                        onImageUpload={onImageUpload}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
                            <button type="button" onClick={updateData} disabled={!getEditData.terms} form='editForm' className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateData