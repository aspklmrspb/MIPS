import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function TextEditor(props) {
    const editorRef = useRef(null);
    const SaveTextEditor = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <Box sx={{ padding: '15px' }}>
            <Editor
                apiKey='m1pjittgt8zmg249j7pc9zbroi3yfne8kuclqqyzeu3627w4'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={props.InitialContent}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'link', 'anchor', 'insertdatetime', 'media', 'table', 'searchreplace'
                    ],
                    toolbar: 'undo redo | searchreplace bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | link anchor insertdatetime | table ',
                    menubar: 'file | edit | view | insert | format | table',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <Button variant="contained" size="large"
                onClick={SaveTextEditor}
                sx={{ margin: '15px 0px', width: '150px', float: 'right' }}
            >
                Save
            </Button>
        </Box>
    );
}
