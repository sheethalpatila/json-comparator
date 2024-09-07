import React from 'react';
import ReactDiffViewer from 'react-diff-viewer';

const JsonDisplay = ({ oldJson, newJson }) => {
    const oldJsonString = JSON.stringify(oldJson, null, 2);
    const newJsonString = JSON.stringify(newJson, null, 2);

    return (
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <ReactDiffViewer
                oldValue={oldJsonString}
                newValue={newJsonString}
                splitView={true}
                compareMethod="diffWords"
                styles={{
                    variables: {
                        light: {
                            diffViewerBackground: '#f7f7f7',
                            addedBackground: '#e6ffed',
                            removedBackground: '#ffeef0',
                        },
                    },
                }}
            />
        </div>
    );
};

export default JsonDisplay;
