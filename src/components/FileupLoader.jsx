import React, { useState } from "react";
import { supabase } from "../supabase";

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleUpload = async () => {
        if (!file) return alert("Please select a file!");

        setUploading(true);
        const { data, error } = await supabase.storage.from("uploads").upload(`public/${file.name}`, file);

        if (error) console.error("Upload failed:", error);
        else console.log("File uploaded successfully:", data);

        setUploading(false);
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload} disabled={uploading} className="px-4 py-2 bg-blue-500 text-white rounded">
                {uploading ? "Uploading..." : "Upload File"}
            </button>
        </div>
    );
};

export default FileUploader;
