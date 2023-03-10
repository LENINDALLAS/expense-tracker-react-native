export const uploadPicture = async (value) => {
    const data = new FormData();
    data.append("file", value);
    data.append("upload_preset", "inventProfile");                             //Cloudinary
    data.append("cloud_name", "lenindallas");                            //Cloudinary
    fetch("	https://api.cloudinary.com/v1_1/lenindallas/image/upload", {
        method: "POST",
        body: data,
    })
        .then((res) => res.json())
        .then(async (data) => {
            console.log('cloudinary', data.secure_url);
        })

        .catch((err) => alert('Image upload unsuccessful, Please try again.'));
}